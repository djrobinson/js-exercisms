
var allergyList = [
  {'cats': 128},
  {'pollen': 64},
  {'chocolate': 32},
  {'tomatoes': 16},
  {'strawberries': 8},
  {'shellfish': 4},
  {'peanuts': 2},
  {'eggs': 1}
]

var Allergies = function(score){
  this.score = score;
}

Allergies.prototype.list = function(){
  var score = this.score;
  return allergyList.reduce(function(accum, allergen){
    var key = Object.keys(allergen)[0];
    console.log(allergen[key]);
    console.log("score is : " + score);
    if ( score >= allergen[key] ) {
      accum.unshift(key);
      score -= allergen[key];

    }
    return accum;
  }, [])
}

Allergies.prototype.allergicTo = function(food){
  var allergenArr = this.list();

  if ( allergenArr.indexOf(food) !== -1 ){
    return true;
  } else {
    return false;
  }
}

module.exports = Allergies