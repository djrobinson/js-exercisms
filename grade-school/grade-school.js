var School = function(){
  this.classList = {};
}

School.prototype.roster = function(){
  return this.classList;
}

School.prototype.add = function(student, grade){
  if (this.classList[grade]){
    this.classList[grade].push(student);
    this.classList[grade].sort();
  } else {
    this.classList[grade] = [student];
  }
}

School.prototype.grade = function(grade){
  if (this.classList[grade]) {
    return this.classList[grade].sort();
  } else {
    return [];
  }
}

module.exports = School;