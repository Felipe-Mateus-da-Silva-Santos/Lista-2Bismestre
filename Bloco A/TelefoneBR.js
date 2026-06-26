function validarTelefone(telefone) {
  const regex = /^(?:\(\d{2}\)\s9\s\d{4}-\d{4}|\(\d{2}\)\s\d{4}-\d{4}|\d{11})$/;
  return regex.test(telefone);
}

console.log(validarTelefone("(67) 9 9999-9999")); 
console.log(validarTelefone("(67) 3333-4444"));   
console.log(validarTelefone("67999999999"));       
console.log(validarTelefone("9999-9999"));         
console.log(validarTelefone("(67) 999-9999"));     