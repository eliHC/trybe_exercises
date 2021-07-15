const submitButton = document.querySelector("#submit-button");
const root = document.querySelector('#root');
const stateList = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal ",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará ",
  "Paraíba ",
  "Paraná ",
  "Pernambuco ",
  "Piauí ",
  "Rio de Janeiro ",
  "Rio Grande do Norte",
  "Rio Grande do Sul ",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe ",
  "Tocantins",
];

function createState() {
  for (let state of stateList) {
    let createOption = document.createElement("option");
    createOption.innerText = state;
    document.querySelector("#input-state").appendChild(createOption);
  }
}
createState();

function validateDate(event) {
  event.preventDefault();
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let dateString = document.querySelector("#input-date").value;
  let dateParts = dateString.split("/");

  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);

  if (
    year < 1950 ||
    year > 2021 ||
    month < 1 ||
    (month > 12) | (day < 1) ||
    day > monthLength[month]
  ) {
    alert("Insira uma data válida!");
  }
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }
}
submitButton.addEventListener("click", validateDate);

function saveData(event) {
	event.preventDefault();
	let savedData = [];
	let inputs = {
    name: document.querySelector("#input-name").value,
    email: document.querySelector("#input-email").value,
    cpf: document.querySelector("#input-cpf").value,
    address: document.querySelector("#input-address").value,
    city: document.querySelector("#input-city").value,
    state: document.querySelector("#input-state").value,
    house: document.querySelector("input[name='input-radio']:checked").value,
    appartment: document.querySelector("input[name='input-radio']:checked").value,
    resume: document.querySelector("#text-resume").value,
    role: document.querySelector("#input-role").value,
    roleDescription: document.querySelector("#role-description").value,
    date: document.querySelector("#input-date").value,
  }
  savedData.push(inputs);
  document.querySelector('form').reset();
  createLogData(savedData);
  console.log(savedData);
}
submitButton.addEventListener('click', saveData);

function createLogData (param){
	let logData = document.createElement('div');
	logData.value = param.entries(param);
	logData.innerHTML = param.entries(param);
	logData.innerText = param.entries(param);
	root.appendChild(logData);
}
