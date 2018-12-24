function domainName(url) {
  var path = url
    .split('//')
    .pop()
    .replace(/^www\./, '');
  var domain = path.split('.').shift();
  return domain;
}
