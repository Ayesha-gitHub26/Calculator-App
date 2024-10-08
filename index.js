// CALCULATOR PROGRAM
alert("Welcome to my calculator app!");
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
   try{
    display.value = eval(display.value);
   }
   catch(error){
    display.value = "Error";
   }
}


// Saved values of addevenntlistemer



// const mybtn =document.getElementById ("myBox");


// mybtn.addEventListener("click", event =>{event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Ouch😒";})

// myBox.addEventListener("mouseover", event=> {event.target.backgroundColor= "yellow";
//     event.target.textContent="Don;t do it!😖";})

//     myBox.addEventListener("mouseout", event=>{event.target.backgroundColor="rgb(250, 180, 74)";
//     event.target.textContent=" Click Me!🙃";})
