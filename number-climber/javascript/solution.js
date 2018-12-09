function climb(n){
  if(n < 1) { return []; }
  let binN = n.toString(2).split('');
  let ret = [];
  let i = 0;
  binN.forEach((el, index) => {
    i = +el ? (i * 2 + 1) : (i * 2);
    if (i <= n) {
      ret.push(i);
    }
  });
  return ret;
}