module.exports = function towelSort (matrix) {
  let result = [];  
  if (matrix == undefined) return result; else {
    for (i=0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let item of matrix[i])
      result.push(item);
    } else {
      for (let item of matrix[i].reverse())
      result.push(item);
    }
  }
}
return result;

}

  

