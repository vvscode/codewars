function nextSmaller(n) {
  var strN = n + '';
  var pointPosition = -1;
  for (var i = strN.length - 1; i > 0; i--) {
    if (+strN[i] < +strN[i - 1]) {
      pointPosition = i - 1;
      break;
    }
  }
  if (pointPosition === -1) {
    return -1;
  }
  var pA = strN.substr(0, pointPosition);
  var toReplace = strN[pointPosition];
  var pB = strN.substr(pointPosition);
  var replaceWith = pB
    .split('')
    .sort()
    .reverse()
    .find(el => el < toReplace);
  pB = pB
    .replace(replaceWith, '')
    .split('')
    .sort()
    .reverse()
    .join('');

  var next = pA + replaceWith + pB;

  // in case of trainling zero - it's ignored,
  // so in fact it not the same digits
  if (next.match(/^0/)) {
    return -1;
  }
  return +next;
}
