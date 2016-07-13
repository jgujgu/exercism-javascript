function Gigasecond(date) {
  this.startDate = date;
}

const second = 1000;
const giga = 1000 * 1000 * 1000;
const gigasecond = giga * second;

Gigasecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + gigasecond);
};

module.exports = Gigasecond;
