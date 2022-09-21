const dos=document.getElementById("dos")
const slaider=document.getElementById("slaider")
const salideres=document.getElementById("salideres")

const retirar=document.getElementById("retirar")
slaider.addEventListener('click',sla)

retirar.addEventListener('click',retirara)


function sla(){
  dos.style.animation=" cabiar 7s  linear";
  setTimeout(() => {
  
    salideres.classList.add("active")
  }, 7000);

}



function retirara(){

  salideres.remove("active")
}


