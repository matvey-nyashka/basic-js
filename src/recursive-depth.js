const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, n=1, k = []) {
    k.push(n) 
    n++
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        this.calculateDepth(arr[i], n, k)
      }
    }
    return Math.max.apply(null, k)
  }
};


