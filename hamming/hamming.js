function Hamming() {
}

Hamming.prototype.compute = function(string_one, string_two) {
  var len_one = string_one.length
  var len_two = string_two.length
  if (len_one !== len_two) {
    throw new Error('DNA strands must be of equal length.');
  }
  var count = 0;
  for (var i = 0; i < len_one; i++) {
    if (string_one[i] !== string_two[i]) {
      count += 1;
    }
  }
  return count;
};

module.exports = Hamming;
