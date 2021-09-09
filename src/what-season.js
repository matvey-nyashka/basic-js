import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }
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