const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let adit = [];
  let addition = (typeof options.addition != "undefined") ? String(options.addition) : "";
  if(options.additionRepeatTimes){
    for (let i =0; i < options.additionRepeatTimes; i++){
      adit.push(addition)
    }
  }else {
    adit.push(String(addition))
  }
  let additionSep = (options.additionSeparator) ? options.additionSeparator : '|'
  let sep = adit.join(additionSep);
  let arr = [];
  if(options.repeatTimes){
    for (let i = 0; i < options.repeatTimes; i++){
    arr.push(String(str) + sep)
    }
  }else {
    arr.push(String(str) + sep)
  }  
  let adSep = (options.separator) ? options.separator : '+'
  return arr.join(adSep)

};
  