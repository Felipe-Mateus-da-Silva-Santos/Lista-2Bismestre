const fs = require("fs/promises");
const path = require("path");

async function buscarPorNome(termo) {
  try {
    const arquivo = path.join(__dirname, "dados", "alunos.json");
    const dados = await fs.readFile(arquivo, "utf-8");
    const alunos = JSON.parse(dados);

    const termoLower = termo.toLowerCase();

    const encontrados = alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(termoLower)
    );

    if (encontrados.length === 0) {
      console.log(`Nenhum aluno encontrado para '${termo}'`);
      return;
    }

    encontrados.forEach(aluno => {
      console.log(`[${aluno.id}] ${aluno.nome} | Nota: ${aluno.nota} | Turma: ${aluno.turma}`);
    });

  } catch (erro) {
    console.log("Erro na busca por nome:", erro.message);
  }
}

async function filtrarPorTurma(turma) {
  try {
    const arquivo = path.join(__dirname, "dados", "alunos.json");
    const dados = await fs.readFile(arquivo, "utf-8");
    const alunos = JSON.parse(dados);

    const filtrados = alunos.filter(aluno => aluno.turma === turma);

    if (filtrados.length === 0) {
      console.log(`Nenhum aluno encontrado na turma '${turma}'`);
      return;
    }

    let soma = 0;

    filtrados.forEach(aluno => {
      soma += aluno.nota;
      console.log(`[${aluno.id}] ${aluno.nome} | Nota: ${aluno.nota}`);
    });

    const media = soma / filtrados.length;

    console.log(`Média da turma ${turma}: ${media.toFixed(2)}`);

  } catch (erro) {
    console.log("Erro ao filtrar turma:", erro.message);
  }
}

async function main() {
  await buscarPorNome("ana");
  console.log("---");
  await filtrarPorTurma("INFO03B");
}

main();