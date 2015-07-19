data {
  int N;
  int y[N];
}
parameters {
  real<lower = 0, upper = 1> theta;
}
model {
  increment_log_prob(bernoulli_log(y, theta));
}
