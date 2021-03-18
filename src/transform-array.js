const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }
  let array = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next') {
      i += 1;
      continue;
    }else if(arr[i] === '--discard-prev') {
      if(arr[i - 2] !== '--discard-next'){
        array.pop();
      }
      continue;
    }else if(arr[i] === '--double-next'){
      if(arr[i+1] !== undefined){
      array.push(arr[i+1]);
      }
      continue;
    }else if(arr[i] === '--double-prev') {
      if(arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next'){
        array.push(arr[i-1]);
      }
      continue;
    } 
    array.push(arr[i])
  }
  return array;
}  

