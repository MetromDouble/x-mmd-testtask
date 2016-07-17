function reverse(list) {
  var stepArray = [];
  var step = list;
  while (true) {
    stepArray.push(step.value);
    if (!step.next) {
      break;
    }
    step = step.next;
  }
  return stepArray.reverse();
}
