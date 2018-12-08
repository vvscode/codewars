/*
  fusc(0) = 0
  fusc(1) = 1
  fusc(2n) = fusc(n)
  fusc(2n + 1) = fusc(n) + fusc(n + 1)
*/
const memory = {};
function fusc(n){
  if (n < 2) { 
    return n;
  }
  if (n % 2 === 0) {
    return fusc(n/2);
  }
  const ret = fusc((n - 1) / 2) + fusc(1 + (n - 1) / 2);
  return memory[n] = ret;
}