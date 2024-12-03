alert("Hello, world!");

function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    let currentSize = window.getComputedStyle(textArea).fontSize;
    let newSize = parseFloat(currentSize) * 1.5 + "px";
    textArea.style.fontSize = newSize;
}

function toggleStyle() {
    const textArea = document.getElementById("textArea");
    const isFancy = document.getElementById("fancy").checked;

    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function addMoo() {
    const textArea = document.getElementById("textArea");
    let sentences = textArea.value.split(".");
    sentences = sentences.map(sentence => sentence.trim().toUpperCase() + "-Moo");
    textArea.value = sentences.join(". ");
}

// Event listeners
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancy").onchange = toggleStyle;
document.getElementById("boring").onchange = toggleStyle;
document.getElementById("mooButton").onclick = addMoo;