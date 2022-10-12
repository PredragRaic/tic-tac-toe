const x = document.querySelector('.x');
const o = document.querySelector('.o');
let clickCounter = 0;
let arrX = [];
let arrO = [];
let compareArrX = 0;
let compareArrO = 0;

const hArr1 = ['1', '2', '3'];
const hArr2 = ['4', '5', '6'];
const hArr3 = ['7', '8', '9'];
const vArr1 = ['1', '4', '7'];
const vArr2 = ['2', '5', '8'];
const vArr3 = ['3', '6', '6'];
const xArr1 = ['1', '5', '9'];
const xArr2 = ['3', '5', '7'];

const box = document.getElementById('grid-holder');

const gridField1 = document.getElementById('1');
const gridField2 = document.getElementById('2');
const gridField3 = document.getElementById('3');
const gridField4 = document.getElementById('4');
const gridField5 = document.getElementById('5');
const gridField6 = document.getElementById('6');
const gridField7 = document.getElementById('7');
const gridField8 = document.getElementById('8');
const gridField9 = document.getElementById('9');

document.querySelectorAll('.grid-field').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    if(item.id === event.target.id && clickCounter % 2 !== 0 && clickCounter < 9){
      clickCounter++
      document.getElementById(event.target.id).querySelector('.o').style.display = 'block'; 
      arrO.push(item.id);
    }else if (clickCounter < 9){
      clickCounter++
      document.getElementById(event.target.id).querySelector('.x').style.display = 'block'; 
      arrX.push(item.id);
    };


   
    if(event.target.id === '1'){
      gridField1.replaceWith(gridField1.cloneNode(true));
    }else if(event.target.id === '2'){
      gridField2.replaceWith(gridField2.cloneNode(true));
    }else if(event.target.id === '3'){
      gridField3.replaceWith(gridField3.cloneNode(true));
    }else if(event.target.id === '4'){
      gridField4.replaceWith(gridField4.cloneNode(true));
    }else if(event.target.id === '5'){
      gridField5.replaceWith(gridField5.cloneNode(true));
    }else if(event.target.id === '6'){
      gridField6.replaceWith(gridField6.cloneNode(true));
    }else if(event.target.id === '7'){
      gridField7.replaceWith(gridField7.cloneNode(true));
    }else if(event.target.id === '8'){
      gridField8.replaceWith(gridField8.cloneNode(true));
    }else if(event.target.id === '9'){
      gridField9.replaceWith(gridField9.cloneNode(true));
    }


    console.log(item.id)
    console.log(event.target)
    console.log(clickCounter);
    console.log(arrX);
    console.log(arrO);


    
    if(hArr1.every(elem => arrX.includes(elem)) === true || hArr1.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#h-arr-1').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(hArr2.every(elem => arrX.includes(elem)) === true || hArr2.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#h-arr-2').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(hArr3.every(elem => arrX.includes(elem)) === true || hArr3.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#h-arr-3').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(vArr1.every(elem => arrX.includes(elem)) === true || vArr1.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#v-arr-1').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(vArr2.every(elem => arrX.includes(elem)) === true || vArr2.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#v-arr-2').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(vArr3.every(elem => arrX.includes(elem)) === true || vArr3.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#v-arr-3').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(xArr1.every(elem => arrX.includes(elem)) === true || xArr1.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#x-arr-1').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    }else if(xArr2.every(elem => arrX.includes(elem)) === true || xArr2.every(elem => arrO.includes(elem)) === true){
      document.querySelector('#x-arr-2').style.display = 'block';
      box.replaceWith(box.cloneNode(true));
    };

    })
  })
