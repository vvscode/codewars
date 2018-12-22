const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

var calc = expression => {
  const tokens = expression.match(/\d+\.\d+|\d+|[-+*/\(\)]/g).map(t => +t || t);

  const acceptAnyOfSymbols = arr =>
    arr.some(a => a == tokens[0]) && tokens.shift();
  const acceptNumber = _ => !isNaN(tokens[0]) && tokens.shift();
  const acceptSymbol = sym => tokens[0] == sym && tokens.shift();
  const operate = (x, op, y) => operations[op](x, y);
  const unariOperation = _ => (acceptSymbol('-') ? -unit() : unit());
  const unit = () =>
    acceptSymbol('(')
      ? ((e = normalPriorityCalculations()), acceptSymbol(')'), e)
      : acceptNumber();

  const highPriorityCalculations = (x, op) => {
    x = unariOperation();
    while ((op = acceptAnyOfSymbols(['*', '/']))) {
      x = operate(x, op, unariOperation());
    }
    return x;
  };
  const normalPriorityCalculations = (x, op) => {
    x = highPriorityCalculations();
    while ((op = acceptAnyOfSymbols(['+', '-']))) {
      x = operate(x, op, highPriorityCalculations());
    }
    return x;
  };
  return normalPriorityCalculations();
};
