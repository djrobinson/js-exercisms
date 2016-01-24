//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  inArray = input.split('');
  capArray = input.replace(/\W+/g,'').split('');

  console.log(inArray[inArray.length -1]);

  var capsLength = capArray.filter(function(letter){
    return letter.toUpperCase() === letter;
  }).length;
  console.log("caps length: ", capsLength);

  if ( capsLength > capArray.length / 3 ) { return 'Whoa, chill out!'}
  else if ( inArray[inArray.length - 1] === '?') { return 'Sure.'}
  else if ( inArray[inArray.length - 1] === '.' || '!') { return 'Whatever.'}
  else return "Fine! Be that way";

};

module.exports = Bob;
