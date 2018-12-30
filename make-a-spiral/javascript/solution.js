let spiralize = size => {
  let arr = [];
  let x, y;
  for (x = 0; x < size; x++) {
    arr[x] = Array.from({
      length: size,
    }).fill(0);
  }

  let left = 0;
  let right = size;
  let top = 0;
  let bottom = size;
  x = left;
  y = top;
  let h = Math.floor(size / 2);
  while (left < right && top < bottom) {
    while (y < right) {
      arr[x][y] = 1;
      y++;
    }
    y--;
    x++;

    top += 2;
    if (top >= bottom) break;

    while (x < bottom) {
      arr[x][y] = 1;
      x++;
    }
    x--;
    y--;

    right -= 2;
    if (left >= right) break;

    while (y >= left) {
      arr[x][y] = 1;
      y--;
    }
    y++;
    x--;

    bottom -= 2;
    if (top >= bottom) break;

    while (x >= top) {
      arr[x][y] = 1;
      x--;
    }
    x++;
    y++;

    left += 2;
  }
  if (size % 2 == 0) arr[h][h] = 1;
  return arr;
};
