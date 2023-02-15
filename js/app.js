
function getPin(){
      const pin =generatePin();
      const pinString =pin + '';
      if(pinString.length === 4){
            return pin;
      }
      else{
            return getPin();
      }
}

function generatePin(){
      const random=Math.round(Math.random()*10000);
      return random
}

document.getElementById('generate-pin').addEventListener('click',function(){
      const pin =getPin();
      const displayPinField=document.getElementById('display-pin');
       displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(e){
      const number = e.target.innerText;
      const typedNumberField = document.getElementById('typed-numbers');
      const previousTypedNumber = typedNumberField.value;
      if(isNaN(number)){
          if(number == 'C'){
           typedNumberField.value = '';
          }
          else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            typedNumberField.value = remainingDigit;

          }
      }
      else{
           
            const previousTypedNumber = typedNumberField.value;
            const newTypedNumber = previousTypedNumber + number
            typedNumberField.value = newTypedNumber;
      }
})


document.getElementById('verify-pin').addEventListener('click',function(){

     const displayPinField = document.getElementById('display-pin');
     const currentPin = displayPinField.value;
     const typedNumbersField =document.getElementById('typed-numbers');
     const currentNumberPin=typedNumbersField.value;

     const pinSuccess = document.getElementById('success');
     const pinWrong = document.getElementById('wrong');

     if(currentPin == currentNumberPin){
      pinSuccess.style.display='block'
      pinWrong.style.display='none'
     }
     else{
     
     pinWrong.style.display='block'
      pinSuccess.style.display='none'
     }
})
