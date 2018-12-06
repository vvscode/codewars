function strHash(str) {
  return Array.from(
    new Set(
      str
        .toLowerCase()
        .split('')
        .sort(),
    ),
  ).join('');
}

function findUniq(arr) {
  const hash = arr.reduce((acc, str) => {
    var hash = strHash(str);
    acc[hash] = acc[hash] || {
      counter: 0,
    };
    acc[hash].counter++;
    acc[hash].value = str;
    return acc;
  }, {});
  return hash[Object.keys(hash).find(key => hash[key].counter === 1)].value;
}
