function converterData(texto) {
  const regex = /(\d{2})\/(\d{2})\/(\d{4})/g;

  return texto.replace(regex, "$3-$2-$1");
}


console.log(converterData("Nascimento: 15/06/2008"));


console.log(converterData("Início: 01/03/2026 e Término: 30/06/2026"));


console.log(converterData("Nenhuma data aqui."));
