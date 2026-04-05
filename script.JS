
const Abejas = document.getElementById("Abejas");

document.addEventListener("mousemove", function(e) {
    Abejas.style.position = "absolute";
    Abejas.style.left = e.pageX + "px";
    Abejas.style.top = e.pageY + "px";
});
console.log("funciona");

window.onload = function( ) { 
    const Abejas = document.getElementById("Abejas");
    const sonido = document.getElementById("sonidoAbeja");

    document.addEventListener("mousemove", function(e){
        Abejas.style.left = e.pageX + "px";
        Abejas.style.top = e.pageY + "px";
        
        sonido.play();
    });
    }
  
