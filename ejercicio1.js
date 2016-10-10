pseudocódigo

declarar variables:
    piedra
    papel
    tijera
asignar variables
    piedra=1
    papel=2
    tijera=3    

inicio

 escribir "jugador 1 escoge piedra, papel o tijera"  //pregunta al usuario que quiere escoger y el usuario anota
 piedra
 leer piedra
 escribir "jugador 2 escoge piedra, papel o tijera"
 papel
 si (piedra es igual a piedra) entonces es empate  //Empezando condiciones
    sino si (piedra<2)entonces papel gana
        sino si (piedra<3)entonces piedra gana
            sino escribe "escoge otra opcion"
 fin si
 si (papel es igual a papel) entonces es empate
 	sino si (papel<3)entonces tijera gana
        sino si(papel<1)entonces papel gana
            sino escribe"elige otra opción"
 fin si   
 si (tijera es igual a tijera)entonces es empate
    sino si (tijera>1)entonces piedra gana
        sino si (tijera>2)entonces tijera gana
            sino escribe"escoge otra opción"
 fin si     



var piedra = 1;
var papel = 2;
var tijera = 3;
var jugador1 = prompt("jugador1 \nescoge: \n piedra=1 \n papel=2 \n tijera=3", "0");
var jugador2 =  prompt("jugador2 \nescoge: \n piedra=1 \n papel=2 \n tijera=3", "0");

if(1<2){
	alert("papel gana");
}else if (1<3){
	alert("piedra gana");
}else if(1==1){
	alert("es empate");
}else{
	alert("escoge otra opción");
}

// if(2<3){
// 	alert("tijera gana");
// }else if(2==2){
// 	alert("es empate");
// }else{
// 	alert("escoge otra opción");
// }

// if(3>1){
// 	alert("tijera pierde");
// }else if(3==3){
// 	alert("es empate");
// }else{
// 	alert("escoge otra opción")
// }
