
var PhoneNumber = function(num){
    this.numski = num;
  }

PhoneNumber.prototype.number = function(){
      pureNum = this.numski.replace(/[^0-9]/g, "")
      if ( pureNum.length < 10 ){
        return "0000000000";
      } else if ( pureNum.length > 10 && pureNum.charAt(0) === '1'){
        var shortNum = pureNum.replace(pureNum.charAt(0), '');
        return shortNum;
      } else if( pureNum.length > 10){
        return "0000000000";
      }
      return pureNum;
    };

PhoneNumber.prototype.areaCode = function(){
  var numble = this.number();
  return numble.split('').splice(0, 3).join('');
}

module.exports = PhoneNumber;