javascrip.js
var total = 0;
let table = new DataTable('#table');
function datos(){
var montoinicial = document.getElementById("monto").value;
var periodo = document.getElementById("periodo").value;
var plazo = document.getElementById("plazo").value;
var fecha_inicio = document.getElementById("fecha").value;
var tipo_credito = document.getElementById("tipo_ccredito").value;
//var Capital = document.getElementById("monto").value;
var por_interes = 0;
var intereses = montoinicial * (por_interes / plazo);
var monto_pago = parseInt(montoinicial) + parseInt(intereses);
//var table=document.getElementById("table").value

if (periodo == 1) {
  this.plazo = plazo;
} else if (periodo == 2) {
  this.plazo = plazo / 3;
} else if (periodo == 3) {
  this.plazo = plazo / 6;
} else if (periodo == 4) {
  this.plazo = plazo / 12;
} else if (periodo == 5) {
  this.plazo = 1;
} else {
  alert("No seleccionaste un campo");
}

if (
    tipo_credito == "1" ||
    tipo_credito == "2" ||
    tipo_credito == "3" ||
    tipo_credito == "8" ||
    tipo_credito == "11"
) {
  por_interes = 0.08;
} else if (tipo_credito == "6" || tipo_credito == "10") {
  por_interes = 0.04;
} else if (tipo_credito == "4" || tipo_credito == "5") {
  por_interes = 0.05;
} else {
  por_interes = 0.0;
}



document.getElementById("Total").innerHTML = Math.round(montoinicial) - parseFloat(monto_pago * por_interes);
var total = document.getElementById("Total").textContent;
console.log(montoinicial - total);


document.getElementById("Cuota").innerHTML = plazo;
document.getElementById("Sdo.Capital").innerHTML = montoinicial;
document.getElementById("Capital").innerHTML = Math.round(montoinicial / plazo);
document.getElementById("interes").innerHTML = Math.round(montoinicial) * (por_interes / plazo);
document.getElementById("Monto_pago").innerHTML = Math.round((montoinicial * por_interes) /plazo /(1 - Math.pow(1 + por_interes / plazo, -plazo)));
document.getElementById("Fecha_pago").innerHTML = fecha_inicio;
}
console.log(monto_pago);
console.log(periodo);
console.log(plazo);
console.log(montoinicial);
console.log(intereses.toFixed(2));




tengo un formulario que es un simulador de CredentialsContainer, te dare sus inputs id, junto con su tipo y si es un select te dare sus valores
fecha_desembolso:date
monto_credito:number
plazo_pago:select(12:(un año),24(dos años),36(tres años),48(4 años)) 
periodo_pago:select(1(semestral),2(Trimestral),3(Semestral),4(Anual),5(Unico, al vencimineto))
tipo_credito:select(1,2,3,4,5,6,7,8,9,10,11)

var montoinicial = document.getElementById("monto").value;
var periodo = document.getElementById("periodo").value;
var plazo = document.getElementById("plazo").value;
var fecha_inicio = document.getElementById("fecha").value;
var tipo_credito = document.getElementById("tipo_credito").value;

luego te dare el js que tengo ya hecho, lo que quiero hacer es que me calcule y lo muestre en mi datatables 
Nº Cuota, saldo capital, capital, intereses, monto, fecha total, dime si entendiste para enviarte mi js