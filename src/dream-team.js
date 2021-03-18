const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }
  return members.filter(value => typeof value == 'string').map(function(value) {value = value.trim(); return value[0].toUpperCase()}).sort().join('');
};