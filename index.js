//1
//Skapa en funktion som loopar igenom en array av siffror, och returnera alla jämna tal (som en sträng eller som en ny array.)

let array = [5, 3, 6, 7, 5, 2, 4, 3, 1, 10, 8, 9, 5];
let evenArray = [];

function findEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log(arr[i]);
      //if you want to add something to an array, use .push
      evenArray.push(arr[i]);
    }
  }
  //   console.log(evenArray);
  // return the array/element without adding any parameters.
  return evenArray;
}

// console.log(findEven(array));

//2
//Skapa en funktion som loopar igenom en array, och multiplicerar alla tal med varandra. T.ex [2,3,4] ska funktionen returnera 24. (2*3*4 = 24).

let array2 = [5, 4, 3];

function multiplyArray(arr) {
  // set it to 1 so that you dont get a NaN error, since multipliedNumber is undefined at the start. so 1*5 makes multipliedNumber 5, so next iteration you get 5*4 and etc.
  let multipliedNumber = 1;
  for (i = 0; i < arr.length; i++) {
    multipliedNumber *= arr[i];
  }
  return multipliedNumber;
}

// console.log(multiplyArray(array2));

//3
// Skapa en funktion som loopar igenom en array och kollar om den innehåller “jordgubbar”. Om den innehåller jordgubbar bör den returnera true, annars returneras false.

let fruitArray = ["potato", "apple", "orange", "strawberry"];

function findStrawberry(arr) {
  let foundStrawberries = false;

  for (i = 0; i < arr.length; i++) {
    //its ok but wouldn't work if we have a lot of indexes. Easiest way is to see if there are no strawberries.
    // if (arr[i] == "strawberry") {
    //   console.log("true");
    // } else {
    //   console.log("false");
    // }

    // since it is T/F you can just return what you need. Nope, this only checks the first element in the array, doesn't work!
    // return arr[i] == "strawberry";

    if (arr[i] == "strawberry") {
      foundStrawberries = true;
      break;
    }
  }
  return foundStrawberries;
}

// console.log(findStrawberry(fruitArray));

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
//this will always return even array since it returns it after running the code once.
//other ways to do is to see if even or odd is more than half of the array length.

function arrayType(arr) {
  let even = 0;
  let odd = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log(arr[i]);
      even++;
      if (even > arr.length / 2) {
        break;
        //good idea to break from loops when we get the answer we need, and dont need to continue going through all the loop
      }
    } else if (arr[i] % 2 == 1) {
      odd++;
      if (odd > arr.length / 2) {
        break;
      }
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

// console.log(arrayType(array3));

//5
// Skapa en funktion som tar in en array över förnamn, och returnerar en ny array med alla namn som är längre än 6 bokstäver långa.

let array4 = ["Bassam", "yasmeen", "mohammed", "abdulla", "layla", "Ali-baba"];
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

// console.log(sixLetters(array4));

//EXTRA----------------------------------------------------------------------------------------------------------------------------------------------------
//Also did them using array methods
//1

let myArr = [1, 2, "One", true];

function readOutLout(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// readOutLout(myArr);

//Array method
// let readAgain = myArr.forEach((item) => console.log(item));

//2

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function common2Array(arr, arr2) {
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < arr2.length; x++) {
      if (arr[i] == arr2[x]) {
        console.log(arr[i]);
      }
    }
  }
}

// common2Array(student1Courses, student2Courses);

//Array method
let commonStudies = student1Courses.filter((course) =>
  student2Courses.includes(course)
);
// console.log(commonStudies);

//3

let food = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];

// common2Array(food, food2);

//Array method
let commonFoods = food.filter((food) => food2.includes(food));
// console.log(commonFoods);

//4

let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

// function common3Array(arr1, arr2, arr3) {

//Pusha in allt från första arrayen i en ny array - const allValues;
//Loopa igenom array 2 - För varje element - Om allValues innehåller inte innehåller element, pusha in det i allValues. Om det finns, pusha in i commonValues-array.

//   for (i = 0; i < arr1.length; i++) {
//     for (x = 0; x < arr2.length; x++) {
//       for (y = 0; y < arr3.length; y++) {
//         if ((arr1[i] == arr2[x]) == arr3[y]) {
//           console.log(arr1[i]);
//           console.log(arr2[x]);
//           console.log(arr3[y]);
//         }
//       }
//     }
//   }
// }

// common3Array(values1, values2, values3);

function common3Array(arr1, arr2, arr3) {
  let value4 = [];
  for (i = 0; i < arr1.length; i++) {
    value4.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    value4.push(arr2[i]);
  }
  for (i = 0; i < arr3.length; i++) {
    value4.push(arr3[i]);
  }
  for (i = 0; i < value4.length; i++) {
    for (x = i + 1; x < value4.length; x++) {
      if (value4[i] === value4[x]) {
        console.log(value4[i]);
      }
    }
  }
}

// common3Array(values1, values2, values3);

//Array method

let commonThings = values1.filter(
  (item) => values2.includes(item) || values3.includes(item)
);
// console.log(commonThings);

//5

let furniture = ["Table", "Chairs", "Couch"];

// console.log("Table"[0]);

function makeLetters(arr) {
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < arr[i].length; x++) {
      console.log(arr[i][x]);
      // console.log(arr[i].charAt(x));
      //.charAt(i) returns a letter from a string, thus you need a loop to get all the indexes/letters
    }
    // console.log(arr[i].charAt(i));
  }
}

// makeLetters(furniture);

//Array method

// let getLetters = furniture.forEach((word) =>
// word.split("").forEach((letter) => console.log(letter))
// );

//Extra-Extra Read all about it
//6

let array5 = [10, 15, 9, 5, 3, 19, 10, 25, 4, 29];
let moreThanTen = [];

function largerThanTen(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      moreThanTen.push(arr[i]);
    }
  }
  return moreThanTen;
}

// console.log(largerThanTen(array5));

//Array method

let tenAndAbove = array5.filter((number) => number > 10);
// console.log(tenAndAbove);

//7

function addNumbers(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(addNumbers(array2));

//Array method

let addition = array2.reduce((number, currentValue) => {
  return number + currentValue;
}, 0);

// console.log(addition);

//8

function checkBanana(arr) {
  for (i = 0; i < arr.length; i++) {
    return arr[i] == "banana";
  }
}

// console.log(checkBanana(fruitArray));

//Array method

let isBanana = fruitArray.includes("banana");
// console.log(isBanana);

//9

let array6 = [5, 4, 3, -5, -3, -2];

function positiveNegative(arr) {
  let positive = 0;
  let negative = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
  }

  if (positive > negative) {
    console.log("Mostly Positive");
  } else if (positive < negative) {
    console.log("mostly negative");
  } else if (positive == negative) {
    console.log("Balanced, as all things should be");
  }
}

// positiveNegative(array6);

//Array method

let positiveNum = array6.filter((number) => number % 2 == 0).length;
let netgativeNum = array6.filter((number) => number % 2 == 1).length;

function positiveOrNegative(pos, neg) {
  if (pos > neg) {
    console.log("positive");
  } else if (pos < neg) {
    console.log("negative");
  } else if (pos == neg) {
    console.log("balanced");
  }
}

// positiveOrNegative(positiveNum, netgativeNum);

//10

function startWithA(arr) {
  let nameStartWithA = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0].toUpperCase() == "A") {
      //upper-case / lower-case matters, you can use .toUpperCase() function make any lower-case letters into upper case ones so they can be found as well
      nameStartWithA.push(arr[i]);
    }
  }
  return nameStartWithA;
}

// console.log(startWithA(array4));

//Array method

let aFirstLetter = array4.filter((word) => {
  return word.charAt(0) === "a";
});

// console.log(aFirstLetter);

//11

function returnSmallestNumber(arr) {
  let smallest = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  console.log("smallest number is " + smallest);

  //using math.min(...arr)
  // let smallestNumber = Math.min(...arr);
  // console.log(smallestNumber);
}

// returnSmallestNumber(array5);

//Array method

//12

function findE(arr) {
  let wordsWithE = 0;
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < arr.length; x++) {
      if (arr[i][x] == "e") {
        wordsWithE++;
      }
    }
  }
  console.log("words with e: " + wordsWithE);
}

// findE(array4);

//Array method

let whoHasE = array4.filter((word) => word.includes("e"));

// console.log(whoHasE);

//13

let array7 = [6, 4, 2];
function allEven(arr) {
  //easiest way is to see if we have an odd number, if we do, then we get false
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      return false;
    }
  }
  return true;

  //gives us many answers so a person needs to always know how many numbers are in the array
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {
  //     console.log("even number");
  //   } else {
  //     console.log("odd number");
  //   }
  // }

  //or
  //return arr.every(num => num % 2 === 0);
  //The every() method returns true if the function returns true for all elements.
}

// console.log(allEven(array7));

//Array method

let isEven = array7.every((number) => number % 2 == 0);

// console.log(isEven);

//
// 1-5 again but without using for loops - Array Methods
//

//1

let evenNumberArray = array.filter((item) => {
  return item % 2 == 0;
});

// console.log(evenNumberArray);

//2

let mulpliedNumber2 = array2.reduce((multiplicationResult, item) => {
  return item * multiplicationResult;
}, 1);

// console.log(mulpliedNumber2);

//3

let includesStrawberry = fruitArray.includes("strawberry");

// console.log(includesStrawberry);

//4
// A way to do it is to filter the array into new arrays, make one even, one odd. take the length of them and compare.

//5

let longNames = array4.filter((item) => {
  return item.length > 6;
});

// console.log(longNames);

//Extra Questions 7-nov Array Methods-----------------------------------------------------------------------------------------------------------------------------

//1

let names = ["layla", "noor", "mahmood", "hisham", "nadine"];

// let nameArray = names.forEach((name) => console.log(name));

//2

let nums = [5, 14, 7, 12, 10];

let double = nums.map((number) => number * 2);

// console.log(double);

//3

let nums2 = [14, 7, 60, 73, 53, 25, 47, 89, 41, 19];

let even2 = nums2.filter((number) => number % 2 == 0);

// console.log(even2);

//4

let added = nums.reduce((number, currentValue) => {
  return number + currentValue;
}, 0);

// console.log(added);

//5

//find always returns the first value that fulfils the criterias
let found = nums2.find((number) => number > 20);

// console.log(found);

//6

//returns the first value that fulfils the criterias
let indexFinder = names.findIndex((name) => name === "noor");

// console.log(indexFinder);

//7

let checkNegative = nums2.some((number) => number < 0);

// console.log(checkNegative);

//8

let checkNum = nums2.every((number) => number > 0);

// console.log(checkNum);

//9

let empty = [];

empty.push(5);
empty.push(7);
empty.push(14);
empty.pop();
// console.log(empty);

// let moreArrays = empty.push(17);
// console.log(moreArrays);
//This returns the length of the array.

// let lessArrays = empty.pop();
// console.log(lessArrays);
// This returns the last element of the array

//10

let sortedNums = nums2.sort((a, b) => a - b);
//sort mutates the array it is used on

console.log(sortedNums);
console.log(nums2);
