/* ================================================================= */
/* TREEHOUSE - ITERATIVE #1
https://teamtreehouse.com/library/introduction-to-algorithms/algorithms-in-code/binary-search-implementations

Alternative to `target`: key, 
Alternative to left/right: start/end 
Alternative to middle index: mid, midpoint, midIdx, indexToCheck
Alternative middle value: arr[mid], midVal, checking  

intial `end`: arr.length - 1
while loop condition: start <= end
new `start`: mid + 1
new `end`: mid - 1

Works for finding strings as well.
*/

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // const mid = left + Math.floor((right - left) / 2);

    // Target is midpoint
    if (array[mid] === target) {
      return mid;
    }
    // Target is after midpoint
    else if (array[mid] < target) {
      left = mid + 1;
    }
    // Target is before midpont
    else {
      right = mid - 1;
    }
  }

  // Target does not exist in array
  return -1;
  // return null
}

/* ================================================================= */
/* CODECADEMY - ITERATIVE 

initial `end`: arr.length
while loop condition: end > start
new `start`: mid + 1
new `end`: mid
*/

const binarySearchC = (arr, target) => {
  let left = 0;
  let right = arr.length; // ALERT: `END` IS LENGTH OF ARRAY.

  while (right > left) {
    const midIdx = Math.floor((left + right) / 2);
    const midVal = arr[midIdx];
    // console.log(midIdx);

    if (midVal === target) {
      return midIdx;
    } else if (target > midVal) {
      left = midIdx + 1;
    } else {
      right = midIdx;
    }
  }

  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];

const target = 41;

let targetIndex = binarySearchI(searchable, target);
console.log(`The target index is ${targetIndex}.`);

module.exports = binarySearchI;

/* ================================================================= */
/* INTERVIEW CAKE - ITERATIVE 
https://www.interviewcake.com/concept/javascript/binary-search?course=fc1&section=sorting-searching-logarithms
*/

function binarySearchIC(target, nums) {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target, so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {
    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {
      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}

/* ================================================================= */
/* TREEHOUSE - RECURSIVE
https://teamtreehouse.com/library/introduction-to-algorithms/algorithms-in-code/binary-search-implementations
*/

function recursiveBinarySearch(arr, target, start = 0, end = null) {
  // default parameters
  if (end === null) {
    // If `end` argument is not provided, set it to last index
    end = arr.length - 1;
  }

  // Base case #1
  // Invalid arguments. Could also mean `target` is less than first element
  if (start > end) {
    return -1;
    // throw new Error('invalid arguments or target DNE')
    // throw `Error: invalid arguments or target DNE`
  }

  let mid = Math.floor((start + end) / 2);

  // Base case #2
  if (target === arr[mid]) {
    return mid;
  }

  // Recursive case
  else {
    // Case #1: Target is less than midpoint, cut to first half of array
    if (target < arr[mid]) {
      return recursiveBinarySearch(arr, target, start, mid - 1);
    }
    // Case #2: Target is greater than midpoint, cut to second half of array
    else {
      return recursiveBinarySearch(arr, target, mid + 1, end);
    }
  }
}

const arr = [0, 10, 20, 30, 40, 50, 60, 100];
console.log(recursiveBinarySearch(arr, 60));

/* ================================================================= */
/* TREEHOUSE - ITERATIVE #2 (Identical to Treehouse Iterative #1)
https://teamtreehouse.com/library/algorithms-sorting-and-searching/searching-names/code-for-binary-search
*/

function indexOfItem(collection, target) {
  var first = 0;
  var last = collection.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);

    if (collection[midpoint] === target) {
      return midpoint;
    } else if (collection[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return null;
}

// Note that this array is now sorted!
const names = [
  'Elida Sleight',
  'Francina Vigneault',
  'Lucie Hansman',
  'Nancie Rubalcaba'
];

var index = indexOfItem(names, 'Lucie Hansman');
console.log(index);
