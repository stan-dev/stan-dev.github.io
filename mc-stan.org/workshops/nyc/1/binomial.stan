data {
  int<lower = 0> N;
  int<lower = 0, upper = 1> y[N];
}
transformed data {
  int n;
  n <- sum(y);
}
parameters {
  real<lower = 0, upper = 1> theta;
}
model {
  increment_log_prob(n * log(theta)
    + (N - n) * log1m(theta));
}
