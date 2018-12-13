snail = function(m) {
  var mCopy = JSON.parse(JSON.stringify(m));
  var ret = [];
  var i = 0;

  do {
    if (i === 0) {
      ret.push.apply(ret, mCopy.shift());
    } else if (i === 1) {
      ret.push.apply(ret, mCopy.map(item => item.pop()));
    } else if (i === 2) {
      ret.push.apply(ret, mCopy.pop().reverse());
    } else if (i === 3) {
      ret.push.apply(ret, mCopy.map(item => item.shift()).reverse());
    }
    i++;
    i = i % 4;
  } while (mCopy.length > 0 && mCopy[0].length > 0);

  return ret;
};
