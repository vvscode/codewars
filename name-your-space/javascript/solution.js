function namespace(root, path, value){
  let paths = path.split('.');
  let propName = paths.pop();
  let el = root;
  paths.forEach((name) => {
    el[name] = el[name] || {};
    el = el[name];
  });
  if (arguments.length > 2) {
    el[propName] = value;
  } else {
    return el[propName];
  }
}