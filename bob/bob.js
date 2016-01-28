//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  inArray = input.split('');
  capArray = input.replace(/[^A-Za-z]+/g,'').split('');

  console.log(capArray);

  var capsLength = capArray.filter(function(letter){
    return letter.toUpperCase() === letter;
  }).length;
  console.log(inArray[inArray.length - 1]);

  if ( capsLength === capArray.length && capsLength > 0  || ( capArray.indexOf('!') !== -1 && capArray.indexOf('/?') !== -1 ))
    {return 'Whoa, chill out!'}
  else if ( inArray[inArray.length - 1] === '?')
    { return 'Sure.'}
  else if ( input.replace(/\s+/g,'').split('').length > 1 )
    { return 'Whatever.'}
  else return "Fine. Be that way!";

};

module.exports = Bob;
