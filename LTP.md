Q1.Expressão regular verifica padrões. A sintaxe literal é mais usada, já o construtor é usado em casos mais específicos como variáveis.

Q2. Metacaracteres são habilidades do RegEx, cada um tem alguma função especifica. /d verifica padrões de dígitos ex: /\d/ verifica UM digito de 1 a 9, /w verifica padrões de letras, dígitos e _ ex: /\w{7}/ verifica se possui uma sequencia de 7 caracteres assim, /s verifica se tem espaços em branco ex: /\s{2}/ verifica se tem 2 espaços em branco, . aceita qualquer caractere ex: /ab.cate/ mesmo se tiver qualquer outro caractere no lugar, ele consegue identificar a palavra.

Q3.a flag i determina que variações como minúsculo e maiúsculo n importam para a verificação. g verifica se possui mais padrões na string, n para se achar o primeiro. Volta false.

const texto = "Gato";
console.log(/gato/i.test(texto));  
true

const texto = "gato, cachorro, gato";
console.log(texto.match(/gato/g));
["gato", "gato"]

const texto = "Gato";
console.log(/gato/.test(texto));
false

Q4.Os parse errors impedem que o código seja executado, enquanto os runtime errors ocorrem somente depois que o programa já começou a rodar.

if (true {
    console.log("Olá");   <-- Falta um parênteses após o true
}


let pessoa = null;

console.log(pessoa.nome); <-- o código tenta acessar o nome, então gera um erro

Q5.Try: executa o código que pode gerar um erro. Catch: é executado apenas se ocorrer um erro no try. Finally: é executado após o try e o catch, independentemente de ter ocorrido erro ou não. Finally é executado: quando o try termina sem erros; quando ocorre um erro e ele é tratado pelo catch; mesmo que haja um return ou break dentro do catch.

Q6.É uma boa prática porque permite identificar e tratar tipos específicos de erro, tornando o código mais organizado, legível e fácil de manter. Em vez de tratar todos os erros da mesma forma, é possível tomar ações diferentes para cada situação. Name, message e stack. Em um sistema de loja virtual. Quando um usuário tenta buscar um produto pelo código e esse produto não existe no banco de dados, o sistema pode lançar um erro específico, que consegue distinguir um produto inexistente de outros erros (como falha de conexão ou erro de programação) e exibir uma mensagem adequada ao usuário, sem interromper o funcionamento da aplicação.

Q7.É um formato de texto usado para armazenar e trocar dados entre sistemas. Apesar de sua sintaxe ser parecida com a de objetos JavaScript, o JSON possui regras mais rígidas. As chaves das propriedades devem estar sempre entre aspas duplas. As strings devem ser escritas apenas com aspas duplas. Comentários não são permitidos. JSON não aceita funções, métodos nem o valor undefined, apenas strings, números, booleanos, null, objetos e arrays. Se um comentário for incluído em um arquivo .json, o arquivo se tornará inválido e ocorrerá um erro de sintaxe ao tentar interpretá-lo, impedindo sua leitura pelo programa.

Q8.JSON.parse() é um método que converte uma string no formato JSON em um objeto JavaScript. Já o JSON.stringify() faz o processo inverso, convertendo um objeto JavaScript em uma string JSON. Se JSON.parse() for chamado com uma string que contém um JSON inválido, será lançado um erro de sintaxe (SyntaxError), e a conversão não será realizada. Para tratar essa situação, deve-se utilizar um bloco try...catch, que captura o erro e permite que o programa continue executando sem ser interrompido.

Q9.O garçom síncrono representa um código síncrono, que executa uma tarefa por vez e espera ela terminar antes de continuar. Já o garçom assíncrono representa um código assíncrono, que inicia uma operação demorada (como ler um arquivo ou consultar uma API) e continua executando outras tarefas enquanto aguarda a resposta. O JavaScript é single-threaded, ou seja, executa apenas uma tarefa por vez. Por isso, o assincronismo é muito importante, pois evita que o programa fique travado durante operações demoradas, permitindo que outras tarefas continuem sendo executadas e tornando a aplicação mais rápida e responsiva.

Q10.fs.readFileSync() executa a leitura de forma síncrona, bloqueando o fluxo do programa até o término da operação. Já await fs.readFile() realiza a leitura de forma assíncrona, permitindo que outras tarefas continuem sendo executadas. Em servidores web, a versão síncrona deve ser evitada, pois bloqueia o event loop e prejudica a escalabilidade e o desempenho da aplicação.








