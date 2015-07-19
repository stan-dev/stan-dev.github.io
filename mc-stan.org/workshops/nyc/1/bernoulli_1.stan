data {
  int N;
  int y[N];
}
parameters {
  real theta;
}
model {
  increment_log_prob(0);
  for (n in 1:N)
    increment_log_prob(y[n] * log(theta) + (1 - y[n]) * log(1 - theta));
}
