const wakeUp = () => 'Acordando!\n';
const coffe = () => 'tomar café!!\n';
const sleep = () => 'Dormir!\n';

const doingThings = (parameterThatIsAlsoAFunction) => console.log(parameterThatIsAlsoAFunction);





// Ao chamar a função doingThings:
doingThings(wakeUp());
doingThings(coffe());
doingThings(sleep());


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
