const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayDeURLs) {
  try {
    const arrayStatus  = await Promise
      .all(arrayDeURLs
        .map(async url => {
          const res = await fetch(url); // res=response/resposta
          return res.status;
    }))
    return arrayStatus;
  } catch(erro) {
    manejaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks) {
  //loop para cada { chave: valor }
  //objeto -> valor
  // Object.values(objeto) < Retorna um array com o valor do objeto
  //Join tira elemento do array e transforma em string
  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  //spread operator = espalhar o valor do objeto
  const resultados = arrayLinks.map((objeto, indice) => ({ 
    ...objeto, 
    status: statusLinks[indice] }));
  return resultados;
}

module.exports = validaURLs;