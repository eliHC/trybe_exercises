function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

//Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function createMonth() {
  let daysUl = document.querySelector("#days");

  for (let day of dezDaysList) {
    let dayLi = document.createElement("li");

    if (day === 24 || day === 31) {
      dayLi.classList.add("day");
      dayLi.classList.add("holiday");
      dayLi.innerText = day;
      daysUl.appendChild(dayLi);
    } else if (day === 4 || day === 11 || day === 18) {
      dayLi.classList.add("day");
      dayLi.classList.add("friday");
      dayLi.innerText = day;
      daysUl.appendChild(dayLi);
    } else if (day === 25) {
      dayLi.classList.add("day");
      dayLi.classList.add("holiday");
      dayLi.classList.add("friday");
      dayLi.innerText = day;
      daysUl.appendChild(dayLi);
    } else {
      dayLi.classList.add("day");
      dayLi.innerText = day;
      daysUl.appendChild(dayLi);
    }
  }
}
createMonth();

//Exercício 2:
//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createHolidayButton(name) {
  let button = document.createElement("button");
  button.innerText = name;
  button.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(button);
}
createHolidayButton("xaclau");

//Exercício 3:
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeColorButton() {
  document.querySelector("#btn-holiday").addEventListener("click", function () {
    let holiday = document.querySelectorAll(".holiday");
    for (let key in holiday){
      if (holiday[key].style.backgroundColor === "green") {
        holiday[key].style.backgroundColor = "rgb(238,238,238)";
      } else {
        holiday[key].style.backgroundColor = "green";
      }
    }
  });
}
changeColorButton();

//Exercício 4:
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(name) {
  let button = document.createElement("button");
  button.innerText = name;
  button.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(button);
}
createFridayButton("Sexta-xeira");

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeTextButton() {
  document.querySelector("#btn-friday").addEventListener("click", function () {
    let friday = document.querySelectorAll(".friday");
    for (let key in friday){
      if (friday[key].innerText == 'Sextou') {
        friday[key].innerText = parseInt(friday[key].previousElementSibling.innerText + 1); // TO FIX
      } else {
        friday[key].innerText = 'Sextou';
      }
    }
  });
}
changeTextButton();

