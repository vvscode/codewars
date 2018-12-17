const mulLimit = Math.sqrt(Number.MAX_SAFE_INTEGER);

function mul(a, b) {
  let ret = '0';
  for (var i = 0; i < +a; i++) {
    ret = sum(ret, b);
  }
  return ret;
}

function sum(a, b) {
  a = a + '';
  b = b + '';
  var longest = a.length > b.length ? a : b;
  var shortest = b === longest ? a : b;

  var lA = longest.split('').reverse();
  var sA = shortest.split('').reverse();

  var result = [];
  var remainder = 0;
  for (let i = 0; i < lA.length; i++) {
    var tmp = +lA[i] + (+sA[i] || 0) + remainder;
    if (tmp < 10) {
      remainder = 0;
      result[i] = tmp;
    } else {
      remainder = 1;
      result[i] = tmp % 10;
    }
  }
  if (remainder) {
    result.push(remainder);
  }
  return result.reverse().join('');
}

var factorialMemory = {};
function factorial(n) {
  if (n < 2) {
    return '1';
  }
  if (!(n in factorialMemory)) {
    var ret = mul(factorial(n - 1), n);
    factorialMemory[n] = ret;
  }

  return factorialMemory[n];
}
