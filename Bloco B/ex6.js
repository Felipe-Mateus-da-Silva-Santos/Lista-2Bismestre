function verificarAluno(turma, indice) {
  try {
    const nome = turma[indice].nome.toUpperCase();
    console.log(`Aluno encontrado: ${nome}`);
  } catch (erro) {
    console.log("Erro: aluno não encontrado ou índice inválido.");
  } finally {
    console.log("Verificação concluída.");
  }
}


const turma = [{ nome: "Carlos" }, { nome: "Ana" }];

verificarAluno(turma, 0);


verificarAluno(turma, 5);
