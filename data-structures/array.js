// Define a comparison function that will be used
// to sort the array in ascending order
function compareAscending(a, b) {
  // if a > b, return 1
  // The sort() method will flip the order of a and b
  if (a > b) {
    return 1;
    // Do not flip the order of a and b otherwise
  } else {
    return -1;
  }
}

// Define a comparison function that will be used
// to sort the array in descending order
function compareDescending(a, b) {
  // if a < b, return 1
  // The sort() method will flip the order of a and b
  if (a < b) {
    return 1;
    // Do not flip the order of a and b otherwise
  } else {
    return -1;
  }
}

// Define an array with unsorted numbers
let unsorted = [5, 1, 7, 3, 10, 9, 2, 4, 6, 8];

// Test the sort() method without the use of comparison function
console.log("Using sort() method:");
console.log(unsorted.sort());

// Test the sort() method using the compareAscending function
console.log("Using sort() method with compareAscending:");
console.log(unsorted.sort((a, b) => compareAscending(a, b)));

// Test the sort() method using the compareDescending function
console.log("Using sort() method with compareDescending:");
console.log(unsorted.sort((a, b) => compareDescending(a, b)));
