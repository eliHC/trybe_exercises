const newEmployees = (cavaco) => {
  const employees = {
    id1: cavaco('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: cavaco('Cuica Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: cavaco('Carla Raiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newGuy = (guyName) => {
  let guy = guyName.toLowerCase().replace(' ', '_');
  
  return {
    Nome: guyName,
    Email: `${guy}pessoa@trybe.com`
  };
}

console.log(newEmployees(newGuy));
