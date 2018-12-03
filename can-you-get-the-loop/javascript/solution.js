function loop_size(node) {
  const map = new Map();
  while (!map.has(node)) {
    map.set(node, node);
    node = node.next;
  }
  let x = node;
  node = node.next;
  let len = 1;
  while (x !== node) {
    len++;
    node = node.next;
  }
  return len;
}
