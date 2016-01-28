function CustomSet(arr){
  this.currSet = arr;
};



CustomSet.prototype.eql = function(instance){
  if (instance.currSet === undefined && this.currSet === undefined){
    return true;
  } else if ( instance.currSet === undefined || this.currSet === undefined ){
    return true;
  }
  var checkInstance = instance.currSet.sort();
  var checkCurr = this.currSet.sort();
  return checkInstance.every(function(num1){
    return checkCurr.map(function(num2){
      return (num1 === num2);
    })
  })
};

CustomSet.prototype.delete = function(num){
  var delIndex = this.currSet.indexOf(num);
  this.currSet.splice(delIndex, 1);
  return this;
};

CustomSet.prototype.difference = function(obj){
  var orig = this.currSet;
  var arr = obj.currSet;
  this.currSet = orig.filter(function(num){
    if ( arr.indexOf(num) === -1 ) return num;
  })
  return this;
}

CustomSet.prototype.disjoint = function(obj){

  if (obj === undefined || this.currSet === undefined ) {
    return true
  } else {
    var orig = this.currSet;
    var arr = obj.currSet;
  }
  var retVal;
  orig.filter(function(num){
    if ( arr.indexOf(num) !== -1 ) {
      retVal = false;
    } else {
      retVal = true
    }
  })
  return retVal;
}


CustomSet.prototype.empty = function(){
  this.currSet = [];
  return this;
}

CustomSet.prototype.intersection = function(obj){
  var orig = this.currSet;
  var comp = obj.currSet;
  this.currSet = orig.filter(function(num){
    if ( comp.indexOf(num) === -1 ) return num;
  })
  return this;
}

CustomSet.prototype.member = function(num){
  var orig = this.currSet;
  if (orig.indexOf(num) !== -1 ){
    return true;
  } else {
    return false;
  }
}

CustomSet.prototype.put = function(num){
  this.currSet.push(num);
  return this;
}

CustomSet.prototype.size = function(){
  if (this.currSet === undefined) return 0;

  var length = this.currSet.length;
  return length;
}

CustomSet.prototype.subset = function(obj){
  if (obj.currSet === undefined ) return true;
  var iterArr = obj.currSet;
  var checkArr = this.currSet;
  return iterArr.every(function(num){
    return checkArr.indexOf(num) !== -1;
  })
}

CustomSet.prototype.toList = function(){
  if (this.currSet === undefined ) return [];
  var sorted = this.currSet.sort();
  var accum = [];
  sorted.map(function(num, i){
   if (num !== accum[i - 1]){
    accum.push(num);
  }});
  return accum;

};

CustomSet.prototype.union = function(arr){
  if (this.currSet === undefined) this.currSet = [];
  var fullArr = this.currSet.concat(arr.currSet);
  console.log(fullArr);
  this.currSet = fullArr;
  return this;
};

module.exports = CustomSet;


