const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
    return undefined;
  }
  return (
    `Oi, meu nome é ${nome}!\n`
         + `Tenho ${idade} anos,\n`
        + 'trabalho na Trybe e mando muito em programação!\n'
        + '#VQV!'
  );
};

module.exports = vqv;
