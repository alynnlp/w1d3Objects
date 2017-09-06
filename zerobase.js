// return all the indices (zero-based positions) in the string where each character is found. S
  // function that takes in the string, a loop
    function countLetters(string) {
      //i need to readjust the string to no space and split each of the letter up
      const noSpaceStr = string.split(" ").join("")
      const letters = noSpaceStr.split("");

      //what do you actually want to do, I want to generate a result which is an object
      let result = {};

      //what do you want this object to be?
      //I need to check each letter to see
      for (var i = 0; i < letters.length; i++) {
        var char = letters[i];


        //key is unique, check if key is in the object, then add 1
        if (char in result){
          result[char].push(i) ;

          //console.log(char, result[char])
        }
        else {
          result[char] = [i];
          //console.log(char, result[char])
        }
      }
      return result;
     }


console.log(countLetters('lighthouse in the house'))
