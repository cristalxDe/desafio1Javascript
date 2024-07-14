precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio 


const suma=()=>{
    let cantidades= document.querySelector(".cantidad");
    let precioTotal= document.querySelector(".valor-total");

    let contador= parseInt(cantidades.innerHTML);
    
    contador +=1;

    cantidades.innerHTML=contador;

    precioTotal.innerHTML=contador*precio;
}

const resta=()=>{
    let cantidades= document.querySelector(".cantidad");
    let precioTotal= document.querySelector(".valor-total");

    let contador= parseInt(cantidades.innerHTML);

    contador -=1;

    cantidades.innerHTML=contador;

    precioTotal.innerHTML=contador*precio;

}