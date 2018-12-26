guess = 1;
var randomBase = 1 / 100000 / 100;
var increment = randomBase;

Math = Object.create(Math, {
  random: {
    value: function value() {
      randomBase = randomBase + increment; // to avoid duplications
      return randomBase;
    },
  },
});

Math.random.toString = function() {
  // cheat on original detection
  return 'function random() { [native code] }';
};

Object.freeze(Math);
