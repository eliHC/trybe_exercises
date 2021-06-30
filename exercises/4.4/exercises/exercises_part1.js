let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim';

//1>>       
//1>>         console.log('Bem vinda, ' + info.personagem)
//1>>       
//1>>         


//2>>       info.recorrente = 'sim';
//2>>       
//2>>       console.log(info);
//2>>       


//3>>       for(let key in info){
//3>>           console.log(key);
//3>>       }
//3>>       


//4>>       for (let key in info) {
//4>>           console.log(info[key]);
//4>>       }
//4>>       


//5>>       let info2 = {
//5>>           personagem: 'Tio Patinhas',
//5>>           origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//5>>           nota: 'O último MacPatinhas',
//5>>           recorrente: 'sim'
//5>>       }
//5>>       
//5>>       for (let key in info, info2) {
//5>>           console.log(info[key] + ' e ' + info2[key]);
//5>>           if (info.recorrente == info2.recorrente){
//5>>               console.log('Ambos recorrentes');
//5>>           }
//5>>       }
//5>>       

