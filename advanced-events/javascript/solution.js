const filterFuncs = args => args.filter(i => typeof i === 'function');

const handlers = Symbol('handlers');

class Event {
  constructor() {
    this[handlers] = [];
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);

    var that = this;
    this.emit = function(...args) {
      that[handlers].forEach(el => {
        el.apply(this, args);
      });
    };
  }

  subscribe(...args) {
    this[handlers].push(...filterFuncs(args));
  }

  unsubscribe(...args) {
    filterFuncs(args).forEach(el => {
      let idx = this[handlers].lastIndexOf(el);
      if (idx > -1) {
        this[handlers] = this[handlers].filter((_, i) => i !== idx);
      }
    });
  }
}
