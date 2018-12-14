function sumIntervals(intervals) {
  let list = [];
  intervals.forEach(([a, b]) => {
    list.length = Math.max(list.length, b);
    for (let i = a; i < b; i++) {
      list[i] = 1;
    }
  });
  return list.reduce((a, b) => a + b, 0);
}
