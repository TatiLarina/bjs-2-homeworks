"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (discriminant > 0) {
    let x = (-b + Math.sqrt(discriminant) )/(2 * a);
    let y = (-b - Math.sqrt(discriminant) )/(2 * a);
    arr.push(x);
    arr.push(y);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let credit = amount - contribution;
  let payment = credit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let i = 0;
  let sum = 0;

  while (i < countMonths) {
    sum = sum + payment;
    i++;
  }

  return Number(sum.toFixed(2));

}