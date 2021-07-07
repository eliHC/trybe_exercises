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

//ex.1
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

//ex. 2
function createHolidayButton(name) {
  let button = document.createElement('button');
  button.innerText = name;
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}
createHolidayButton('xaclau');

function changeColorButton (){
  document.querySelector('#btn-holiday').addEventListener('click', function() {
    let holiday = document.querySelector('.holiday');
    if(holiday.style.backgroundColor === 'green'){
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday.style.backgroundColor  = 'green';
    }
  });
}

changeColorButton();
