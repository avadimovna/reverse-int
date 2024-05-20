module.exports = function reverse (n) {
  let nToString = n.toString();
  if (nToString.startsWith('-')) {
    nToString = nToString.slice(1);
  }
  let result = '';
  for (i = 0; i <= nToString.length - 1; i++) {
    result = nToString[i] + result;
  }
  return result;
}
