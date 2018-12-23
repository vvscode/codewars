function MagicFunction(...args) {
  let sum = args.reduce((x, y) => x + (+y || 0), 0);
  let ret = (...args) => MagicFunction(...args, sum);
  ret.valueOf = () => sum;
  return ret;
}
