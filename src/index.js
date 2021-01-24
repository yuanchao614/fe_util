function arrayFlat(arr) {
  return arr.reduce((acm, item) => {
    const val = Array.isArray(item) ? arrayFlat(item) : item
    return acm.concat(val)
  }, [])
}
function arrayFindIndex(arr, pred) {
  return arr.findIndex(pred);
}

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
console.log(arrayFlat([1, [2, [3, [4]]], 5, [[7]]]));
console.log(arrayFindIndex([1, 2, 3, 4], (data) => data === 4));
console.log(dayOfYear(new Date()));