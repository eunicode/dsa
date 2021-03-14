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
/* TREEHOUSE - ITERATIVE #1
https://teamtreehouse.com/library/introduction-to-algorithms/algorithms-in-code/binary-search-implementations
*/

function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (array[mid] === key) {
      return mid;
    }
    if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/* ================================================================= */
/* TREEHOUSE - ITERATIVE #2
https://teamtreehouse.com/library/algorithms-sorting-and-searching/searching-names/code-for-binary-search
*/

function indexOfItem(collection, target) {
  var first = 0;
  var last = collection.length - 1;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);

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
