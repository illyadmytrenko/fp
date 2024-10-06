const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lowerBound = 0;
let upperBound = 99;

console.log("Задумайте число від 0 до 99.");

function guessNumber() {
  const mid = Math.ceil((lowerBound + upperBound) / 2);

  rl.question(`Задумане число менше, ніж ${mid}? (Так/Ні)\n`, (answer) => {
    switch (answer.trim().toLowerCase()) {
      case "так":
        upperBound = mid - 1;
        break;
      case "ні":
        lowerBound = mid;
        break;
      default:
        console.log("Будь ласка, введіть 'Так' або 'Ні'");
        guessNumber();
    }

    if (lowerBound !== upperBound) {
      guessNumber();
    } else {
      console.log(`Ваше число: ${lowerBound}`);
      rl.close();
    }
  });
}

guessNumber();
