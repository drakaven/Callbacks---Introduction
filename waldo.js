// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(index) {
//   console.log(index);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(i){
    if (i === "Waldo") {
      found(arr.indexOf(i));   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log(index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


