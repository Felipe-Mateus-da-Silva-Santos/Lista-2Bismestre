class OperacaoInvalidaError extends Error {
  constructor(operacao) {
    super(`Operação inválida: ${operacao}`);
    this.name = "OperacaoInvalidaError";
    this.operacao = operacao;
  }
}

function calcular(a, b, operacao) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Os valores devem ser números");
  }

  if (operacao === "/" && b === 0) {
    throw new RangeError("Divisão por zero não permitida");
  }

  switch (operacao) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;

    default:
      throw new OperacaoInvalidaError(operacao);
  }
}

const operacoes = [
  [10, 2, "/"],
  [10, 0, "/"],
  [5, 3, "%"],
  ["x", 2, "+"],
  [8, 4, "*"],
];

operacoes.forEach(([a, b, op]) => {
  try {
    console.log(`${a}${op}${b} = ${calcular(a, b, op)}`);
  } catch (erro) {
    console.log(`[${erro.name}] ${erro.message}`);
  }
});