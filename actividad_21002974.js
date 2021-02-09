var mes=10;
mes = parseInt(prompt("Ingrese mes a consultar: "));

if(mes==1 || mes == 2 || mes == 12){
  alert("Es Invierno");
} else if(mes<=5 && mes>=3){
  alert("Es Primavera");
} else if(mes<=8 && mes>=6){
  alert("Es Verano");
} else if(mes<=11 && mes>=9){
  alert("Es Otoño");
} else{
  alert("El mes ingresado no es valido");
}

alert("Número de carnet: 21002974 \nYolanda Esteban Chilel");
