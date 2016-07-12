function DnaTranscriber() {
}

const dna_rna = {
  C: "G",
  G: "C",
  A: "U",
  T: "A"
};

DnaTranscriber.prototype.toRna = function(dna) {
  var rna = "";
  for (var i = 0, len = dna.length; i < len; i++) {
    rna += dna_rna[dna[i]];
  }
  return rna;
};

module.exports = DnaTranscriber;
