const calculator = (number1, number2) => {
  const objeto = {
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  };
  return objeto;
};

const arrayGenerator = (type, object) => {
  let tipo = 0;
  if (type === 'entries') {
    tipo = Object.entries(object);
  } else if (type === 'keys') {
    tipo = Object.keys(object);
  } else if (type === 'values') {
    tipo = Object.values(object);
  }
  return tipo;
};

module.exports = { calculator, arrayGenerator };
