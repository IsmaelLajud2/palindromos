const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultdiv =  document.getElementById("result")
 

checkButton.addEventListener("click" , function() {
    const inputValue = userInput.value

    if (inputValue === "") {
        alert("Por Favor ingresa un valor");
        return;
    } 
    resultdiv.innerHTML = "" 
    palindromo()
}) ;  


function palindromo() {
    const text = userInput.value
    const smalltext =text.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
     let resultmsg=`<strong>${userInput.value}</strong> ${smalltext === [...smalltext ].reverse().join("") ? "Es un palindromo :)" :"No es un palindromo :/"}`

const p = document.createElement("p");
p.className="user-result";
p.innerHTML=resultmsg;
resultdiv.appendChild(p);


    
    
    } 


