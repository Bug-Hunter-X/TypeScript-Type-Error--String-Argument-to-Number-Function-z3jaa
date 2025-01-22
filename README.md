# TypeScript Type Error: String Argument to Number Function

This repository demonstrates a common type error in TypeScript: passing a string argument to a function expecting a number.  The bug is highlighted, and a solution using type guards is provided.

## Bug

The `add` function expects two number arguments. However, in the example, a string is passed as the second argument causing a type error.

## Solution

The solution utilizes a type guard to check the type of the arguments and handle potential string inputs appropriately.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Compile and run using the TypeScript compiler (tsc) and Node.js.