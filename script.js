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
function hslToHex(h, s, l) {
    s=s/100;
    l=l/100;
    const a=s*Math.min(l,1-l);
function channel(n){
    const k=(n+h/30)%12;
    const value=l-a*Math.max(Math.min(k-3,9-k,1),-1);
    return Math.round(255*value).toString(16).padStart(2, '0');
}
return("#"+channel(0)+channel(8)+channel(4)).toUpperCase();
}
function createColor(format) {
    if (format==="hsl") {
        const h=randomNumber(0,359);
        const s=randomNumber(40,90);
        const l=randomNumber(35,70);
        return{ 
            hex:hslToHex(h,s,l),
            text:"hsl("+h+", "+s+"%, "+l+"%)"
        };
    }
    const hex=randomHex();
    return{ hex:hex, text:hex };
    }
    function generatePalette() {
        const amount=Number(sizeSelect.value);
        const format=formatSelect.value;
        const colors=[];
        for (let i=0; i<amount; i++) {
            colors.push(createColor(format));
        }
        return colors;
    }

