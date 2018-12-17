function mul(a, b) {
  a = a + '';
  b = b + '';
  var min;
  if (a.length < b.length) {
    min = a;
  } else if (b.length < a.length) {
    min = b;
  } else {
    min = a < b ? a : b;
  }
  var max = min === a ? b : a;

  var mA = max.split('').reverse();

  var remainder = 0;
  var ret = [];
  for (var i = 0; i < mA.length; i++) {
    var tmp = +mA[i] * min + remainder;
    var val = tmp % 10;
    remainder = (tmp - val) / 10;
    ret.push(val);
  }
  if (remainder) {
    ret.push(remainder);
  }
  return ret.reverse().join('');
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
