//Extend the String object with toBase64() and fromBase64() functions
const table =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const zero6 = '0'.repeat(6);
const zero8 = '0'.repeat(8);
const zero16 = '0'.repeat(16);

String.prototype.toBase64 = function() {
  let bits = '';
  const len = this.length;
  for (let i = 0; i < len; i++) {
    bits += `${zero8}${this.charCodeAt(i).toString(2)}`.substr(-8);
  }
  if (len % 3 === 1) {
    bits += zero16;
  } else if (len % 3 === 2) {
    bits += zero8;
  }

  let ans = '';
  for (let i = 0; i < bits.length; i += 6) {
    const n = parseInt(bits.substr(i, 6), 2);
    ans += table[n];
  }
  return ans;
};

String.prototype.fromBase64 = function() {
  let bits = '';
  for (let i = 0; i < this.length; i++) {
    const n = table.indexOf(this[i]).toString(2);
    bits += `${zero6}${n}`.substr(-6);
  }

  let ans = '';
  for (let i = 0; i < bits.length; i += 8) {
    const n = parseInt(bits.substr(i, 8), 2);
    ans += String.fromCharCode(n);
  }
  return ans;
};
