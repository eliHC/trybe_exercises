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


//5----->   let maior = 0;
//5----->   
//5----->   for(let index = 0; index < numbers.length; index += 1) {
//5----->       if (maior < numbers[index]){
//5----->           maior = numbers[index];
//5----->       }
//5----->   }
//5----->   console.log(maior)
   



//6----->   for(let index = 0; index < numbers.length; index += 1) {
//6----->       if(numbers[index] % 2 != 0){
//6----->           console.log(numbers[index]);
//6----->       }
//6----->   }


//7------>   let menor = numbers[0];
//7------>   
//7------>   for(let index = 0; index < numbers.length; index += 1) {
//7------>       if (numbers[index] < menor){
//7------>           menor = numbers[index];
//7------>       }
//7------>   }
//7------>   console.log(menor);

//8------>   let lista = [];
//8------>   
//8------>   for(let index = 0; index <= 25; index +=1 ) {
//8------>       lista.push(index);
//8------>   }
//8------>   console.log(lista);
   
//------->  let lista = [];
//------->  
//------->  for(let index = 0; index <= 25; index +=1 ) {
//------->      lista.push(index);
//------->  }
//------->  
//------->  for(let index = 0; index < lista.length; index +=1 ){
//------->      let division = lista[index] / 2;
//------->      console.log(division);
//------->  }
//------->  
