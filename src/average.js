const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
  }
  let soma = 0;
  let media = 0;
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index];
  }
  media = (soma) / (array.length);
  return Math.round(media);
};

module.exports = average;
