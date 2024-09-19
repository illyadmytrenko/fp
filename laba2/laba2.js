const OriginalNumberPrototype = Number.prototype;

function CustomNumber(value) {
  this.value = value;
}

CustomNumber.prototype = Object.create(OriginalNumberPrototype);
CustomNumber.prototype.constructor = CustomNumber;

CustomNumber.prototype.toCustomString = function () {
  return `Custom number: ${this.value}`;
};

CustomNumber.prototype.isEven = function () {
  return this.value % 2 === 0;
};

let num = new CustomNumber(42);
console.log(num.toCustomString());
console.log(num.isEven());

const OriginalStringPrototype = String.prototype;

function CustomString(value) {
  this.value = value;
}

CustomString.prototype = Object.create(OriginalStringPrototype);
CustomString.prototype.constructor = CustomString;

CustomString.prototype.toUpperCaseFirstLetter = function () {
  return this.value.charAt(0).toUpperCase() + this.value.slice(1);
};

let str = new CustomString("hello");
console.log(str.toUpperCaseFirstLetter());
