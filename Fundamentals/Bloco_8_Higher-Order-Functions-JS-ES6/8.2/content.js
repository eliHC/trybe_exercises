//  1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:


const numbers = [19, 21, 30, 3, 45, 22, 50, 15];

// Adiciona seu código aqui
function findDivisibleBy3And5 (numbersList) {
  return numbersList.find((number) => number % 3 === 0 && number % 5 === 0);
}


console.log(findDivisibleBy3And5(numbers));





// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:


const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui:
const findNameWithFiveLetters = nameList => nameList.find((name) => name.length >= 5 );



console.log(findNameWithFiveLetters(names));






//  3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic() {
  // Adicione seu código aqui
  return musicas.find(id => id);
}

console.log(findMusic('31031685'))

