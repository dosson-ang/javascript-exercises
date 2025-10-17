const sumAll = function(positiveInt, secondPositiveInt) {
  let smallestPositiveInt = Math.min(positiveInt, secondPositiveInt);
  let biggestPositiveInt = Math.max(positiveInt, secondPositiveInt);
  let sumOfPositiveIntegers = 0;

  if (smallestPositiveInt >= 0 && 
    biggestPositiveInt >= 0 && 
    typeof smallestPositiveInt === 'number' && 
    typeof biggestPositiveInt === 'number' &&
    Number.isInteger(positiveInt) &&
    Number.isInteger(secondPositiveInt)) {
    for (let i = smallestPositiveInt; i <= biggestPositiveInt; i++) {
      sumOfPositiveIntegers += i;
    }

    return sumOfPositiveIntegers;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
