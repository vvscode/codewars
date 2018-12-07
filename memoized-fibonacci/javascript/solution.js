var fibonacci = (() => {
  const memory = {};
  return i => {
    if (i < 2) {
      return i;
    }
    if (memory[i]) {
      return memory[i];
    }
    const ret = fibonacci(i - 1) + fibonacci(i - 2);
    return (memory[i] = ret);
  };
})();
