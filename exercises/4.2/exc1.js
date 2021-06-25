let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1----->   for(let index = 0; index < numbers.length; index += 1) {
//1----->       console.log(numbers[index]);
//1----->   }
//1----->   

//2----->   let soma = 0 
//2----->   
//2----->   for(let index = 0; index < numbers.length; index += 1) {
//2----->       soma = soma + numbers[index];
//2----->       console.log(soma);
//2----->   }
//2----->   

//3----->   let media = 0
//3----->   
//3----->   for(let index = 0; index < numbers.length; index += 1) {
//3----->       media = media + numbers[index];
//3----->   }
//3----->   media = media / numbers.length;
//3----->   console.log(media);
//3----->   

//4----->    let media = 0
//4----->    
//4----->    for(let index = 0; index < numbers.length; index += 1) {
//4----->        media = media + numbers[index];
//4----->    }
//4----->    media = media / numbers.length;
//4----->
//4----->    if(media > 20) {
//4----->        console.log('valor maior que 20');
//4----->    }else{
//4----->        console.log('valor menor ou igual a 20');
//4----->    }
//4----->


   let maior = 0;
   
   for(let index = 0; index < numbers.length; index += 1) {
       if (maior < numbers[index]){
           maior = + numbers[index];
       }
   }
   console.log(maior)
   






//for(let index = 0; index < numbers.length; index += 1) {
//    if(numbers[index] % 2 != 0){
//        console.log(numbers[index]);
//    }
//}
