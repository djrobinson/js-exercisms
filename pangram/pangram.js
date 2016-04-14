var Pangram = function(sentence){
  this.isPangram = function(){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var sentArr = sentence.toLowerCase().split('');
    function letterIncluded(elem){ return (sentArr.indexOf(elem) !== -1)? true : false };
    return alphabet.every(letterIncluded);
  }
}
module.exports = Pangram;