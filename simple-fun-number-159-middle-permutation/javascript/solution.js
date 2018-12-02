function middlePermutation(s) {
  const n = s.length;
  if (n < 2) {
    return s;
  }
  const letters = s.split('').sort();

  if (s.length % 2 == 0) {
    let ret = letters[n / 2 - 1];
    let noRet = letters.filter(i => i !== ret);
    return [ret, ...noRet.reverse()].join('');
  } else {
    let midIndex = Math.floor(n / 2);
    let odder = letters[midIndex];
    let neighbor = letters[midIndex - 1];
    let ender = letters.slice(0, Math.floor(n / 2) - 1).reverse();
    let middler = letters.slice(Math.floor(n / 2) + 1).reverse();
    return [odder, neighbor, ...middler, ...ender].join('');
  }
}
