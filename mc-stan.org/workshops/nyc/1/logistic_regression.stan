data {
  int<lower=0> N;
  int<lower=1> K;
  matrix[N,K] x;
  int<lower=0, upper=1> y[N];
}
parameters {
  real a;
  vector[K] beta;
}
model {
  a ~ cauchy(0, 2.5);
  beta ~ cauchy(0, 2.5);
  y ~ bernoulli_logit(a + x * beta);
}
