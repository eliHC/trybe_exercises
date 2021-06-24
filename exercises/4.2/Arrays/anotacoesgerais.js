let pizza1 = '4 queijos';
let pizza2 = 'marguerita';
let pizza3 = 'palmito';             // melhor usar array
let pizza4 = 'frango cat';

let pizzas = ['queijos', 'palmito', 'marguerita'];

//  pizzas[5] = 'calabresa'; // adiciona valor a posição específica

//  pizzas.push('strogonoff'); // adiciona valor ao final da array

//  console.log(pizzas.sort());  sort ordena em alfabetica ou numerica

for (let index = 0; index < pizzas.length; index += 1) {  // exibe todos valores da array
    console.log(pizzas[index]) ;
}

console.log(pizzas);


let arrayExemplo = [1, 2 , 3 , 41, 88 , 'colgate', 55 , '62'] ;

//console.log(arrayExemplo);
//
//arrayExemplo.push('adicionaAoFinal'); // push add ao final da array
//console.log(arrayExemplo);
//
//arrayExemplo.unshift('adicionaAoInicio'); // unshift add ao inicio da array
//console.log(arrayExemplo);
//
//arrayExemplo.pop(); // remove ULTIMO valor da array
//console.log(arrayExemplo);
//
//arrayExemplo.shift(); // remove PRIMEIRO valor da array
//console.log(arrayExemplo);

let posicaoNaArray = arrayExemplo.indexOf('62'); // procura pelo valor dentro da array
console.log(posicaoNaArray);

