var compute = function(strand1, strand2) {
  if(strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  var distance = 0;

  for(var i = 0; i < strand1.length; i++) {
    if(strand1[i] !== strand2[i]) {
      distance += 1;
    }
  }

  return distance;
}





module.exports = compute;