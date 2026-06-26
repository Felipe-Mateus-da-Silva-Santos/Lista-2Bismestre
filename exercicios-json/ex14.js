const fs = require("fs/promises");
const path = require("path");

async function atualizarNota(id, novaNota) {
  const arquivo = path.join(__dirname, "dados", "alunos.json");
  const dados = await fs.readFile(arquivo, "utf-8");
  const alunos = JSON.parse(dados);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    throw new Error(`Aluno com ID ${id} não encontrado`);
  }

  const notaAntiga = aluno.nota;

  if (typeof novaNota !== "number" || novaNota < 0 || novaNota > 10) {
    throw new RangeError("Nota inválida. Deve estar entre 0 e 10");
  }

  aluno.nota = novaNota;

  await fs.writeFile(
    arquivo,
    JSON.stringify(alunos, null, 2),
    "utf-8"
  );

  console.log(
    `Nota do aluno "${aluno.nome}" atualizada: ${notaAntiga.toFixed(1)} → ${novaNota.toFixed(1)}`
  );
}

async function main() {
  try {
    await atualizarNota(3, 6.5);
    await atualizarNota(99, 8.0);
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  }

  try {
    await atualizarNota(1, 15);
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  }
}

main();