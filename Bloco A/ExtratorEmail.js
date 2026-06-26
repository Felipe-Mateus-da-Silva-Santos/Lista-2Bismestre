function extrairEmails(texto) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const resultado = texto.match(regex);
  return resultado || [];
}


const texto1 = "Contate: joao@ifms.edu.br ou maria.silva@gmail.com para mais info.";
console.log(extrairEmails(texto1));


const texto2 = "Nenhum e-mail aqui.";
console.log(extrairEmails(texto2));
