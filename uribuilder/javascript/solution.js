// TODO: create UriBuilder object
class UriBuilder {
  constructor(str) {
    this.originalUrl = str;
    this.baseUrl = str;
    this.params = {};
    this.parse();
  }

  parse() {
    const parts = this.originalUrl.split('?');
    if (parts.length < 2) { return; }
    this.baseUrl = parts.shift();
    const params = parts.join('?').split('&').forEach((paramStr) => {
      let [key, value] = paramStr.split('=');
      if (typeof value === 'string') {
        value = decodeURI(value);
      }
      this.params[key] = value;
    });
  }

  build() {
    const params = Object.keys(this.params).map((key) => `${key}=${encodeURI(this.params[key])}`).join('&');
    if (params) {
      return `${this.baseUrl}?${params}`;
    }
    return this.baseUrl;
  }
}