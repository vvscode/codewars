function log(...args) {
  // console.log(...args);
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

function _mul(a, b) {
  if (a == 'NaN' || b == 'NaN') {
    throw new Error(`mul(${a}, ${b}) is not valid`);
  }
  log(`mul(${a}, ${b})`);
  a = a + '';
  b = b + '';
  const sign = a.startsWith('-') === b.startsWith('-') ? '' : '-';
  // use same sign
  a = a.replace(/^-/, '');
  b = b.replace(/^-/, '');

  // remove fractial
  var aFractLength =
    a.lastIndexOf('.') < 0 ? 0 : a.length - 1 - a.lastIndexOf('.');
  var bFractLength =
    b.lastIndexOf('.') < 0 ? 0 : b.length - 1 - b.lastIndexOf('.');
  var maxFractLength = Math.max(aFractLength, bFractLength);

  log(JSON.stringify({ aFractLength, bFractLength, maxFractLength }));

  if (aFractLength < maxFractLength) {
    a = a + '0'.repeat(maxFractLength - aFractLength);
  }
  if (bFractLength < maxFractLength) {
    b = b + '0'.repeat(maxFractLength - bFractLength);
  }
  a = a.replace('.', '');
  b = b.replace('.', '');

  log(JSON.stringify({ a, b }));

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

  var noFractRet = ret.reverse().join('');
  if (!maxFractLength) {
    return sign + noFractRet;
  }
  maxFractLength = maxFractLength * 2; // multiplication
  noFractRet = '0'.repeat(maxFractLength) + noFractRet;
  var fract = noFractRet.substr(-maxFractLength);
  var int = noFractRet.substr(0, noFractRet.length - maxFractLength);
  return (
    sign +
    [
      noFractRet
        .substr(0, noFractRet.length - maxFractLength)
        .replace(/^0+/, '') || '0',
      noFractRet.substr(-maxFractLength),
    ].join('.')
  );
}

function multiply(a, b) {
  var ret;
  if (
    Math.abs(a) < 1000 &&
    Math.abs(b) < 1000 &&
    Number.isInteger(+a) &&
    Number.isInteger(+b)
  ) {
    ret = a * b + '';
  } else {
    log(`multiply(${a}, ${b}) ...`);

    var uA = (a + '').replace(/\.(.*?)0+$/, '.$1').replace(/\.$/, '') || '0';
    var uB = (b + '').replace(/\.(.*?)0+$/, '.$1').replace(/\.$/, '') || '0';

    ret = _mul(uA, uB);
    ret =
      ret
        .replace(/\.(.*?)0+$/, '.$1')
        .replace(/\.$/, '')
        .replace(/^0+/, '')
        .replace(/^-\./, '-0.')
        .replace(/^\./, '0.')
        .replace(/^-$/, '')
        .replace(/^-0$/, '') || '0';
  }
  log(`multiply(${a}, ${b}) -> ${ret}`);
  return ret;
}
