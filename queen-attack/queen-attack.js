function Queens(positioning){
  this.white = [0, 3];
  this.black = [7, 3];
  if (positioning){
    if (this.white === this.black){
      return 'Queens cannot share the same space';
    } else {
      this.white = positioning.white;
      this.black = positioning.black;
    }
  }
  this.toString = function(){

  }
  this.canAttack = function(){

  }
}

module.exports = Queens;