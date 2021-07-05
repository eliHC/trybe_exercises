let header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

let emergency = document.getElementsByClassName('emergency-tasks')['0'];
emergency.style.backgroundColor = 'red';

let emergency__h3 = document.querySelectorAll('.emergency-tasks h3');
for(let index = 0; index < emergency__h3.length; index += 1){
emergency__h3[index].style.backgroundColor = 'purple';
}


