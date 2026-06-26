function mascaraCPF(texto) {
  const regex = /(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/g;

  return texto.replace(regex, "***.***.***-$4");
}


console.log(mascaraCPF("CPF do cliente: 123.456.789-09"));


console.log(mascaraCPF("João: 111.222.333-44 e Ana: 555.666.777-88"));
