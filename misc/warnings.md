---
layout: page
title: "Brief Guide to Stan's Warnings"
excerpt: ""
modified:
image:
  feature: feature/wide_ensemble.png
  credit:
  creditlink:
---


Stan emits a lot of messages, some of which are warnings. In this document we go
over why this happens, explain some of the most common warnings, and provide
some tips about how to proceed depending on the particular warnings you're
seeing.

While reading this document it is important to keep in mind that _there is no 
statistical algorithm that is guaranteed to get the right results on all 
models_. Markov chain Monte Carlo is no exception. Although it is often 
advertised as being "unbiased", this is _not_ a guarantee unless the Markov
chains are infinitely long. Whether or not MCMC yields good values in finite
time is a much more challenging problem.

## Preruntime warnings

Preruntime warnings occur before any estimation is performed, although if you
call `stan()` these preruntime warnings may only appear slightly before the
estimation.


### Parser warnings

Parser warnings occur when you call `stanc()` directly, or indirectly by calling
`stan()` with either its `file` or `model_code` argument specified. Parser
warnings take two forms:

1. Deprecation warnings
2. Jacobian warnings


#### Deprecation warnings

Deprecation warnings may look something like

```
DIAGNOSTIC(S) FROM PARSER:
Warning (non-fatal): increment_log_prob(...); is deprecated and will be removed in the future.
Use target += ...; instead.
Warning: Deprecated function 'normal_log'; please replace suffix '_log' with '_lpdf' for density functions or 
'_lpmf' for mass functions
```

These warnings indicate that, although your Stan syntax is valid, some
construction(s) you are using will be removed in a future version of Stan. Thus,
you should update your Stan program to the suggested syntax in order to better
ensure that your Stan program will continue to run in the future.

#### Jacobian warnings

Jacobian warnings may look something like

```
DIAGNOSTIC(S) FROM PARSER:
Warning (non-fatal):
Left-hand side of sampling statement (~) may contain a non-linear transform of a parameter or local variable.
If so, you need to call target += with the log absolute determinant of the Jacobian of the transform.
Left-hand-side of sampling statement:
   sqrt(y) ~ gamma(...)
```

If you fail to heed this warning, the posterior distribution Stan will sample
from is not necessarily the posterior distribution that you have in mind. The
only situation in which you can ignore this warning is when you are sure that
the determinant of the Jacobian matrix of the transformation depends only on
constants.
For example, `target += exponential(y - 1 | 1);` does not require a Jacobian
adjustment because if $z = y - 1$, then $y = z + 1$ and 
$\frac{\partial y}{\partial z} = 1$ is a constant.

### Compiler warnings

There is one category of warnings that are essentially useless: compiler
warnings. Compiler warnings occur when you call `stan_model()` directly or
indirectly by calling `stan()` with its `file` or `model_code` argument
specified. They may look something like

```
> In file included from /usr/local/lib/R/site-library/BH/include/boost/multi_array/base.hpp:28:0,
                 from /usr/local/lib/R/site-library/BH/include/boost/multi_array.hpp:21,
                 from /usr/local/lib/R/site-library/BH/include/boost/numeric/odeint/util/multi_array_adaption.hpp:29,
                 from /usr/local/lib/R/site-library/BH/include/boost/numeric/odeint.hpp:61,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/prim/arr/functor/integrate_ode_rk45.hpp:13,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/prim/arr.hpp:36,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/prim/mat.hpp:235,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/mat.hpp:9,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math.hpp:4,
                 from /usr/local/lib/R/site-library/StanHeaders/include/src/stan/model/model_header.hpp:4,
                 from file3d155eade6dd.cpp:8:
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp: In static member function ‘static void boost::multi_array_concepts::detail::idgen_helper<N>::call(Array&, const IdxGen&, Call_Type)’:
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp:42:43: warning: typedef ‘index_range’ locally defined but not used [-Wunused-local-typedefs]
       typedef typename Array::index_range index_range;
                                           ^
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp:43:37: warning: typedef ‘index’ locally defined but not used [-Wunused-local-typedefs]
       typedef typename Array::index index;
                                     ^
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp: In static member function ‘static void boost::multi_array_concepts::detail::idgen_helper<0ul>::call(Array&, const IdxGen&, Call_Type)’:
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp:53:43: warning: typedef ‘index_range’ locally defined but not used [-Wunused-local-typedefs]
       typedef typename Array::index_range index_range;
                                           ^
/usr/local/lib/R/site-library/BH/include/boost/multi_array/concept_checks.hpp:54:37: warning: typedef ‘index’ locally defined but not used [-Wunused-local-typedefs]
       typedef typename Array::index index;
                                     ^
In file included from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/core/operator_unary_plus.hpp:7:0,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/core.hpp:34,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/mat.hpp:4,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math.hpp:4,
                 from /usr/local/lib/R/site-library/StanHeaders/include/src/stan/model/model_header.hpp:4,
                 from file3d155eade6dd.cpp:8:
/usr/local/lib/R/site-library/StanHeaders/include/stan/math/prim/scal/fun/constants.hpp: At global scope:
/usr/local/lib/R/site-library/StanHeaders/include/stan/math/prim/scal/fun/constants.hpp:65:18: warning: ‘stan::math::NEGATIVE_EPSILON’ defined but not used [-Wunused-variable]
     const double NEGATIVE_EPSILON
                  ^
In file included from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/core.hpp:42:0,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/mat.hpp:4,
                 from /usr/local/lib/R/site-library/StanHeaders/include/stan/math.hpp:4,
                 from /usr/local/lib/R/site-library/StanHeaders/include/src/stan/model/model_header.hpp:4,
                 from file3d155eade6dd.cpp:8:
/usr/local/lib/R/site-library/StanHeaders/include/stan/math/rev/core/set_zero_all_adjoints.hpp:14:17: warning: ‘void stan::math::set_zero_all_adjoints()’ defined but not used [-Wunused-function]
     static void set_zero_all_adjoints() {
```

These simply say there is some part of the Stan library that is being compiled
but not used; it has nothing to do with your model specifically. You can 
safely ignore these compiler warnings but they can also be suppressed by
editing your Makevars file in location `$HOME/.R/Makevars`
and adding (or adding on to) a line that starts with `CXXFLAGS = `. Copy the part(s)
inside the square brackets from the compiler warning message and paste them onto
the line that starts with `CXXFLAGS = ` but add the two-character string `no`
after the starting string `-W`. For example, in the case of the compiler warnings
in the messages above, the line that starts with `CXXFLAGS = ` would become

```
CXXFLAGS = ... -Wno-unused-variable -Wno-unused-function -Wno-unused-local-typedefs
```

where `...` stands for what was already there, such as `-O3`.

## Runtime warnings

Runtime warnings occur during the estimation. Stan throws a lot of runtime
warnings because they may be important. This does not mean that _every_ time you
see a warning you can't trust your estimates, but when you see warnings it does
mean that you shouldn't blindly trust your estimates without first understanding
what the warnings mean and which ones require action on your part.

You might not be used to seeing so many warnings from other software you use,
but that _does not mean_ that Stan has more problems than that other software.
The Stan Development Team places a high priority on notifying users about any
issue that could potentially be important and Stan will always tell you about
problems it encounters instead of hiding them from you. Warning messages do not
indicate that something is wrong with Stan but rather that Stan is doing its job
and warning you when it finds problems (or possible problems) with what it was
told to do. Furthermore, a huge advantage of the algorithms used by Stan is that
they permit certain unique diagnostics (e.g. the divergences discussed below)
that are unavailable when using other algorithms. This leads to more warnings
from Stan, but we cannot emphasize enough that this is a _feature_ rather than a
drawback.


### Divergent transitions after warmup

**Example:**

```
1: There were 15 divergent transitions after warmup. Increasing adapt_delta above 0.8 may help. 
2: Examine the pairs() plot to diagnose sampling problems
```

Stan uses Hamiltonian Monte Carlo (HMC) to explore the target distribution ---
the posterior defined by a Stan program + data --- by simulating the evolution
of a [Hamiltonian system](https://en.wikipedia.org/wiki/Hamiltonian_system). In
order to approximate the exact solution of the Hamiltonian dynamics we need to
choose a step size governing how far we move each time we evolve the system
forward. That is, the _step size controls the resolution of the sampler_.

Unfortunately, for particularly hard problems there are features of the target 
distribution that are too small for this resolution. Consequently the sampler 
misses those features and returns biased estimates. Fortunately, this mismatch 
of scales manifests as _divergences_ which provide a practical diagnostic.

For some intuition, imagine walking down a steep mountain. If you take too big
of a step you will fall, but if you can take very tiny steps you might be able
to make your way down the mountain, albeit very slowly. Similarly, we can tell
Stan to take smaller steps around the posterior distribution, which (in some but
not all cases) can help avoid these divergences.

As the warning message says, you should call `pairs()` on the resulting object.
Red points indicate divergent transitions. In our experience, divergent
transitions that occur __above__ the diagonal of the `pairs()` plot --- meaning
that the amount of numerical error was above the median over the iterations ---
can often be eliminated simply by increasing the value of the `adapt_delta`
parameter (see below for example code). This is the target average proposal
acceptance probability during Stan's adaptation period, and increasing it will
force Stan to take smaller steps. The downside is that sampling will tend to be
slower because a smaller step size means that more steps are required. **Since
the validity of the estimates is not guaranteed if there are post-warmup
divergences, the slower sampling is a minor cost.**

If you have many unknowns in your Stan program, then the `pairs()` plot may be
illegible. There is a `pars` argument to the `pairs()` function that allows you
to specify a subset of parameters. Also, there is an `include` argument that can
be set to `FALSE` that will result in the complement of the `pars` argument
being included in the `pairs()` plot. You should definitely include variance (or
standard deviation, etc.) parameters, since they illustrate the funnel
phenomenon most often. In addition, you should include at least some lower-level
parameters in hierarchical models.

Conversely, divergent transitions that occur __below__ the diagonal of the
`pairs()` plot --- meaning that the amount of numerical error was below the
median over the iterations --- often cannot be eliminated simply by increasing
the value of the `adapt_delta` parameter, although it does not hurt to try and
it might actually work if the number of divergent transitions is small. If the
divergent transitions cannot be eliminated by increasing the `adapt_delta`
parameter, we have to find a different way to write the model that is logically
equivalent but simplifies the geometry of the posterior distribution. This
problem occurs frequently with hierarchical models and one of the simplest
examples is Neal's Funnel, which is discussed in the *Optimizing Stan Code*
chapter of the [Stan manual](http://mc-stan.org/documentation/).


##### Recommendations

* Increase the target acceptance rate `adapt_delta`. In RStan, `adapt_delta` is
one of the parameters that you can include in the optional `control` list passed
to the `stan` or `sampling` functions. For example, to set `adapt_delta` to 0.99
(the default is 0.8) you would do this:

```
stan(..., control = list(adapt_delta = 0.99))
```

* Reparameterize your model. See the Stan case study 
[_Diagnosing Biased Inference with Divergences_](http://mc-stan.org/users/documentation/case-studies/divergences_and_bias.html)
and the _Reparameterization_ section of the
_Optimizing Stan Code_ chapter in the [Stan
manual](http://mc-stan.org/users/documentation/), in particular the discussion
of hierarhical models and non-centered parameterizations.

<br>

### Exceptions thrown when Hamiltonian proposal is rejected

**Example:**

```
Exception thrown at line 24: normal_log: Scale parameter is 0, but must be positive! 
```

This warning indicates that the standard deviation (scale parameter) of the 
normal distribution (at line 24 in the Stan program) is 0, but it must be
positive for Stan to compute the value of density function. It is not uncommon
to get this type of warning if your model has bounded parameters. A message like
this does not necessarily indicate that something is wrong with your model, as
it's possible that even in a correctly specified and well-behaved model the
value of the scale parameter can be 0 (or numerically indistinguishable from 0)
occasionally during sampling.

However, this warning should _not_ be ignored if it occurs many times. 
Informally, if the number of times this happens is large then something in the
model or data (or the combination of the model and data) is consistently forcing
the constrained parameter to its boundary and this should be investigated.

##### Recommendations 

* Verify that the support of the parameters matches the distributions used in
the model. In the example above this means making sure that `sigma` is declared 
with a `<lower=0>` constraint.

* If all parameters are declared with the appropriate constraints, you can 
ignore this warning if it's very sporadic.

* Simulate data and fit the same model to check whether the same problem occurs
using different data.

* Use priors that place less weight on values near the boundary.

* Use numerically stable expressions. This includes always performing 
calculations on the log-scale when possible and making use of Stan's special 
composed functions. For example, `log_sum_exp(x)` is more robust numerically
than `log(sum(exp(x))`. Other examples like this include `log1m(x)` instead of
`log(1-x)`, `log1p_exp(x)` instead of `log(1 + exp(x))`, and many others. See
the _Composed Functions_ subsection of the _Real-Valued Basic Functions_ chapter
of the Stan manual for a complete listing.

<br>

### Maximum treedepth exceeded

Warnings about hitting the maximum treedepth are not as serious as warnings 
about divergent transitions. While divergent transitions are a _validity_
concern, hitting the maximum treedepth is an _efficiency_ concern. Configuring
the No-U-Turn-Sampler (the variant of HMC used by Stan) involves putting a cap
on the depth of the trees that it evaluates during each iteration (for details
on this see the *Hamiltonian Monte Carlo Sampling* chapter in the [Stan 
manual](http://mc-stan.org/documentation/)). This is controlled through a 
maximum depth parameter `max_treedepth`. When the maximum allowed tree depth is 
reached it indicates that NUTS is terminating prematurely to avoid excessively 
long execution time.

Transitions that hit the maximum treedepth are plotted in yellow in the 
`pairs()` plot.

##### Recommendations 

* Increase the maximum allowed treedepth. In RStan, `max_treedepth` is one
of the parameters that you can include in the optional `control` list passed
to the `stan` or `sampling` functions. For example, to set `max_treedepth`
to 15 (the default is 10) you would do this:

```
stan(..., control = list(max_treedepth = 15))
```

<br>

### BFMI low

You may see a warning that says some number of chains had an estimated Bayesian
Fraction of Missing Information (BFMI) that was too low. This implies that the
adaptation phase of the Markov Chains did not turn out well and those chains
likely did not explore the posterior distribution efficiently. For more details
on this diagnostic, see https://arxiv.org/abs/1604.00695.

##### Recommendations 

* Look at the `pairs` plot to see which primitive parameters are correlated with
  the `energy__` margin. There should be a negative relationship between `lp__`
  and `energy__` in the `pairs` plot, which is not a concern because `lp__` is 
  the logarithm of the posterior kernel rather than a primitive parameter. 

* Reparameterize your model. The primitive parameters that are correlated with
  the `energy__` margin in the `pairs` plot are a good place to start thinking
  about reparameterizations.

* You might try setting a higher value for the `iter` and / or `warmup` arguments.
  By default `warmup` is half of `iter` and `iter` is $2000$ by default. 

### R-hat

R-hat convergence diagnostic compares the between- and within-chain
estimates for model parameters and other univariate quantities of
interest. If chains have not mixed well (ie, the between- and
within-chain estimates don't agree), R-hat is larger than 1. We
recommend running at least four chains by default and only using the
sample if R-hat is less than 1.01. Stan reports R-hat which is the
maximum of rank normalized split-R-hat and rank normalized
folded-split-R-hat, which works for thick tailed distributions and is
sensitive also to differences in scale. For more details on this
diagnostic, see https://arxiv.org/abs/1903.08008.

##### Recommendations

* Look at Bulk- and Tail-ESS for further information.

* Look at the `rank` plot to see how the chains differ from each other.

* Look at the local and quantile efficiency plots.

* You might try setting a higher value for the `iter` argument.
  By default `iter` is $2000$. 

### Bulk ESS

Roughly speaking, the effective sample size (ESS) of a quantity of
interest captures how many independent draws contain the same amount
of information as the dependent sample obtained by the MCMC
algorithm. Clearly, the higher the ESS the better.  Stan uses R-hat
adjustment to use the between-chain information in computing the
ESS. For example, in case of multimodal distributions with
well-separated modes, this leads to an ESS estimate that is close to
the number of distinct modes that are found.

Bulk-ESS refers to the effective sample size based on the rank
normalized draws. This does not directly compute the ESS relevant for
computing the mean of the parameter, but instead computes a quantity
that is well defined even if the chains do not have finite mean or
variance. Overall bulk-ESS estimates the sampling efficiency for the
location of the distribution (e.g. mean and median).

Often quite smaller ESS would be sufficient for the desired estimation
accuracy, but the estimation of ESS and convergence diagnostics
themselves require higher ESS.  We recommend requiring that the
bulk-ESS is greater than 100 times the number of chains. For example,
when running four chains, this corresponds to having a rank-normalized
effective sample size of at least 400.

##### Recommendations

* You might try setting a higher value for the `iter` argument.
  By default `iter` is $2000$.

* Look at the `rank` plot to see how the chains differ from each other.

* Look at the local and quantile efficiency plots.

* Look at change in bulk-ESS when the number of iterations
  increase. If R-hat is less than 1.01 and bulk-ESS grows linearly
  with the number of iterations and eventually exceeds the recommended
  limit, the mixing is sufficient but MCMC has high autocorrelation
  requiring a large number of iterations

### Tail ESS

Tail-ESS computes the minimum of the effective sample sizes (ESS) of
the 5% and 95% quantiles. Tail-ESS can help diagnosing problems due
to different scales of the chains and slow mixing in the tails. See
also general information about ESS above in description of bulk-ESS.

##### Recommendations

* You might try setting a higher value for the `iter` argument.
  By default `iter` is $2000$.

* Look at the `rank` plot to see how the chains differ from each other.

* Look at the local and quantile efficiency plots.

* Look at change in tail-ESS when the number of iterations
  increase. If R-hat is less than 1.01 and tail-ESS grows linearly
  with the number of iterations and eventually exceeds the recommended
  limit, the mixing is sufficient but MCMC has high autocorrelation
  requiring a large number of iterations

## Getting help

Te best place to get help from Stan developers and users if you have
difficulties fitting a model is to visit the [Stan
Forums](http://discourse.mc-stan.org/). 

In order to both reduce the amount of help you need and allow us to give the
best help when you do need it, it is essential that you follow these
recommendations:

* Always put Stan programs in a stand-alone file with a `.stan` extension. Even 
though some Stan interfaces allows specifying the model as a string, the line
numbers in warning and error messages are only meaningul if you use a separate
file.

* Maintain reproducibility by saving the model and initial values 
in files and the RStan (other other Stan interface) commands in scripts. 

* Use version control (e.g. git) on your files and scripts so that you have a 
history of the changes you've made.

* Start simple! Build your model in stages, and check for good fits at each 
stage, only adding complexity if there are no red flags. If you start by writing
a very complicated model it will be much more difficult to figure out where
things are going wrong.

* Keep an eye on the diagnostics, in particular divergences and Rhat values. For
RStan users, you will be warned about divergences and you can view Rhats using
the `print` or `summary` methods for stanfit objects. All important diagnostics
can also be found in our [ShinyStan](http://mc-stan.org/interfaces/shinystan)
GUI.
