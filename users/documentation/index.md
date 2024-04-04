---
layout: page
title: Documentation
excerpt: ""
modified:
image:
  feature: feature/wide_ensemble.png
  credit:
  creditlink:
redirect_from: "/documentation/"
---

# General Documentation 

The official Stan documentation website [https://mc-stan.org/docs/](https://mc-stan.org/docs/) contains 

* the [Stan User's Guide](/docs/stan-users-guide/index.html) which provides
example models, programming techniques for building statistical models in Stan,
and methods for calibration and model checking.


* the [Stan Reference Manual](https://mc-stan.org/docs/reference-manual/)
which specifies the Stan programming language and inference algorithms.


* the [Stan Functions Reference](https://mc-stan.org/docs/functions-reference/)

# CmdStan, CmdStanR, CmdStanPy Documentation 

CmdStan is the command-line interface to Stan.
New versions are released several times a year.
CmdStanR and CmdStanPy provide access to CmdStan from R and Python, respectively.
They use minimal memory beyond what is used by CmdStan itself to run and record an analysis,
therefore they can be used to fit complex models and/or large datasets.
They are highly recommended for users on Windows machines.

*  [CmdStan User's Guide](https://mc-stan.org/docs/cmdstan/)

*  [CmdStanR Vignettes, tutorials, and other package information](/cmdstanr) 

*  [CmdStanPy documentation](/cmdstanpy) 

# RStan Documentation

*  [RStan Vignettes, tutorials, and other package information](/rstan) 

# PyStan Documentation

* [PyStan Documentation on readthedocs.org](https://pystan.readthedocs.org/en/latest/)

# The Stan Forums

Discussion of modeling techniques and computational issues.

* <p><a href="http://discourse.mc-stan.org/">Stan Forums</a>
<span class="note">(Discourse)</span></p>

Discussions prior to June 2017 are archived and public on the now deprecated
<a href="https://groups.google.com/forum/?fromgroups#!forum/stan-users">Stan Users Google Group</a>.

# Case Studies and Notebooks

Case studies provide longer, more-detailed discussion of various
applications, models, and methodologies.  Each case study is written
in knitr or Jupyter notebooks so that the discussion is accompanied
with working code.  Case studies written or validated by the Stan
development team can be found at

* <p><a href="/users/documentation/case-studies.html">
  Case Studies</a></p>

The proceedings of each Stan Conference also take the form of
self-contained notebooks. StanCon notebooks are hosted on GitHub
along with other materials from the conferences:

* <p><a href="https://github.com/stan-dev/stancon_talks">
  StanCon Materials</a> &nbsp; &nbsp; <span class="note">(GitHub, with video links)</span></p>

# Tutorials

The Stan development team and many users have contributed tutorials aimed at introducing users to various aspects of statistical modeling with Stan, both
in written and visual formats.  These tutorials can be found at

* <p><a href="/users/documentation/tutorials.html">Tutorials</a></p>


# Specialized Field Guides

Tutorials, case studies, software packages, and publications related to
specific fields. These pages are maintained by volunteers from the Stan
community. If you would like to contribute one for your field please reach
out on the Stan forums.

* <p>
  <a href="https://education-stan.github.io">Stan for Education Research </a>
  &nbsp; <span class="note">(GitHub)</span>
  </p>

* <p>
  <a href="https://stanecology.github.io/">Stan for Ecology</a>
  &nbsp; <span class="note">(GitHub)</span>
  </p>

* <p>
  <a href="https://epidemiology-stan.github.io/">Stan for Epidemiology</a>
  &nbsp; <span class="note">(GitHub)</span>
  </p>
  
* <p>
  <a href="https://cognitive-science-stan.github.io/">Stan for Cognitive Science</a>
  &nbsp; <span class="note">(GitHub)</span>
  </p>  


# GitHub Stan Developer Wiki

The Stan Wiki is largely focused on development documentation but it also
includes a few pages with helpful information for users.

* <p>
  <a href="https://github.com/stan-dev/stan/wiki">Stan Wiki</a> &nbsp; &nbsp; <span class="note">(GitHub)</span>
  </p>

One particularly recommended page is

* <p>
  <a href="https://github.com/stan-dev/stan/wiki/Prior-Choice-Recommendations">
  Prior Choice Recommendations</a> &nbsp; &nbsp; <span class="note">(GitHub)</span>
  </p>

which specifies the functions built into the Stan programming language.

# Stan Software Development Lifecycle

The software development practices underlying the code managed
by the Stan project is hosted at

* [Stan Software Development Lifecycle](/docs/sdlc.html)


# Further References

Finally, there are many works that elaborate on aspects of Stan from
algorithms to applications.  Some of the more relevant references can be
found at

* <p><a href="/users/documentation/external.html">External References</a></p>
