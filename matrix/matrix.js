var Matrix = function(matrix) {
  this.matrix = matrix;
  this.arr = matrix.split("\n");
  this.rows = this.arr.map(function(currRow){
    var rowArr = currRow.split(" ");
    return rowArr.map(function(num){
      return parseInt(num);
    });
  })
  this.getColumns = function(){
    console.log("running!!!");
    var retMatrix = [];
    var rowLen = this.arr[0].split(" ");
    console.log(rowLen);
    for ( var i = 0; i < rowLen.length; i++){
      var retArr = [];
      this.arr.map(function(currRow){
        var rowArr = currRow.split(" ");
        console.log(rowArr[i]);
        retArr.push(parseInt(rowArr[i]));
      });
      console.log(retArr);
      retMatrix.push(retArr);
    }
    return retMatrix;
  }
  this.columns = this.getColumns();
}

// Matrix.prototype.columns = function(){
//   return [1903, 3, 4];
// }
    // console.log("running!!!");
    // var retMatrix = [];
    // var rowLen = arr[0].split(" ");
    // console.log(rowLen);
    // for ( var i = 0; i < rowLen.length; i++){
    //   var retArr = [];
    //   this.arr.map(function(currRow){
    //     var rowArr = currRow.split(" ");
    //     console.log(rowArr[i]);
    //     retArr.push(rowArr[i]);
    //   });
    //   console.log(retArr);
    //   retMatrix.push(retArr);
    // }
    // return retMatrix;
  // }

// Matrix.prototype.rows = function(){
//   return this.arrarr;
// }



module.exports = Matrix;