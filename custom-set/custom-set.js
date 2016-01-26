function CustomSet(arr){
  this.currSet = arr;
};

CustomSet.prototype.eql = function(instance){
  var checkInstance = instance.currSet.sort();
  var checkCurr = this.currSet.sort();
  return checkInstance.every(function(num1){
    return checkCurr.map(function(num2){
      console.log("num1: ", num1, "Num2: ", num2);
      return (num1 === num2);
    })
  })
};

CustomSet.prototype.delete = function(num){
  var delIndex = this.currSet.indexOf(num);
  this.currSet.splice(delIndex, 1);
  return this;
};

module.exports = CustomSet;


