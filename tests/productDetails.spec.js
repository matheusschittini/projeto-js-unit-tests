const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof(productDetails)).toBe('function');
    expect(typeof(productDetails('produto1,produto2'))).toBe('object');
    expect(productDetails('produto1','produto2').length).toBe(2);
    for (let index=0; index < productDetails('produto1','produto2').length; index+=1){
      expect(typeof(productDetails('produto1','produto2'))).toBe('object');
    }
    expect(productDetails('produto1', 'produto2')).not.toEqual(productDetails('produto3', 'produto4'));
    for (let index=0; index < productDetails('produto1','produto2').length; index +=1){
      expect(productDetails('produto1','produto2')[index].details.productId.endsWith('123')).toBe(true);
    }
  });
});
