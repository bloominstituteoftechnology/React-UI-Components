// ideally for a good calculator the operate function should use a library like
// decimal.js or big.js since using floating point for calculator functions
// is inaccurate at tiny values and for rounding.

function operate(one, two, operation) {
    if (operation === "+") {
        return (parseFloat(one,10) + parseFloat(two,10)).toString();
      }
      if (operation === "-") {
        return (parseFloat(one,10) - parseFloat(two,10)).toString();
      }
      if (operation === "×") {
        return (parseFloat(one,10) * parseFloat(two,10)).toString();
      }
      if (operation === "÷") {
        return (parseFloat(one,10) / parseFloat(two,10)).toString();
      }
}

function calculate(obj, buttonText) {
    if (buttonText === "clear") { // clear all values
      return {
        total: null,
        next: null,
        operation: null,
        prev: null,
        prev_op: null,
      };
    }
  if (obj.total === "overflow") {
    return {
      total: "overflow",
      next: null,
      operation: null,
      prev: null,
      prev_op: null,
    }
  }
  if (/[0-9]+/.test(buttonText)) { // regex to test if it is a number
    if (buttonText === "0" && obj.next === "0") {
      return {};
    }
    // Update next if one of the +/-/*// keys are pressed
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonText };
      }
      return { next: buttonText };
    }
    // Else, keep concatenating numbers
    if (obj.next) {
      return {
        next: obj.next + buttonText,
        total: null,
      };
    }
    return {
      next: buttonText,
      total: null,
    };
  }

  if (buttonText === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
        prev: obj.next,
        prev_op: obj.operation,
      };
    } else if (obj.prev && obj.prev_op) { // if equal sign is pressed again, do same operation
        return {
            total: operate(obj.total, obj.prev, obj.prev_op),
            next: null,
            operation: null,
            prev: obj.prev,
            prev_op: obj.prev_op,
        }
    } 
    else {
      return {};
    }
  }

  if (!obj.next && !obj.total) {
    return {};
  }

  if (obj.operation && !obj.next) {
    return {
      operation: buttonText,
    }
  }
  
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonText,
    };
  }

  if (!obj.next) {
    return { operation: buttonText };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonText,
  };
}

export default calculate;