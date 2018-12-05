var Lazy = class {
  constructor() {
    this.funcs = [];
  }
  add(func, ...params) {
    this.funcs.push(function() {
      return func(...params, ...[].slice.call(arguments));
    });
    return this;
  }

  invoke(params) {
    return this.funcs.reduce((val, func) => {
      return func(...val);
    }, params);
  }
};
