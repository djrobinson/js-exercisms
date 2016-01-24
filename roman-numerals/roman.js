


var arabicToRoman = [
  {arabic: 1000, roman: 'M'},
  {arabic: 900, roman: 'CM'},
  {arabic: 500, roman: 'D'},
  {arabic: 400, roman: 'CD'},
  {arabic: 100, roman: 'C'},
  {arabic: 90, roman: 'XC'},
  {arabic: 50, roman: 'L'},
  {arabic: 40, roman: 'XL'},
  {arabic: 10, roman: 'X'},
  {arabic: 9, roman: 'IX'},
  {arabic: 5, roman: 'V'},
  {arabic: 4, roman: 'IV'},
  {arabic: 1, roman: 'I'}
];

function toRoman(num) {
  //Create array to push strings to
  var romanArray = [];

  //for every pair of arab/rom numerals, loop to check divisibility
  for (var key in arabicToRoman) {
    //set the current arabic character to the current iteration of arabic
    currArab = arabicToRoman[key].arabic;
    //if the current arabic numeral has a remainer upon division & it is divisible, run the next loop
    if(num % currArab < currArab && num % currArab !== num) {
      //set the maxLoop value to the number of times the arabic numeral can go into the number
      var maxLoop = Math.floor(num / currArab);
      //add the roman numerabl to the romanArray and subtract it from the number to prep for the next iteration
      for (var i = 0; i < maxLoop; i++) {
        romanArray.push(arabicToRoman[key].roman);
        num = num - currArab;
      }
    }
  }
  //join the array together
  return romanArray.join('');
}





module.exports = toRoman;