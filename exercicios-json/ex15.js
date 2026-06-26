const fs = require("fs/promises");
const path = require("path");
const ARQUIVO = path.join(__dirname, "dados", "produtos.json");

async function lerProdutos() {
  const dados = await fs.readFile(ARQUIVO, "utf-8");
  return JSON.parse(dados);
}

async function salvarProdutos(produtos) {
  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(produtos, null, 2),
    "utf-8"
  );
}

async function listarProdutos() {
  const produtos = await lerProdutos();

  produtos.forEach(p => {
    console.log(`[${p.id}] ${p.nome} - R$ ${p.preco.toFixed(2)} | Categoria: ${p.categoria}`);
  });
}

async function adicionarProduto(nome, preco, categoria) {
  const produtos = await lerProdutos();

  const maiorId = produtos.reduce((max, p) => {
    return p.id > max ? p.id : max;
  }, 0);

  const novoProduto = {
    id: maiorId + 1,
    nome,
    preco,
    categoria
  };

  produtos.push(novoProduto);

  await salvarProdutos(produtos);

  console.log(`Produto "${nome}" adicionado com sucesso! (ID: ${novoProduto.id})`);
}

async function buscarPorCategoria(categoria) {
  const produtos = await lerProdutos();

  const filtrados = produtos.filter(p => p.categoria === categoria);

  if (filtrados.length === 0) {
    console.log(`Nenhum produto encontrado na categoria "${categoria}"`);
    return;
  }

  let soma = 0;

  filtrados.forEach(p => {
    soma += p.preco;
    console.log(`[${p.id}] ${p.nome} - R$ ${p.preco.toFixed(2)}`);
  });

  const media = soma / filtrados.length;

  console.log(`Total: ${filtrados.length} produto(s) | Valor médio: R$ ${media.toFixed(2)}`);
}

async function removerProduto(id) {
  const produtos = await lerProdutos();

  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    throw new Error(`Produto com ID ${id} não encontrado`);
  }

  const removido = produtos.splice(index, 1)[0];

  await salvarProdutos(produtos);

  console.log(`Produto "${removido.nome}" removido com sucesso!`);
}

// Execução principal — NÃO modifique esta parte
async function main() {
  console.log("=== LISTAGEM INICIAL ===");
  await listarProdutos();

  console.log("\n=== ADICIONANDO PRODUTOS ===");
  await adicionarProduto("Headset", 299.90, "Periféricos");
  await adicionarProduto("Webcam", 199.00, "Periféricos");

  console.log("\n=== LISTAGEM ATUALIZADA ===");
  await listarProdutos();

  console.log("\n=== PERIFÉRICOS ===");
  await buscarPorCategoria("Periféricos");

  console.log("\n=== REMOVENDO PRODUTO ID 2 ===");
  await removerProduto(2);
  await listarProdutos();
}

main();