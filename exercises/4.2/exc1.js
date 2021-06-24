let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exc1 --| for(let index = 0; index < numbers.length; index += 1) {
//exc1 --|     console.log(numbers[index]);
//exc1 --| }
//exc1 --| 

//exc2 --| let soma = 0 
//exc2 --| 
//exc2 --| for(let index = 0; index < numbers.length; index += 1) {
//exc2 --|     soma = soma + numbers[index];
//exc2 --|     console.log(soma);
//exc2 --| }
//exc2 --| 

let media = 0

for(let index = 0; index < numbers.length; index += 1) {
    media = media + numbers[index];
}
media = media / numbers.length;
console.log(media);
