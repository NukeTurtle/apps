var currentValue = document.querySelector("h1").innerHTML = 0;

function increaseNumber() {    
    Number(currentValue++);
    if (currentValue > 0) {document.querySelector("h1").style.color = "green";}
    if (currentValue == 0) {document.querySelector("h1").style.color = "#000";};
    document.querySelector("h1").innerHTML = currentValue;
    return currentValue;
}

function decreaseNumber() {    
    Number(currentValue--);
    if (currentValue < 0) {document.querySelector("h1").style.color = "red";}
    if (currentValue == 0) {document.querySelector("h1").style.color = "#000";}
    document.querySelector("h1").innerHTML = currentValue;
    return currentValue;
}

function resetNumber() {
    currentValue = 0;
    document.querySelector("h1").style.color = "#000";
    document.querySelector("h1").innerHTML = 0;
    return currentValue;
}