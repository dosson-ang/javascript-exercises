const reverseString = function(string) {
  let arr = string.split('');

  let reversedArr = arr.reverse();
  let joinedReversedArr = reversedArr.join('');

  return joinedReversedArr;
};

// Do not edit below this line
module.exports = reverseString;
