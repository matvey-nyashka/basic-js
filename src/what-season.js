const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (isNaN(date.getTime())) throw new Error('THROWN');
  let season = date.getMonth();
  if(season == 0 || season == 1 || season == 11){
    return 'winter';
  }else if(season > 1 && season < 5){
    return 'spring';
  }else if(season > 4 && season < 8){
    return 'summer';
  }else {
    return 'autumn';
  }  
};
