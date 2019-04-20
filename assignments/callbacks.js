// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the callback
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// invoke getLength, it's going to take in our items array, it's going to receive the length (parameter placeholder value), console.log the length -> 4
getLength(items, length => {
  console.log(length);
});
// end of getLength


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.pop());
}
// invoke last, it's going to take in our items array, it's going to then receive the lastItem (parameter placeholder value), conole.log the lastItem -> 'Gum'
last(items, lastItem => {
  console.log(lastItem);
});
// end of last


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const added = x + y;
  return cb(added);
}
// invoke sumNums, it's going to take 2 arguments, it's going to then receive the sum (parameter placehold value), console.log the sum => 11
sumNums(5, 6, sum => {
  console.log(sum);
});
// end of sumNums


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const multiply = x * y;
  return cb(multiply);
}
// invoke multiplyNums, it's going to take 2 arguments, it's going to then receive the sum (parameter placehold value), console.log the sum => 25
multiplyNums(5, 5, sum => {
  console.log(sum);
});
// end of multiplyNums


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)) {
    return cb(true); 
    } else {
      return cb(false);
    }
}
// invoke contains, it's going to take an argument (Pencil), and then the array (items), it's then going to then receive the itemsInArray (parameter placehold value), console.log the itemsInArray => true
contains('Notebook', items, itemsInArray => {
  console.log(itemsInArray);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
