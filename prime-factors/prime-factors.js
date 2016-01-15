function primeFactors(num) {

  //create an array to hold the prime factors list
  resArray = [];

  //create newnum var equal to num. This will be the number that will
  //get divided by prime factors until it reaches a prime number itself
  var newnum = num;

  //create a for loop starting at the first prime number and iterate
  //until you reach the numbers value
  for ( var i = 2; i <= num; i++) {
    //Beginning on the second iteration of the enclosing loop & 
    //when num is divisible by i, run the enclosed for loop
    if ( i > 2 && num % i === 0) { 
      //check against each number in the current prime factors list
      for ( var j = 0; j < resArray.length; j++) {
        //if the current value of newnum can be divided by a current factor
        //add it to the list again & divide newnum that number
        if ( newnum % resArray[j] === 0 ) {
          resArray.push(resArray[j]);
          newnum = newnum / resArray[j];
        }
      }
    }

    //if nothing above is true, check to see if newnum is divisible by the next prime
    if ( newnum % i === 0 ) {

      //add the new prime to the list and divide newnum by i before the next iteration
      resArray.push(i); 
      newnum = newnum / i;
      console.log(resArray);
    }
  }


  return resArray;
}



module.exports = {
  for: primeFactors
};