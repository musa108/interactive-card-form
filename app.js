 const cardName = document.querySelector('.name');
 const frontName = document.querySelector('.card-name');
 const cardNumber = document.querySelector('.number');
 const frontNumber = document.querySelector('.card-one-num');
 const cardMonth = document.querySelector('.month');
 const frontMonth = document.querySelector('.card-month');
 const cardYear = document.querySelector('.year');
 const frontYear = document.querySelector('.card-year');
 const cardCvc = document.querySelector('.cvc');
 const backCvc = document.querySelector('.card-two-num');
 const input_name = document.querySelector('.input-name');
 const input_number = document.querySelector('.input-number')
 const input_month= document.querySelector('.input-month');
 const input_year = document.querySelector('.input-year');
 const input_cvc = document.querySelector('.input-cvc');
 const page_one = document.querySelector('.form');
 const btn = document.querySelector('.btn');
 const page_two  = document.querySelector('#confirmation-page');
 const btn_two = document.querySelector('.btn-two');
 cardName.addEventListener("keyup",(e) =>{
    let cardNameValue = cardName.value ;
     let key = e.key;
     let keyLetters = key.match(/^[A-z a-z]*$/);
     if (cardNameValue.length == 0) {
         input_name.innerHTML = "error input name! ";
         
     }
     else if(keyLetters){
       frontName.innerHTML = cardNameValue;
     }
     else{
         cardName.setAttribute("disabled", "");
         input_name.innerHTML = "error input name!";
     }
    });
    cardNumber.addEventListener("keyup",(e) =>{
        let cardNumberValue = cardNumber.value ;
         let key = e.key;
         let keyNumbers= key.match(/^[0-9]*$/);
         if (cardNumberValue.length == 0) {
             input_number.innerHTML = "wrong format,use number only!";
             
         }
         else if(keyNumbers){
          frontNumber.innerHTML = cardNumberValue;
         }
         else if(key === "Backspace"){
            cardNumber.setAttribute("enabled", "");
         }
         else{
             
             input_number.innerHTML = "wrong format,use number only!";
     }
        });
        cardNumber.addEventListener("input",(e) =>{
            e.target.value = e.target.value = e.target.value
            .replace(/[^\dA-Z]/g, "")
            .replace(/(.{10})/g,"$1")
            .trim();
            });
cardMonth.addEventListener("input", (e) =>{
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9]*$/)
    if (value === "") {
        input_month.innerHTML = "can't be blank"
    } else if(valueNumbers){
      frontMonth.innerHTML = value; 
    } else{
        input_month.innerHTML = "can't be blank";
        cardMonth.setAttribute("disabled", "")
    }
});
cardYear.addEventListener("input", (e) =>{
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9]*$/)
    if (value === "") {
        input_year.innerHTML = "can't be blank"
    } else if(valueNumbers){
      frontYear.innerHTML = value; 
    } else{
        input_year.innerHTML = "can't be blank";
        cardYear.setAttribute("disabled", "")
    }
});
cardCvc.addEventListener("input", (e) =>{
    let value = e.target.value;
    let valueNumbers = value.match(/^[0-9]*$/)
    if (value === "") {
        input_cvc.innerHTML = "can't be blank"
    } else if(valueNumbers){
      backCvc.innerHTML = value; 
    } else{
        input_cvc.innerHTML = "can't be blank";
        cardCvc.setAttribute("disabled", "")
    }
});
btn.addEventListener("click", () =>{
    if (cardName.value.length <= 0) {
       input_name.innerHTML ="error input name!" ;
    } else if(cardNumber.value.length <= 0) {
        input_number.innerHTML = "wrong format,number only";
    }
    else if(cardMonth.value.length <= 0){
        input_month.innerHTML = "can't be blank";
    }
    else if(cardYear.value.length <= 0){
        input_year.innerHTML = "can't be blank";
    }
    else if(cardCvc.value.length <= 0){
        input_cvc.innerHTML = "can't be blank";
    }
    else{
        page_two.style.display = "block";
        page_one.style.display = "none";
    }

});
btn_two.addEventListener('click', () =>{
page_two.style.display = "none"
page_one.style.display = "block"
})