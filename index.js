//1
//Skapa en funktion som loopar igenom en array av siffror, och returnera alla jämna tal (som en sträng eller som en ny array.)

let array = [5, 3, 6, 7, 5, 2, 4, 3, 1, 10, 8, 9, 5];
let evenArray = [];

function findEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log(arr[i]);
      //if you want to an something to an array, use .push
      evenArray.push(arr[i]);
    }
  }
  //   console.log(evenArray);
  // return the array/element without adding any parameters.
  return evenArray;
}

console.log(findEven(array));

//2
//Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24).

let array2 = [5, 4, 3];

function multiplyArray(arr) {
  // set it to 1 so that you dont get a NaN error, since multipliedNumber is undefined at the start. so 1*5 makes multipliedNumber 5, so next iteration you get 5*4 and etc.
  let multipliedNumber = 1;
  for (i = 0; i < arr.length; i++) {
    multipliedNumber = multipliedNumber * arr[i];
  }
  return multipliedNumber;
}

console.log(multiplyArray(array2));

//3
// Skapa en funktion som loopar igenom en array och kollar om den innehåller “jordgubbar”. Om den innehåller jordgubbar bör den returnera true, annars returneras false.

let fruitArray = ["potato", "apple", "orange"];

function findStrawberry(arr) {
  for (i = 0; i < arr.length; i++) {
    // if (arr[i] == "strawberry") {
    //   return true;
    // } else {
    //   return false;
    // }

    // since it is T/F you can just return what you need.
    return arr[i] == "strawberry";
  }
}

console.log(findStrawberry(fruitArray));

//4
//Skapa en funktion som ska kunna ta in en array av siffror. Om arrayen har fler jämna tal än ojämna, returnera “Even array”. Om den har fler ojämna än jämna tal, returnera “Odd array”. Om den har lika många jämna som ojämna tal, returnera “Balanced array”.

let array3 = [4, 2, 6, 7, 5, 3];

// function arrayType(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let x = arr[i] % 2 === 0;
//     let y = arr[i] % 2 === 1;

//     if (x > y) {
//       return "Even Array";
//     } else if (x < y) {
//       return "Odd Array";
//     } else if (x == y) {
//       return "Balanced Array";
//     }
//   }
// }

function arrayType(arr) {
  let even = 0;
  let odd = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log(arr[i]);
      even++;
    } else if (arr[i] % 2 == 1) {
      odd++;
    }
    // console.log(even);
    // console.log(odd);
  }

  // this didn't work because it was inside the for loop, so it ran once after getting the first even number, thus even greater than odd, and it returned a value so the loop was done!
  if (even > odd) {
    return "Even Array";
  } else if (even < odd) {
    return "Odd Array";
  } else if (even == odd) {
    return "Balanced Array";
  }
}

console.log(arrayType(array3));

//5
// Skapa en funktion som tar in en array över förnamn, och returnerar en ny array med alla namn som är längre än 6 bokstäver långa.

let array4 = ["Bassam", "yasmeen", "mohammed", "abdulla", "layla"];
let newArray4 = [];

function sixLetters(arr) {
  //it is LENGTH not LENTH!
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 6) {
      newArray4.push(arr[i]);
    }
  }
  return newArray4;
}

console.log(sixLetters(array4));
