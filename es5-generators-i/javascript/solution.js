function generator(sequencer, ...args) {
  let ct = 0;
  let last = [];
  return {
    next() {
      return sequencer(...args)(ct++, last);
    },
  };
}

function dummySeq() {
  return () => 'dummy';
}

function factorialSeq() {
  return (n, last) => {
    if (n === 0) {
      last[0] = 1;
      return 1;
    }
    last[0] *= n;
    return last[0];
  };
}

function fibonacciSeq() {
  return (n, last) => {
    if (n == 1 || n == 0) {
      last[0] = 1;
      last[1] = 1;
      return 1;
    }
    let ret = last[0] + last[1];
    last[0] = last[1];
    last[1] = ret;
    return ret;
  };
}

function rangeSeq(start, step) {
  return (n, last) => {
    if (n == 0) {
      last[0] = start;
      return start;
    }
    last[0] += step;
    return last[0];
  };
}

function primeSeq() {
  return (n, last) => {
    if (n == 0) {
      last[0] = 2;
      return 2;
    }
    let p = nextPrime(last);
    last.push(p);
    return p;
  };
}

function nextPrime(lst) {
  let il = lst.length;
  let n = lst[il - 1] + 1;
  for (; !isPrime(n, lst); n++);
  return n;
}

function isPrime(n, lst) {
  return lst.every(el => n % el !== 0);
}
function partialSumSeq(...args) {
  return (n, last) => {
    if (n >= args.length) {
      throw new Error('End of sequence error expected');
    } else if (n == 0) {
      last[0] = args[0];
      return last[0];
    }
    last[0] += args[n];
    return last[0];
  };
}
