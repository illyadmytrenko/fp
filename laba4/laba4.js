const multiply =
  (a = 1) =>
  (b = 1) =>
  (c = 1) =>
  (d = 1) =>
  (e = 1) =>
    a * b * c * d * e;

const multiplyWith1Arg = multiply(2);
console.log(multiplyWith1Arg()()()());

const multiplyWith2Arg = multiply(2)(3);
console.log(multiplyWith2Arg()()());

const multiplyWith3Arg = multiply(2)(3)(4);
console.log(multiplyWith3Arg()());

const multiplyWith4Arg = multiply(2)(3)(4)(5);
console.log(multiplyWith4Arg());
