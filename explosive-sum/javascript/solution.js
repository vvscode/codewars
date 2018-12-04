// http://www.numericana.com/data/partition.htm
// https://en.wikipedia.org/wiki/Partition_(number_theory)#Generating_function

var cache = {};

function sum(a, b = a) {
  if (a === 0) {
    return 1;
  }

  if (a < 0 || b === 0) {
    return 0;
  }

  if (cache[a] && cache[a][b]) {
    return cache[a][b];
  }

  var ret = sum(a, b - 1) + sum(a - b, b);

  cache[a] = cache[a] || {};
  cache[a][b] = ret;

  return ret;
}
