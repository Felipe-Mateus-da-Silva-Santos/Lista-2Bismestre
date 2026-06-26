class SaldoInsuficienteError extends Error {
  constructor(mensagem, saldoDisponivel, valorSolicitado) {
    super(mensagem);
    this.name = "SaldoInsuficienteError";
    this.saldoDisponivel = saldoDisponivel;
    this.valorSolicitado = valorSolicitado;
  }
}

function sacar(conta, valor) {
  if (conta.saldo < valor) {
    throw new SaldoInsuficienteError(
      "Saldo insuficiente para realizar o saque",
      conta.saldo,
      valor
    );
  }

  conta.saldo -= valor;
  console.log(`Saque realizado. Novo saldo: R$${conta.saldo}`);
  return conta.saldo;
}


const conta = { titular: "Maria", saldo: 500 };

try {
  sacar(conta, 200);
  sacar(conta, 1000);
} catch (erro) {
  if (erro instanceof SaldoInsuficienteError) {
    console.log(`Erro: ${erro.message}`);
    console.log(`Disponível: R$${erro.saldoDisponivel}`);
    console.log(`Solicitado: R$${erro.valorSolicitado}`);
  }
}