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

function multiply(a, b) {
  if (a < 1000 && b < 1000) {
    return a * b + '';
  }
  var zeroesAtTheEnd = 0;
  a = (a + '').replace(/^0+/, '') || '0';
  b = (b + '').replace(/^0+/, '') || '0';

  var trailedA = a.replace(/0+$/, '');
  var trailedB = b.replace(/0+$/, '');

  if (a !== trailedA) {
    zeroesAtTheEnd += a.length - trailedA.length;
    a = trailedA;
  }
  if (b !== trailedB) {
    zeroesAtTheEnd += b.length - trailedB.length;
    b = trailedB;
  }

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
    var el = +mA[i];
    var tmp = sum(multiply(el, min), remainder);
    var val = tmp.substr(-1);
    remainder = val === tmp ? 0 : tmp.substr(0, tmp.length - 1);
    ret.push(val);
  }
  if (remainder) {
    ret.push(remainder);
  }
  if (zeroesAtTheEnd) {
    ret.unshift('0'.repeat(zeroesAtTheEnd));
  }
  return (
    ret
      .reverse()
      .join('')
      .replace(/^0+/, '') || '0'
  );
}
