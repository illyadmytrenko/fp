const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function operation(arr, op, ranges) {
  let result = op === "+" ? 0 : 1;
  for (let i = ranges[0]; i < ranges[1]; i++) {
    switch (op) {
      case "+":
        result += arr[i];
        break;
      case "*":
        result *= arr[i];
        break;
    }
  }
  return result;
}

function isValidArray(arr) {
  return arr.every((num) => !isNaN(num));
}

function isValidOperation(op) {
  return op === "+" || op === "*";
}

function isValidRange(ranges, arrLength) {
  const [start, end] = ranges;
  return start >= 0 && end <= arrLength && start < end;
}

function askForArray() {
  rl.question("Введіть масив чисел через кому: ", (arrInput) => {
    const arr = arrInput.split(",").map(Number);

    if (!isValidArray(arr)) {
      console.log("Некоректний масив. Усі елементи мають бути числами.");
      askForArray();
    } else {
      askForOperation(arr);
    }
  });
}

function askForOperation(arr) {
  rl.question("Введіть операцію ('+' або '*'): ", (op) => {
    if (!isValidOperation(op)) {
      console.log("Некоректна операція. Використовуйте '+' або '*'.");
      askForOperation(arr);
    } else {
      askForRange(arr, op);
    }
  });
}

function askForRange(arr, op) {
  rl.question(
    "Введіть діапазон у форматі [початок, кінець]: ",
    (rangeInput) => {
      const ranges = rangeInput
        .replace("[", "")
        .replace("]", "")
        .split(",")
        .map(Number);

      if (!isValidRange(ranges, arr.length)) {
        console.log(
          "Некоректний діапазон. Початок має бути менший за кінець і в межах масиву."
        );
        askForRange(arr, op);
      } else {
        console.log("Результат: ", operation(arr, op, ranges));
        rl.close();
      }
    }
  );
}

askForArray();
