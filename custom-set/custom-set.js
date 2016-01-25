var CustomSet = function(arr){
  this.currSet = arr.sort();
};

CustomSet.prototype.delete = function(num){
  var delIndex = this.currSet.indexOf(num);
  this.currSet.splice(delIndex, 1);
  return this;
};

module.exports = CustomSet;