const submitButton = document.querySelector('#submit-button');
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
        document.querySelector('#input-state').appendChild(createOption);
    }
}
createState();


function validateDate (event){
    event.preventDefault();
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let dateString = document.querySelector('#input-date').value;
    let dateParts = dateString.split('/');
    
    let day = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]);
    let year = parseInt(dateParts[2]);
    
    if(year < 1950 || year > 2021 || month < 1 || month > 12 | day < 1 || day > monthLength[month]){
        alert('Insira uma data válida!');
    }
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
        monthLength[1] = 29;
    }
}
submitButton.addEventListener('click', validateDate);

