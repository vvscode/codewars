function sumStrings(a, b) {
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
  return (
    result
      .reverse()
      .join('')
      .replace(/^0+/, '') || '0'
  );
}
