function validarSenhaForte(senha) {
  const erros = [];

  
  if (senha.length < 8) {
    erros.push("Muito curta");
  }

  
  if (!/[A-Z]/.test(senha)) {
    erros.push("Sem letra maiúscula");
  }

  
  if (!/[a-z]/.test(senha)) {
    erros.push("Sem letra minúscula");
  }

  
  if (!/[0-9]/.test(senha)) {
    erros.push("Sem dígito");
  }

  
  if (!/[!@#$%^&*]/.test(senha)) {
    erros.push("Sem caractere especial");
  }

  return {
    valida: erros.length === 0,
    erros: erros
  };
}


console.log(validarSenhaForte("Ifms@2026"));


console.log(validarSenhaForte("ifms2026"));


console.log(validarSenhaForte("IFMS"));
