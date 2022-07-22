const ftoc = function(ftemp) {
  let toCelsius = (ftemp-32)*(5/9);
  let resultado = parseFloat(toCelsius.toFixed(1));
  return resultado;
};

const ctof = function(ctemp) {
  let toFahr = ctemp*(9/5)+32;
  return parseFloat(toFahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
