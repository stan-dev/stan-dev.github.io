---
layout: page
title: Stan
excerpt: ""
modified:
search_omit: true
image:
  feature: feature/wide_ensemble.png
  credit:
  creditlink:
---


Stan is a state-of-the-art platform for statistical modeling
and high-performance statistical computation.  Many thousands of users rely
on Stan for statistical modeling, data analysis, and prediction in
the social, biological, and physical sciences, engineering, and
business.

Stan interfaces with the most popular data analysis languages
(R, Python, shell, MATLAB, Julia, Stata) and runs
on all major platforms (Linux, Mac,
Windows). To get started using Stan begin with the 
[Installation](/users/interfaces) and [Documentation](/users/documentation/) pages.


Users specify log density functions in the Stan probabilistic
programming language and then fit the models to data using:

* full Bayesian statistical inference with MCMC sampling:
[NUTS-HMC](https://mc-stan.org/docs/reference-manual/mcmc.html)

* approximate Bayesian inference with variational inference:
[Pathfinder](https://mc-stan.org/docs/reference-manual/pathfinder.html) and
[ADVI](https://mc-stan.org/docs/reference-manual/variational.html)

* penalized maximum likelihood estimation with [optimization](https://mc-stan.org/docs/reference-manual/optimization.html)

Stan's math library provides differentiable probability functions
&amp; linear algebra (C++ autodiff).
Additional R packages provide expression-based linear modeling,
posterior visualization, and leave-one-out cross-validation.

<a rel="me" href="https://bayes.club/@mcmc_stan">Follow us on Mastodon!</a>
