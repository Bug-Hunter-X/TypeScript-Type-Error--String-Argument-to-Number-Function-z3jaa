function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, 2); // Correct, returns 3
console.log(result1);

let result2 = addSafe(1, "2"); // Safe, logs an error message and returns 0
console.log(result2);

let result3 = addSafe("1", 2); // Safe, logs an error message and returns 0
console.log(result3); 