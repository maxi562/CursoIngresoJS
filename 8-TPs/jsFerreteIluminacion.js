/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparas = parseInt(document.getElementById("Cantidad").value);
     var precio = 35;
     var marca = document.getElementById("Marca").value;
     var total;
     var IIBB;

     if (lamparas >= 6 && marca != 0) {
         total = (lamparas * precio) * 0.5;
     }
     if (lamparas == 5){ 
         switch (marca){ 
         case "ArgentinaLuz":
             total = (lamparas * precio) * 0.60;
             break;
             case "FelipeLamparas":
                 total = (lamparas * precio) * 0.60;
                 break;
                 default: total = (lamparas * precio) * 0.70;
                 break;}
     }
     if (lamparas == 4){ 
        switch (marca){ 
        case "ArgentinaLuz":
            total = (lamparas * precio) * 0.75;
            break;
            case "FelipeLamparas":
                total = (lamparas * precio) * 0.75;
                break;
                default: total = (lamparas * precio) * 0.8;
                break;} }
    if (lamparas == 3){ 
     switch (marca){ 
        case "ArgentinaLuz":
         total = (lamparas * precio) * 0.85;
             break;
            case "FelipeLamparas":
             total = (lamparas * precio) * 0.90;
             break;
             default: total = (lamparas * precio) * 0.95;
             break;} }
    if (lamparas <3 && marca !=0){
        total = lamparas * precio;
    }                    
    
     if(total <= 120) {
        document.getElementById("precioDescuento").value=total.toFixed(2);
     }
     else if (total >120){ 
        IIBB = total * 0.1;
        total = total * 1.1;
        
        alert ("El importe de IIBB pagado es : " + IIBB.toFixed(2));
        document.getElementById("precioDescuento").value=total.toFixed(2);}

     
}
