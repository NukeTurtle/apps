function clearDollar(){
    dollar.value = "";
}
function clearPound(){
    pound.value = "";
}

function poundToDollar(){
    dollar.value = "$" + (pound.value * 1.37).toFixed(2);
}

function dollarToPound(){
    pound.value = "£" + (dollar.value / 1.37).toFixed(2);
}