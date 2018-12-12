function all(...args) {
  const ret = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    args
    .map((p) => Promise.resolve(p))
    .forEach((el, index) => {
      el
      .then((data) => {
        ret[index] = data;
        counter++;
        if (counter === args.length) {
          resolve(ret);
        }
      }).catch(reject)
    });
  });
}