---
layout: page
title: StanCon 2023
excerpt: ""
modified:
image:
  feature: feature/wide_ensemble.png
  credit:
  creditlink:
---
<center style="padding: 0.75em 0 0 0">
<img width="700" src="./img/banner.png" /><br>
</center>

<a href="https://buytickets.at/standevelopmentteam/835500" title="Buy tickets for StanCon 2023">Buy tickets for StanCon 2023</a>

------
**Sponsors**

We thank our sponsors who both support conference costs, scholarships, and Stan as a whole. If you’re interested in sponsoring StanCon, please email [stancon2023@mc-stan.org](mailto:stancon2023@mc-stan.org).

<center style="padding: 0.75em 0 0 0">
<a href="https://wustl.edu/"><img width="200" src="img/washu_logo.png" /></a>
<span style="display:inline-block; width: 0.75em;"></span>
<a href="https://www.metrumrg.com/"><img width="200" src="img/mrg_logo.png" /></a>
<span style="display:inline-block; width: 0.75em;"></span>
<a href="https://numfocus.org/project/stan/"><img width="200" src="img/NumFocus_LRG.png" /></a>
</center>

<!-- <span style="display:inline-block; width: 0.75em;"></span> -->
<!-- <hr> -->

<!-- <a href="https://www.astrazeneca.com/"><img width="200" src="logos/astrazeneca-logo.jpg" /></a> -->
<!-- <hr> -->

<!-- <a href="https://www.bayer.com/"><img width="200" src="logos/bayer.png" /></a> -->
<!-- <hr> -->

<!-- <a href="https://www.jumpingrivers.com/"><img width="200" src="logos/JumpingRivers.png" /></a> -->
<!-- <hr> -->

<!-- <a href="https://quantbet.com/"><img width="300" src="logos/quantBet.png" /></a> -->
<!-- <hr> -->

<!-- </center> -->
------
- [**Invited speakers**](#invited-speakers)
- [**Tutorials**](#tutorials)
- [**Talks**](#talks)
- [**Call for proposals**](#call-for-proposals)
- [**Schedules**](#schedules)
- [**Registration**](#registration)
- [**Scholarships**](#scholarships)
- [**Organizers**](#organizers)

------

Stan (http://mc-stan.org) is a probabilistic programming and statistical modeling language used by tens of thousands of scientists, engineers, and other researchers for statistical modeling, data analysis, and prediction. It is being applied academically and commercially across fields as diverse as ecology, pharmacometrics, physics, political science, finance and econometrics, professional sports, real estate, publishing, recommender systems, and educational testing.

If you have questions regarding registration, payments, travel, please email
[stancon2023@mc-stan.org](mailto:stancon2023@mc-stan.org).

StanCon participants are expected to abide by the [Stan code of conduct](https://discourse.mc-stan.org/t/announcing-our-new-stan-code-of-conduct/23764).

------

# [Invited speakers](#speakers)
**Bob Carpenter** (Senior Research Scientist, Flatiron institute)\
**Talk Title: The efficient frontier: Bayes, neural nets, and the future of Stan**\
**Abstract:** Stan has relied primarily on two types of inference, (Euclidan) Hamiltonian Monte Carlo (HMC), with the adaptive no-U-turn sampler (NUTS), and variational approximation using autodiff variational inference (ADVI).  I will provide a quick overview of the evolution of these algorithms before moving on to future prospects for Bayesian inference for differentiable target densities.

1.  Pathfinder, quasi-Newton variational inference.  This is a massively parallelizable form of variational inference that is much faster, more accurate, and more robust than ADVI.  The Stan implementation is feature complete and being code reviewed for the next release (v2.33).

2.  Partial momentum refresh, Metropolis-adjusted Langevin (MALA) with non-uniform acceptance, massively parallel adaptation, and delayed rejection HMC (DR).  This provides an easy-to-adapt, massively parallelizable HMC that can sample multiscale densities like the funnel.  This required revised convergence diagnostics.

3.  Normalizing flows for variational inference.  Despite an absurd degree of overparameterization, deep neural networks with real non-volume preserving (RaelNVP) flows are massively parallelizable and super fast with state-of-the-art hardware on in-kernel GPU-based systems like JAX.  I'll provide some results both in high dimensions and for distributions with funnel- and banana-like properties.  Early results show that it outperforms a highly-tuned version of ADVI.


**John Kruschke** (Provost Professor Emeritus, Indiana University, Bloomington)\
**Talk Title: We all can benefit from Bayesian analysis reporting guidelines if we use them** \
**Abstract:** When reports of statistical analyses are opaque, then readers suffer, authors suffer, and science suffers. To alleviate suffering, I present the Bayesian analysis reporting guidelines – the BARG – published in Nature Human Behaviour. The BARG systematically explain essential ingredients for a report that is thorough, understandable, and reproducible. Software developers need to know the BARG so their software produces and displays all the relevant information. Educators can use the BARG to teach students the reasons behind statistical reports. Reviewers and editors, along with authors and analysts, can rely on the BARG to help research reports be clear and reproducible. In this talk I describe the BARG with a detailed example. The BARG can be beneficial for all users of Bayesian analysis and for the science they produce – if they use the BARG. Will you?


**Mariel Finucane** ( Principal Statistician, Mathematica Policy Research)\
**Talk Title: Statistical Significance Makes our Mission: Impossible** \
**Abastract:** It’s an old trick among statisticians: when we can’t answer the question that our collaborators are substantively interested in, we answer a question that sounds like that question. We hope they won’t notice the bait and switch. That, in a nutshell, is the story of statistical significance in the field of social policy evaluation. People want some assurance that the policy being studied moved the needle for the individuals or communities it serves. Statistical significance and p-values sound like they can provide that assurance. They can’t, and when we pretend they can (which we still do horrifyingly often!), we can be making a large-magnitude – not just semantic – mistake. In this talk, we provide examples of how statistical significance is an obstacle to achieving our mission, and we describe how Bayesian methods using evidence-based priors can give us what we thought we were getting with statistical significance, and more.


**Siddhartha Chib** (Harry C. Hartkopf Professor of Econometrics and Statistics, Washington University in St. Louis)\
**Talk Title: TBA**

# [Tutorials](#tutorials)

_Listed below are confirmed tutorials. Proposals for tutorials are reviewed and accepted on a rolling basis throughout April 30th._

**Fundamentals of Stan**\
**Instructor:** Charles Margossian (Flatiron Institute). _This course serves as an introduction to Stan and may be used as a stepping stone before taking more advanced tutorials._ [Course description](img/outline_fundamentals_of_stan.pdf).

**Introduction to Bayesian hierarchical modeling using Stan and brms**\
**Instructor:** Mitzi Morris (Columbia University) and Mike Lawrence (Axem Neurotechnology)

**Ordinary differential equation (ODE) models in Stan**\
**Instructor:** Daniel Lee.

**Cognitive diagnostic models in R and Stan**\
**Instructor:** Jake Thompson (University of Kansas). [Course description](img/dcm-tutorial-description.pdf).


**Advances of model assessment, selection, and inference after model selection**\ 
**Instructor:** Andrew Johnson (Aalto University)

### ....

# [Talks](#talks)

_Listed below are confirmed talks. Proposals for talks are reviewed and accepted on a rolling basis throughout April 30th._

**Two Challenges for Bayesian Model Expansion**\
Collin Cademartori (Columbia University)\
**Abstract**: The process of iterative model expansion often involves moving from some simple initial model to more complex, higher-dimensional models in order to obtain better fit to our observed data or to remove unrealistic assumptions. In this talk, I will argue that this model expansion process can create distinct challenges which motivate the use of more fine-grained posterior summaries in inference and model evaluation. In particular, a pair of theoretical results demonstrate how expansion can make typical model summaries and checks less informative as the model complexity grows. I will present some intuition for these results and discuss how the corresponding challenges can be mitigated by avoiding premature posterior marginalization. A brief example will tie these ideas together with a case in which certain conditional p-values contain substantially more information than the usual marginal counterpart.

**Bayesian PBPK Modeling using R/Stan/Torsten and Julia/SciML/Turing.jl**\
William R Gillespie (Metrum Research Group)\
**Abstract**: Physiologically-based pharmacokinetic (PBPK) models are mechanistic models that are built based on an investigator's prior knowledge of the in vivo system of interest. Bayesian inference incorporates an investigator's prior knowledge of parameters while using the data to update this knowledge. As such, Bayesian tools are well-suited to infer PBPK model parameters using the strong prior knowledge available while quantifying the uncertainty on these parameters. This brief tutorial demonstrates a full population Bayesian PBPK analysis framework using R/Stan/Torsten and Julia/SciML/Turing.jl.

**bibat: a batteries-included Bayesian analysis template**\
Teddy Groves (Technical University of Denmark)\
**Abstract**: Choosing how to structure and write code that implements a Bayesian workflow can be very tricky, especially when there are multiple models, datasets and data transformations to keep track of. Bibat aims to make creating a high-quality, scaleable Python-and-Stan based Bayesian statistical analysis project less of a hassle by providing easy access to automation, a file-based and declarative workflow and a project structure with well-designed abstractions and modules. Bibat is "batteries-included" in the sense that it works out of the box: just run the command `bibat` then fill in a quick form and bibat will create a project implementing a complete example analysis that you can run with the command `make analysis`. My talk will explain bibat's main features and hopefully prompt you to give me feedback about its design. You can find bibat's source code on github here https://github.com/teddygroves/bibat/, or read the documentation here https://bibat.readthedocs.io/en/latest/

**Parameterization of complex models ... easy as ABC (Approximate Bayesian Computation)**\
Paul Johnson (Vanderbilt University)\
**Abstract**: Approximate Bayesian Computation (ABC) is a flexible approach that allows statisticians to perform Bayesian inference in cases where a likelihood function is either unknown or too complex to be represented in closed form (e.g., agent-based simulations). However, ABC is not as commonly featured in the literature compared to traditional MCMC sampling or surrogate modeling techniques. Here, we provide an overview of the ABC framework and demonstrate its utility with an applied case study analyzing economic risks of supply-chain disruptions due to flooding along the Upper Mississippi River. We show that with even one observational data point, the ABC framework can help researchers quantify uncertainties of parameters in complex models. 

**Using Stan for Bayesian Discrete Choice Models: A Healthcare Case Study**\
Srinivas Kowta\
**Abstract**: This paper compares a traditional logit model vs. a Bayesian model using Stan in the R eco-system as applied to a discrete choice dataset in the healthcare arena. Additionally comparison is conducted on a sub-segment where two of the choice attributes may present multi-collinearity challenges in determining the best drivers of the brand chosen.

**Bayesian pipelines with stantargets**\
Will Landau (Eli Lilly)\
**Abstract**: The stantargets R package is an extension of CmdStanR, a lightweight interface to Stan, and targets, a general-purpose pipeline tool for reproducible research and high-performance computing. In stantargets, a complicated Stan workflow becomes a concise targets pipeline, and targets orchestrates the pipeline to efficiently bring the results up to date with the underlying code and data. By simplifying pipeline creation, stantargets reduces the practical burden of developing and maintaining reproducible analysis workflows for Bayesian statistics.

**Access Stan models from your favorite language with BridgeStan**\
Edward A. Roualdes (California State University in Chico) \
**Abstract**: BridgeStan provides efficient in-memory access to the methods of Stan models through Python, Julia, and R. This allows algorithm development in these languages with the efficiency and expressiveness of Stan models. Importantly, methods for log-density, gradient, and Hessian evaluations as well as constraining and unconstraining transforms are exposed from an underlying Stan model, with zero to minimal additional memory allocations.  Furthermore, these features are exposed through a language-agnostic C API, allowing foreign function interfaces in their languages with minimal additional development.

**Journey to efficient sampling in multivariate normal latent variable models**\
Edgar Merkle (University of Missouri)\
**Abstract**: Latent variable models arising from psychometrics overlap with many families of traditional statistical models, including mixed models, generalized linear models, time series models, and path models. There are many ways to estimate these models in Stan, some of which are much slower and inefficient than others. In the talk, I will describe Stan strategies for coding the models, so that the sampling is as fast and efficient as possible. These strategies are informed by my 8 years of experience of developing blavaan, which is an R package for Bayesian latent variable modeling that relies on Stan under the hood. The talk will focus on multivariate normal models, with extensions to multivariate probit models and multilevel, multivariate models. I will conclude with discussion of some areas where I think further improvement could be made.

**Delayed rejection Hamiltonian Monte Carlo for sampling multiscale distributions**\
Chirag Modi (Flatiron Institute)\
**Abstract**: In this talk, I will discuss a new algorithm that combines delayed rejection (DR) techniques with  Hamiltonian Monte Carlo (HMC) for efficient sampling of pathological distributions such as Neal's funnel where the target distribution has a wide range of length scales and the small step sizes needed for stability in high-curvature regions can be inefficient elsewhere. I will focus on the DR variant where if an initial HMC trajectory is rejected, we make one or more subsequent proposals each using a step size geometrically smaller than the last. I will also extend the standard delayed rejection framework to allow the probability of a retry to depend on the probability of accepting the previous proposal. DRHMC enables up to five-fold performance gains over optimally-tuned HMC for multi-scale distributions and provides increased robustness to step size misspecification for simpler distributions. 

**What do news readers want?**\
Cameron Pfiffer (Stanford University)\
**Abstract**: We estimate a hierarchical Bayesian model of news readers' preferences for different types of news content. Using a novel dataset covering the complete history of individual-level web traffic and digital subscriptions from a major metropolitan newspaper in the United States from 2020 to 2021, we investigate consumers' willingness to pay for different kinds of content, such as investigative journalism, local news, sports, and political news. Our statistical identification relies on the quasi-random arrival of paywall events which force consumers to subscribe if they wish to continue reading. Using this variation, we estimate a model of consumer demand and construct the optimal content portfolio for the paper under different counterfactual revenue models: a fully subscription-based model and a fully ad-supported model. Preliminary results suggest that news consumers are willing to pay for investigative and local content, and that commonly used measures of demand based only on time-use substantially underestimate the value of investigative news.

**Fully Bayesian Economically Optimal Design for Spatially Varying Coefficient Linear Stochastic Plateau Model**\
Davood Poursina (Oklahoma State University)\
**Abstract**: Experimentation to guide optimal fertilizer selection is moving toward on-farm experimentation due to the uncertainty of small on-station experiments. However, there is no agreement on the optimal way to conduct on-farm experimentation, which motivated this paper. Optimal on-farm experimentation is addressed using fully Bayesian decision theory. Monte Carlo integration was used, assuming a linear stochastic plateau model with spatially correlated plateau parameters. The spatially varying coefficient model can be used to guide the application of site-specific nitrogen. The actual economic optimal nitrogen values vary from 130 to 180 for different plots based on the data-generating process used for simulation. Of the designs considered, the results show that experimenting on 15 plots of a field with treatment levels of 35, 130, 165, and 230 with 2, 3, 5, and 5 replications maximized the farmers' profit over several years. The third year was the best time to quit experimenting.

**MCMC-Monitor: Browser-based Monitoring of Stan MCMC Samplers**\
Jeff Soules (Flatiron Institute)\
**Abstract**: We have developed MCMC-Monitor, a browser-based visualization tool for live-monitoring of MCMC samplers. It displays interactive plots of standard and user-specified variables for MCMC runs, both during sampling and after run completion. Plots include timeseries line charts showing the evolution of variables on a per-chain or cumulative basis; histograms; 2- and 3-D scatterplots of user-selected variable combinations; and autocorrelation function plots, as well as tabular data, including effective sample size estimates. Variables include user-requested subsets of model parameters, as well as Stan-computed descriptive variables like per-draw log probability, acceptance rate, stepsize, and more. By exposing these data in graphical format in real-time, MCMC-Monitor provides insight into the convergence of live runs, allowing users to make adjustments before expending time and compute resources. One distinctive feature of MCMC-Monitor is that it allows monitoring runs either on the local machine or on a remote computer.

**Bayesian phase retrieval for image reconstruction using fast Fourier transforms in Stan**\
Brian Ward (Flatiron Institute)\
**Abstract**: In this talk, I will show how Stan's new complex number capabilities and 2D fast Fourier transform can be applied to biomedical image reconstruction problems from the field of holographic coherent diffraction imaging. These features in Stan allow us to directly represent a generative forward model for this problem called the HoloML model. This model uses photon counts observed during X-ray diffraction imaging as the rate for a Poisson likelihood to recover the missing phase information required to construct images of the desired specimen. I will present step-by-step how to simulate from the forward model, discuss which Stan developments made this model possible and efficient, and conclude with simulated results from both optimization and Bayesian sampling to solve the inverse problem.

**Implementing an Almost Ideal Demand System of mobility expenditure in Stan**\
Ariane Kehlbacher (German Aerospace Center DLR)\
**Abstract**: The Almost Ideal Demand System (AIDS) by Deaton is widely used in economics to estimate systems of demand functions. The model predicts (across households and/or over time) how consumers change their demand in response to price and/or income changes. This is why the AIDS is often used to investigate the welfare implications of, for example, taxes or subsidies, or price changes. Reasons for the AIDS's popularity in econometrics is inter alia its flexibility as it gives an arbitrary first-order approximation to any demand system. In the majority of applications, the AIDS is estimated using frequentist methods. A few applications use Bayesian methods, but as of yet these studies employ Gibbs Sampling in their estimation. Taking advantage of the efficiency gains that arise from using Hamiltonian Monte Carlo to estimate the model, this work estimates an AIDS using Stan. Data on expenditures for three transport modes, car, train and bus/taxi, by different groups of households in Germany are used. The objective is to investigate substitute and complementary relationships between transport modes so as to better understand the impact of recent increases in energy costs on transport demand. The poster explains model specification including parameter restrictions, estimation in Stan, as well as the computation of the price and expenditure elasticities. Interesting issues arise in relation to 1) the prior specification in the light of the parameter restrictions required by economic theory, which leave only a subset of parameters free to be estimated, and 2) the imposition of curvature (i.e. a downward sloping demand function) which requires the computation of Eigenvalues of the matrix of second order derivatives and some kind of rejection step.

**Dimensionality Reduction via Probabilistic Inference**\
Aditya Ravuri (University of Cambridge)\
**Abstract**: Dimensionality reduction (DR) algorithms compress high-dimensional data into a lower dimensional representation while preserving important features of the data. DR is a critical step in many analysis pipelines as it enables visualisation, noise reduction and efficient downstream processing of the data. In this work, we introduce the ProbDR variational framework, which interprets a wide range of classical DR algorithms as probabilistic inference algorithms in this framework. The framework can be used to provide probabilistic interpretations of PCA, CMDS, LLE, LE, MVU, diffusion maps, kPCA, Isomap, (t-)SNE, and UMAP. By treating DR as probabilistic inference, we show how Stan can be used to perform posterior inference for the low-dimensional latent variables and other model parameters, enabling reasoning about unseen data. We hope that our framework facilitates communication, reasoning about uncertainties, model composition, and extensions, particularly when domain knowledge is present. Preprint: https://arxiv.org/abs/2304.07658


**A Bayesian Nonparametric approach for modeling temporal local clusters**\
Chetkar Jha (Washington University at St. Louis)\
**Abstract**: We propose an unsupervised Bayesian nonparametric approach for dynamic modeling of local clusters over time. Clustering and in particular local clusters may change over time as cluster membership evolves. The evolution of cluster membership may undergo because of a known or unknown physical, chemical, or biological process and understanding this evolution may help us hypothesize about the underlying process. Our proposed approach induces a temporal evolution of local clusters by proposing an autoregressive Dirichlet process prior on global column level clusters, where the temporal weights are learned. Posterior inference is performed through a Monte Carlo Markov Chain that is efficient for large datasets. Our proposed approach facilitates flexible modeling of dynamic clusters over time. We demonstrate the performance of our method using simulation and real dataset analysis.

### ...

# [Call for proposals](#call)

We invite participants to submit proposals for contributed talks, thematic sessions, and tutorials.

We are interested in a broad range of topics relevant to the Stan community, including:

* Applications of Bayesian statistics using Stan in all domains
* Software development to support or complement the Stan ecosystem
* Methods for Bayesian modeling, relevant to a broad range of users
* Theoretical insights on common Bayesian methods and models
* Visualization techniques
* Tools for teaching Bayesian modeling

Keep in mind that StanCon brings together a diverse audience. Material which focuses on an application should introduce the problem to non-field experts; theoretical insights should be linked to problems modelers are working on, etc.

_We review proposals on a rolling basis and can often make decisions before the submission deadline. Accepted talks will progressively get added to the schedule._

## [Call for contributed talks](#call-talks)

Talks are 15 minutes long, with an additional 5 minutes dedicated to questions.

To submit a proposal for a contributed talk, submit a [form](https://forms.gle/4fbNbd4p32MFPR219) by **April 30th**.

## [Call for thematic sessions](#call-sessions)

Thematic sessions are an opportunity to dive deeper into a topic and comprise three talks (15 + 5 minutes each), with an additional 10 minutes which can be used for a panel discussion. Thematic sessions may be run in parallel.

To submit a proposal for a contributed talk, submit a [form](https://forms.gle/HcfZPS3jMb8HGqsY8) by **April 30th**.

## [Call for tutorials](#call-tutorials)

Tutorials are an opportunity to do an in-depth exploration of a particular topic and may focus on a class of models, certain features in the Stan language, or a new package in the broader Stan ecosystem. Tutorials typically include hands-on exercises, which participants can perform on their own computers.

Tutorials may comprise a single session of 2 or 3 hours (half-a-day) or two sessions of 2 or 3 hours each (full day).

To submit a proposal for a tutorial, submit a [form](https://forms.gle/tgGmaSrQM7yTmHMA7) by **April 30th**.

# [Schedules](#schedules)
<ul>
<li>Tutorials: June 20-21, 2023</li>

<li>Conference: June 22-23, 2023</li>

<li> Conference Dinner: June 22, 2023</li>


</ul>
Details coming soon.

# [Registration](#registration)

<a href="https://buytickets.at/standevelopmentteam/835500" title="Buy tickets for StanCon 2023">Buy tickets for StanCon 2023</a>

Early bird window extended till April 30, 2023! Registration fees cover lunch, coffee & refreshment breaks, icebreaker reception (June 21 PM), and conference dinner.

### Conference only

$199(student) | $299(academic) | $449(industry)

### Tutorial & workshop + Conference

$299(student) | $449(academic) | $599(industry)

### Conference only (after April 30)

$199(student) | $299(academic) | $539(industry)

### Tutorial & workshop + Conference (after April 30)

$299(student) | $449(academic) | $719(industry)

# [Scholarships](#scholarships)

The purpose of the StanCon scholarship is to make StanCon a more accessible and inclusive event.

Participants who require financial assistance to attend the conference may apply for a scholarship by filling out **this [form](https://forms.gle/gro2kUpWrb3LGKpM7)**. **The StanCon scholarship covers registration for the tutorial and the main conference, as well as local lodging**. Scholarships are awarded on a need-base, and prioritize early career scientists, including students and post-docs, and members of underrepresented groups in STEM.

Applications are reviewed on a rolling basis, and scholarships are awarded based on available funds.

# [Organizers](#organizers)
- Charles Margossian (Flatiron Institute)
- Debashis Mondal (Washington University in St. Louis)
- Eric Ward (NOAA & University of Washington)
- Vianey Leos Barajas (University of Toronto) 
- Yi Zhang (Sage Therapeutics, Inc)
