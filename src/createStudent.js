const createStudent = (nome) => {
  const objeto = {
    name: nome,
    feedback: () => 'Eita pessoa boa!' };
  return objeto;
};

module.exports = createStudent;