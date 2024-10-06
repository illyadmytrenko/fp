const Y = (f) => ((x) => f((y) => x(x)(y)))((x) => f((y) => x(x)(y)));

function makeNonRecursive(recursiveFunc) {
  return Y(recursiveFunc);
}

const recursiveFactorial = (f) => (n) => n === 0 ? 1 : n * f(n - 1);

const factorial = makeNonRecursive(recursiveFactorial);

console.log(factorial(5));
console.log(factorial(6));
