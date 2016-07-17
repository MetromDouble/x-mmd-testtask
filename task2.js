function shift(array, direction, n) {
  var newArray = array.slice();
  for (var i = 0; i < n; i++) {
    if (direction > 0) {
      newArray = newArray.splice(-1, 1).concat(newArray);
    } else if (direction < 0) {
      newArray = newArray.splice(1, newArray.length - 1).concat(newArray)
    } else {
      return 'Direction can`t be zero';
    }
  }
  return newArray;
}
