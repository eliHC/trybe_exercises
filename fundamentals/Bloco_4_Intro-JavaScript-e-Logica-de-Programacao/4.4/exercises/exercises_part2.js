//1>>       function checkForPalindrome(str){
//1>>               for (let index = 0; index < str.length / 2; index += 1){
//1>>                   if (str[index] !== str[str.length - 1 - index]){
//1>>                       return false;
//1>>                   }else{
//1>>                       return true;
//1>>                   };
//1>>               };
//1>>
//1>>       };
//1>>
//1>>       console.log(checkForPalindrome('eye'));
//1>>

//2>>       function biggestNum(array){
//2>>           let currentNum = 0;
//2>>           for(let index = 0;index < array.length; index += 1){
//2>>
//2>>                   if (array[currentNum] < arrayX[index]){
//2>>                       currentNum = index;
//2>>                   };
//2>>           };
//2>>           return currentNum;
//2>>       };
//2>>
//2>>       let arrayX = [11, 88, 102, 66, 5, 200, 7, 8, 91];
//2>>
//2>>       console.log(biggestNum(arrayX));
//2>>

//2.alt>>       function biggestIndex(array){
//2.alt>>           let max = 0;
//2.alt>>
//2.alt>>           for(let index = 0; index < array.length; index += 1){
//2.alt>>               if(array[max] < array[index]){
//2.alt>>                   max = index;
//2.alt>>               };
//2.alt>>           };
//2.alt>>           return max;
//2.alt>>       };
//2.alt>>
//2.alt>>       console.log(biggestIndex(arrayX));
//2.alt>>

//3>>       let arrayX = [11, 88, 102, 66, 90, 200, 7, 8, 91];
//3>>
//3>>
//3>>       function smallestIndex(array){
//3>>           let min = 0
//3>>           for (let index = 0; index < array.length; index += 1){
//3>>               if (array[index] < array[min]){
//3>>                   min = index;
//3>>               }
//3>>           }
//3>>           return min;
//3>>       }
//3>>
//3>>       console.log(smallestIndex(arrayX))
//3>>

//4>>       let arrayX = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//4>>
//4>>       function biggestName (array){
//4>>           let currentBiggest = '';
//4>>           for (index = 0; index < array.length; index += 1){
//4>>               if (currentBiggest.length < array[index].length){
//4>>                   currentBiggest = array[index];
//4>>               }
//4>>           }
//4>>           return currentBiggest;
//4>>       }
//4>>
//4>>       console.log(biggestName(arrayX));
//4>>

let arrayX = [2, 3, 2, 5, 8, 2, 3];

function moreRecurrent(array) {
  let current = [];
  let howMany = [];
  for (let i = 0; i < array.length; i += 1) {
      current = array[index];
      for(let i2 = 0; i2 < array.length; i2 += 1){

      }
      