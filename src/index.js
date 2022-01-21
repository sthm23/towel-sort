
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(matrix===undefined){
    return [];
  }else{
    for(let i=0; i<matrix.length; i++){
      if(i%2===0 || i==0){
        let b = matrix[i];
        for(let el of b){
          arr.push(el)
        }
    }else{
      let a = matrix[i].reverse();
      for(let key of a){
        arr.push(key)
      }
    }
    }
  }
  return arr;
}

