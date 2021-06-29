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


let arrayX = [11, 88, 102, 66, 90, 200, 7, 8, 91];


function smallestIndex(array){
    let min = 0
    for (let index = 0; index < array.length; index += 1){
        if (array[index] < array[min]){
            min = index;
        }
    }
    return min;
}

console.log(smallestIndex(arrayX))
