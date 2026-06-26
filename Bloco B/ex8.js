class CadastroError extends Error {
  constructor(errosCampos) {
    super("Erro de validação no cadastro");
    this.name = "CadastroError";
    this.errosCampos = errosCampos;
  }
}

function validarCadastro(dados) {
  const erros = [];

  if (!dados.nome || dados.nome.trim().length === 0) {
    erros.push({ campo: "nome", mensagem: "Nome é obrigatório" });
  } else if (dados.nome.length < 3) {
    erros.push({ campo: "nome", mensagem: "Nome deve ter no mínimo 3 caracteres" });
  }

  if (!dados.email || dados.email.trim().length === 0) {
    erros.push({ campo: "email", mensagem: "Email é obrigatório" });
  } else if (!dados.email.includes("@") || !dados.email.includes(".")) {
    erros.push({ campo: "email", mensagem: "Email inválido" });
  }

  if (dados.idade === undefined || dados.idade === null || dados.idade === "") {
    erros.push({ campo: "idade", mensagem: "Idade é obrigatória" });
  } else if (typeof dados.idade !== "number") {
    erros.push({ campo: "idade", mensagem: "Idade deve ser um número" });
  } else if (dados.idade < 14 || dados.idade > 100) {
    erros.push({ campo: "idade", mensagem: "Idade deve estar entre 14 e 100" });
  }

  if (erros.length > 0) {
    throw new CadastroError(erros);
  }

  return true;
}

try {
  validarCadastro({ nome: "Jo", email: "invalido", idade: 10 });
} catch (erro) {
  if (erro instanceof CadastroError) {
    console.log("Erros encontrados:");
    erro.errosCampos.forEach(e =>
      console.log(`  [${e.campo}] ${e.mensagem}`)
    );
  }
}

try {
  const ok = validarCadastro({
    nome: "Carlos",
    email: "carlos@ifms.edu.br",
    idade: 17
  });

  console.log("Cadastro válido:", ok);
} catch (erro) {
  console.log("Inesperado:", erro.message);
}