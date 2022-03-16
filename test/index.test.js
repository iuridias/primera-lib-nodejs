const pegaArquivo = require('../index');

const arrayResult = [ {
   FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}];

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  });
  it('deve retornar array com resultados', async () => {
    const result = await pegaArquivo('K:/project/primeira-lib-nodejs/test/arquivos/texto1.md');
    expect(result).toEqual(arrayResult);
  });
  it('deve retornar mensagem que "não há links"', async () => {
    const result = await pegaArquivo('K:/project/primeira-lib-nodejs/test/arquivos/texto2.md');
    expect(result).toBe('Não há links');
  })
  
});