const fs = require("fs/promises");
const path = require("path");

async function listarAlunos() {
  try {
    const arquivo = path.join(__dirname, "dados", "alunos.json");
    const dados = await fs.readFile(arquivo, "utf-8");
    const alunos = JSON.parse(dados);

    let aprovados = 0;
    let reprovados = 0;

    alunos.forEach(aluno => {
      const situacao = aluno.nota >= 6.0 ? "Aprovado" : "Reprovado";

      if (situacao === "Aprovado") {
        aprovados++;
      } else {
        reprovados++;
      }

      console.log(
        `[${aluno.id}] ${aluno.nome} | Nota: ${aluno.nota.toFixed(1)} | Situação: ${situacao} | Turma: ${aluno.turma}`
      );
    });

    console.log(
      `Total: ${alunos.length} alunos | Aprovados: ${aprovados} | Reprovados: ${reprovados}`
    );

  } catch (erro) {
    console.log("Erro ao ler arquivo:", erro.message);
  }
}

listarAlunos();