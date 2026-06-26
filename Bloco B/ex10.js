class RecursoSimulado {
  constructor(nomeArquivo) {
    this.nomeArquivo = nomeArquivo;
    this.aberto = false;
  }

  abrir() {
    if (!this.nomeArquivo || typeof this.nomeArquivo !== "string") {
      throw new Error("Nome do arquivo inválido");
    }

    console.log(`Abrindo recurso para ${this.nomeArquivo}...`);
    this.aberto = true;
  }

  processar() {
    if (!this.aberto) {
      throw new Error("Recurso não está aberto");
    }

    if (this.nomeArquivo.includes("invalido")) {
      throw new Error("Arquivo inválido ou corrompido");
    }

    return `Arquivo ${this.nomeArquivo} processado com sucesso.`;
  }

  fechar() {
    if (this.aberto) {
      console.log(`Fechando recurso de ${this.nomeArquivo}...`);
      this.aberto = false;
    }
  }
}

function processarArquivoSimulado(nomeArquivo) {
  const recurso = new RecursoSimulado(nomeArquivo);

  try {
    recurso.abrir();

    const resultado = recurso.processar();

    return resultado;

  } catch (erro) {
    console.log(`[Erro] ${erro.message}`);
    return null;

  } finally {
    recurso.fechar();
  }
}

console.log("Resultado:", processarArquivoSimulado("relatorio.txt"));
console.log("---");
console.log("Resultado:", processarArquivoSimulado("arquivo-invalido.txt"));