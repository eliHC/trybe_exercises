function checkForPalindrome(str){
        for (let index = 0; index < str.length / 2; index += 1){
            if (str[index] !== str[str.length - 1 - index]){
                return false;
            }else{
                return true;
            };
        };

};

console.log(checkForPalindrome('eye'));




































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

//2>>       function biggestIndex(array){
//2>>           let max = 0;
//2>>       
//2>>           for(let index = 0; index < array.length; index += 1){
//2>>               if(array[max] < array[index]){
//2>>                   max = index;
//2>>               };
//2>>           };
//2>>           return max;
//2>>       };
//2>>       
//2>>       console.log(biggestIndex(arrayX));
//2>>       
