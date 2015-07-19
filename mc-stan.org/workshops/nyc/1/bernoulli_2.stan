data {
  int N;
  int y[N];
}
parameters {
  real<lower = 0, upper = 1> theta;
}
model {
  for (n in 1:N)
    increment_log_prob(bernoulli_log(y[n], theta));
}
