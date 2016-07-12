function Year (year) {
    this.year = year;
}

Year.prototype.isLeap = function() {
  var year = this.year;
  var byFour = year % 4 === 0;
  var byHundred = year % 100 === 0;
  var byFourHundred = year % 400 === 0;
  return byFour && (!byHundred || byFourHundred);
};

module.exports = Year;
