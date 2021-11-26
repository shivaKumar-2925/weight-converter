const weight= document.querySelector('#number')
const output = document.querySelector('.output')
const grams = document.querySelector('#gramoutput')
const kilograms = document.querySelector('#kgsoutput')
const ounces = document.querySelector('#ouncesOutput')

weight.addEventListener('input',(e)=>{
 console.log('btn clicked')
 let inputVal=(Number(weight.value))
 let pond = 0.45359237;
 let inKgs = inputVal *pond;
 let inGrams =(inputVal * pond)*1000;
 let InOunced = inputVal * 16;
  if(weight.value){
    output.style.display='block';
    grams.innerHTML =inGrams;
    kilograms.innerHTML=inKgs;
    ounces.innerHTML = InOunced 
  }else{
    output.style.display='none'
  }


  // console.log(inKgs)
  // console.log(inGrams)
  // console.log(InOunced)
})