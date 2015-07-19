data {
  int<lower = 0> N;
  vector[N] y;
  vector[N] x;
}
parameters {
  real a;
  real b;
  real<lower = 0> err_sd;
}
model {
  y ~ normal(a + b * x, err_sd);
}
