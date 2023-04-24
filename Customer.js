let pph = document.getElementById("eq-pph-rp");
let opph = document.getElementById("out-pph");
opph.textContent=pph.value;
pph.oninput=()=>{
    opph.textContent=pph.value;
}
let ppd = document.getElementById("eq-ppd-rp");
let oppd = document.getElementById("out-ppd");
oppd.textContent=ppd.value;
ppd.oninput=()=>{
    oppd.textContent=ppd.value;
}
let ppm = document.getElementById("eq-ppm-rp");
let oppm = document.getElementById("out-ppm");
oppm.textContent=ppm.value;
ppm.oninput=()=>{
    oppm.textContent=ppm.value;
}
let rp7 = document.querySelectorAll(".right-part7");
for(let rp_7 of rp7){
    rp_7.addEventListener("click", function(){
        let rp_71=rp_7.nextElementSibling;
        if(rp_71.style.display=="none"){
            rp_71.style.display="contents";
        }
        else{
            rp_71.style.display="none";
        }
    });
}