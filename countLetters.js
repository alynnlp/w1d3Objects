// how to extract different letter of the string,
  // function that takes in the letter, a loop
    function countLetters(string) {

      const noSpaceStr = string.split(" ").join("")
      const letters = noSpaceStr.split("");

      //What do you want the result to be = letter as an object; occurance as a key
      let result = {};

      //interating the character "noSpaceStr = lighthouseinthehouse" to check which one is unique
      for (var i = 0; i < letters.length; i++) {
        var char = letters[i];

        //console.log(`result[${char}] =`, result[char])

        //key is unique, check if key is in the object, then add 1
        if (char in result){
          result[char] += 1;
        }
        else {
          result[char] = 1;
        }
      }

      return result;

      // //at the end i want to return an array of numbers

     }


console.log(countLetters('lighthouse in the house')) // lighthouseinthehouse


// cant push an object to another object
// object only hold a unique key no second same key

