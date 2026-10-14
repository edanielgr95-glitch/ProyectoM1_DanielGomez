const sizeSelect = document.getElementById("size");
const formatSelect = document.getElementById("format");
const generateButton = document.getElementById("generate");
const paletteContainer = document.getElementById("palette");
const toast = document.getElementById("toast");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randomHex() {
    const number= randomNumber(0, 0xffffff);
    return "#"+number.toString(16).padStart(6, '0'). toUpperCase(); 
}   