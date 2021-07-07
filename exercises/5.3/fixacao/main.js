const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//  Copie esse arquivo e edite apenas ele;
// 2 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassToElement(event){
    let tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.classList.add('tech');
}

firstDiv.addEventListener('click', addClassToElement);
secondDiv.addEventListener('click', addClassToElement);
thirdDiv.addEventListener('click', addClassToElement);

// 3 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function changeText(){
    let textBox = document.querySelector('.tech');
    textBox.innerText = input.value;
}
input.addEventListener('keyup', changeText);


// 3: coded by: Vinicius Santana
// function techText (){
//     let tech = document.querySelector('.tech');
//     tech.innerText = input.value;
// }
// input.addEventListener('keyup', techText); 


// 4  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
function redirect (){
    window.open('https://www.google.com.br/')
}
myWebpage.addEventListener('dblclick', redirect);

// 5 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function changeColor (event){
    event.target.style.color = 'green' ;
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', function(event){
    event.target.style.color = 'unset';
})


//5 - Coded by: Andre Morsch
// myWebpage.addEventListener('mouseover', function(event) {
//     event.target.style.color = 'green'
//     })
    
//     myWebpage.addEventListener('mouseout', function(event) {
//     event.target.style.color = 'unset'
//     }) 

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
secondDiv.addEventListener('dblclick', resetText);
thirdDiv.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.