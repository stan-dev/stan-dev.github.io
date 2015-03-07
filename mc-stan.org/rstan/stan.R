## runs Stan in parallel (if not optimizing) with caching of compiled Stan programs
stan <- function(stanProgram,      # path to .stan file or program string
                 optimize = FALSE, # use sampling() (default) or optimizing()
                 cores = parallel::detectCores(), # number of cores to use if sampling()
                 pedantic = FALSE, # whether to print status messages
                 sound = 1,        # sound when sampling complete (if beepr is installed)
                 ...) {            # further arguments to sampling() or optimizing()
  dots <- list(...)
  if(missing(stanProgram)) {
    if(!is.null(dots$fit)) {
      stanProgram <- rstan::get_stancode(dots$fit)
    }
    else if(!is.null(dots$file)) {
      stanProgram <- dots$file
      dots$file <- NULL
    }
    else {
      stanProgram <- dots$model_code
      dots$model_code <- NULL
    }
  }
  if(length(stanProgram) > 1 || !grepl("stan$", stanProgram)) { # program string
    tf <- tempfile()
    writeLines(stanProgram, con = tf)
    stanProgram <- file.path(dirname(tf), paste0(tools::md5sum(tf), ".stan"))
    if(!file.exists(stanProgram)) file.rename(from = tf, to = stanProgram)
  }
  else if(!file.exists(stanProgram)) stop(paste(stanProgram, "does not exist"))

  mtime <- file.info(stanProgram)$mtime
  chains <- dots$chains
  if(is.null(chains)) chains <- 4L
  stanProgram.rda <- gsub("stan$", "rda", stanProgram)
  if(!file.exists(stanProgram.rda) |
     file.info(stanProgram.rda)$mtime <  mtime | 
     mtime < as.POSIXct(packageDescription("rstan")$Date) ) {
         
    if(pedantic) cat("Model needs compilation.\n")
    dots$chains <- 0L
    dots$file <- stanProgram
    stanExe <- suppressMessages(do.call(rstan::stan, args = dots))
    saveRDS(stanExe, file = stanProgram.rda)
    dots$file <- NULL
  } 
  else {
    if(pedantic) cat("Loading cached model.\n")
    stanExe <- readRDS(stanProgram.rda)
  }
  
  if(optimize) {
    dots$object <- get_stanmodel(stanExe)
    dots$chains <- NULL
    out <- do.call(rstan::optimizing, args = dots)
    return(out)
  }

  # sampling()
  dots$chains <- 1L
  dots$fit <- stanExe
  if(chains == 0) return(stanExe)
  if(chains == 1) return(do.call(rstan::stan, args = dots))

  dots$refresh <- 500L
  sinkfile <- paste0(tempfile(), "_StanProgress.txt")
  cat("Refresh to see progress\n", file = sinkfile)
#   if(interactive()) browseURL(sinkfile)
  callFun <- function(i) {
    dots$chain_id <- i
    sink(sinkfile, append = TRUE)
    on.exit(sink(NULL))
    return(do.call(rstan::stan, args = dots))
  }
  stopifnot(require(parallel))
  if(.Platform$OS.type != "windows") {
    out <- mclapply(1:chains, FUN = callFun, mc.cores = cores, mc.silent = TRUE)
  }
  else { # Windows
    cl <- makePSOCKcluster(cores)
    on.exit(stopCluster(cl))
    clusterExport(cl, envir = environment(), varlist = c("dots", "sinkfile"))
    clusterEvalQ(cl, expr = require(Rcpp))
    out <- parLapply(cl, X = 1:chains, fun = callFun)
  }
  if(!is.na(sound) && suppressWarnings(require(beepr, quietly = TRUE))) beep(sound)
  if(all(sapply(out, is, class2 = "stanfit"))) {
    out <- rstan::sflist2stanfit(out)
  }
  return(out)
}
