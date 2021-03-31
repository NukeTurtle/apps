const colorList = ["#AADCFF", "#FFD677", "#E8E8E8", "#F2FBA4", "#FFAAF9"];

function colorChanger() {
    const i = Math.floor(Math.random() * 5);
    const currentColor = colorList[i];
    document.querySelector("#container").style.backgroundColor = currentColor;
    return currentColor;
}

function colorName() {
    const currentName = colorChanger();
    document.querySelector("#color").innerHTML = currentName;
    return currentName;
}