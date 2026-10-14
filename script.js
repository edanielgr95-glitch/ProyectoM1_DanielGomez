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
function showPalette(colors) {
    paletteContainer.innerHTML="";
    for (const color of colors) {
        const card=document.createElement("article");
        card.className="card";
        
        const swatch=document.createElement("div");
        swatch.className="swatch";
        swatch.style.backgroundColor=color.hex;
    
    const code=document.createElement("p");
    code.className="code";
    code.textContent=color.hex;
    card.appendChild(swatch);
    card.appendChild(code);
    if (color.text!==color.hex) {
        const original=document.createElement("p");
        original.className="code";
        original.textContent=color.text;
        card.appendChild(original);
    }
    paletteContainer.appendChild(card);
}
}
function showToast(message) {
    toast.textContent=message;
    toast.classList.add("visible");
    setTimeout(function() {
        toast.classList.remove("visible");
    }, 2000);
}
generateButton.addEventListener("click", function() {
    const colors=generatePalette();
    showPalette(colors);
    showToast("Paleta de "+colors.length+" colores generada! ");
});
showPalette(generatePalette());
