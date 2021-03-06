// 1 - Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!
// Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :
// Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com , e perceba que ele devolve uma página HTML com uma piada aleatória.
// Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/" . Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
// Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/" . Veja que agora recebemos apenas a piada aleatória em formato texto.
// Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/" . Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.


// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
  // Adicionar lógica aqui!
// };

// window.onload = () => fetchJoke();
// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers

   

// O segundo parâmetro myObject define o tipo de request method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições via curl .
// A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then (em caso de sucesso) e .catch (em caso de falha). A requisição fetch retorna um objeto Response . Utilizando .then , verifique a estrutura da resposta usando um console.log na response retornada pelo fetch .





// // Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?
// // Para isso, usamos o método .json() na resposta da API . Esse método converte o conteúdo do body da Response e retorna uma outra Promise , que, quando bem-sucedida, retorna um JSON contendo as informações da piada.
// // A partir do fetch , troque o console.log() anterior pelo método .json() e imprima os dados da requisição.



const arrayToDivide = [2, 3, 5, 10,]

const fuckThisShit = new Promise((resolve, reject) => {
  let arrayo = [];
  
  for (index = 0; index < 10; index += 1) {
    let num = Math.floor(Math.random() * 50);
    arrayo.push(num * num);

  }
  const total = arrayo.reduce((acc, curr) => acc + curr);

  console.log(arrayo);
  console.log(total);

  (total > 8000) ? reject() : resolve(total)

})
  .then((total) => arrayToDivide.map((n) => total / n))  
  .then((array) => console.log(array.reduce((acc, curr) => acc + curr)))
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"))

// const API_URL = 'https://icanhazdadjoke.com/';

// const appender = (toBeAppended, typeOfElement) => {
//   const element = document.createElement(typeOfElement);
//   element.innerText = toBeAppended;
//   document.querySelector('#jokeContainer').appendChild(element);
// }


// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(({ joke }) => appender(joke, 'p'))
// };

// window.onload = () => fetchJoke();





// // Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
// // Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// // Primeiramente, instancie uma Promise
// // Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// // Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// // Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// // Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
// // Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// // Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
