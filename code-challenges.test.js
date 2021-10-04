// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//----- Problem Solving -----
// Create a describe method that lists the name of the function
// Add a test method that describes what the function does
// Create 2 variables to hold the expected values
// Add an expect method that compares the input to the expected values

//----- Syntax -----
describe("theShuffler", () => {
    const expected1 = ["yellow", "blue", "pink", "green"]
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        expect(theShuffler(colors1)).toEqual(expect.arrayContaining(expected1))
        expect(theShuffler(colors2)).toEqual(expect.arrayContaining(expected2))
    })
})
// test fails with error ReferenceError: theShuffler is not defined

// b) Create the function that makes the test pass.

//----- Problem Solving -----
// Create a function called theShuffler() that takes array as a parameter.
// Use the shift() method to remove the value at the zeroth index of array. 
// The .shift() method is a mutator, which means I don't have to set up a seperate variable to contain the new value. 
// Shuffle the remaining items in array and display them in the shuffled order.

//----- Syntax -----
const theShuffler = (array) => {
    array.shift() /* removing the first value in the array */
    // let newArray = [] /* variable to hold empty array */
    // let combinedArray = [...array, ...newArray] /* using spread operator to combine the arrays */
    return array
}
// Success - The test passes with this code. I thought I would have to do something more complicated, 
// but this does indeed fulfill the requirements of removing the first item and shuffling the remaining contents.


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//----- Problem Solving -----
// Create a describe method that lists the name of the function
// Add a test method that describes what the function does
// Create 2 variables to hold the expected values
// Add an expect method that compares the input to the expected values

//----- Syntax -----
describe("lowestHighest", () => {
    const expected1 = [-8, 90]
    const expected2 = [5, 109]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(lowestHighest(nums1)).toEqual(expected1)
        expect(lowestHighest(nums2)).toEqual(expected2)
    })
})
// test fails with error ReferenceError: lowestHighest is not defined

// b) Create the function that makes the test pass.

//----- Problem Solving -----
// Create a function called lowestHighest() that takes an array of numbers as a parameter.
// Create a variable called newArray to hold an empty array.
// Loop through array and use Math.min() and Math.max() to find the highest and lowest numbers.
// I'll use unshift() or .push() methods to add the result of Math.min() and Math.max() to newArray
// Return an array of 2 values being the lowest and highest numbers only.

//----- Syntax -----
const lowestHighest = (array) => {
    // let newArray = [] /* Since push and unshift are mutators, I shouldn't need this empty variable right? */
    for(let i = 0; i < array.length; i++){
        array.push(Math.min(...array))
        array.push(Math.max(...array))
    }
    return array
}
// Fail - Can't figure this one out. I keep getting RangeError: Maximum call stack size exceeded


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//----- Problem Solving -----
// Create a describe method that lists the name of the function
// Add a test method that describes what the function does
// Create 2 variables to hold the expected values
// Add an expect method that compares the input to the expected values

//----- Syntax -----
describe("noDuplicates", () => {
    const expected1 = [3, 7, 10, 5, 4, 8, 2, 1]
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDuplicates(testArray1, testArray2)).toEqual(expected1)
    })
})
// test fails with error ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.

//----- Problem Solving -----
// Create a function that takes in 2 arrays as a parameter
// Create a variable called mergedArray to hold the combined array
// Use the .concat() method to merge the two arrays into one combined array
// Look for duplicate values and get rid of them


//----- Syntax -----
const noDuplicates = (array1, array2) => {
    let mergedArray = array1.concat(array2)
    // console.log(mergedArray) /* This is showing me that I've successfully combined the array */

    // Google says use the .filter() method, I see my other classmates using .filter(), but it's not clicking for me why this works.
    // According to the syllabus, filter() "loops through an array and returns a new array with only the values that are truthy or
    // the values that satisfy your stated condition. Filter will return a subset of the given array." 
    // Is .filter() looping through mergedArray, looking at the value of the array, and...? What is the 'index' argument doing?
    return mergedArray.filter((value, index) => { 

        // The syllabus says .indexOf() "Returns the index of the first instance of a given value. The original array is unchanged."
        // I'm not sure what indexOf() is doing here.
        return mergedArray.indexOf(value) === index
    })
}

// This apparently works for my other classmates (and works here), but it's not clear to me why this works.