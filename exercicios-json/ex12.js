const fs = require("fs/promises");
const path = require("path");

async function adicionarAluno(nome, nota, turma) {
  try {
    const arquivo = path.join(__dirname, "dados", "alunos.json");
    const dados = await fs.readFile(arquivo, "utf-8");
    const alunos = JSON.parse(dados);

    const maiorId = alunos.reduce((max, aluno) => {
      return aluno.id > max ? aluno.id : max;
    }, 0);

    const novoId = maiorId + 1;

    const novoAluno = {
      id: novoId,
      nome,
      nota,
      turma
    };

    alunos.push(novoAluno);

    await fs.writeFile(
      arquivo,
      JSON.stringify(alunos, null, 2),
      "utf-8"
    );

    console.log(`Aluno "${nome}" adicionado com sucesso! (ID: ${novoId})`);

  } catch (erro) {
    console.log("Erro ao adicionar aluno:", erro.message);
  }
}

async function main() {
  await adicionarAluno("Helena Costa", 9.5, "INFO03A");
  await adicionarAluno("Rafael Nunes", 4.0, "INFO03B");
}

main();