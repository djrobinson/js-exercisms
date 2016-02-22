var robotname = function(){
  this.name = newName();
  this.reset = function(){
    this.name = newName();
  };
}

var i = 100;
var a = 0;
var b = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function newName(){
  if (i >= 999){
    i = 0;
  } else {
    i++;
  }

  if (a >= 25){
    a = 0;
    b++;
  } else {
    a++;
  }
  return alphabet[a] + alphabet[a] + i;
}

module.exports = robotname;