function arrayFlat(arr) {
  return arr.reduce((acm, item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item
    return acm.concat(val)
  }, [])
}
function arrayFindIndex(arr, pred) {
  return arr.findIndex(pred);
}

function toDecimal(value, decimal) {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

console.log(arrayFlat([1, [2, [3, [4]]], 5, [[7]]]));
console.log(arrayFindIndex([1, 2, 3, 4], (data) => data === 4));
// console.log(dayOfYear(new Date()));
console.log(toDecimal(1.23456, 2));