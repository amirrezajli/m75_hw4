function convert (num,m,n) {
  let dec = parseInt(num, m);
  return dec.toString(n);
};

console.log(convert(210, 3, 2));
