// ejercicio 1


function monedaAire (){    
	var caras = Math.round(Math.random()) ;	

	if (caras === 1){
		console.log ("es cara"); 
	} else {
		console.log ("no es cara"); 
	}
}

monedaAire();


// ejercicio 2

function dado() {    

	var contador = 0;
	for (i=0; i < 100; i++){	
		var carasDadoUno = parseInt(Math.random() * 6) + 1;	
		var carasDadoDos = parseInt(Math.random() * 6) + 1;
		if (carasDadoUno + carasDadoDos === 10){
			contador++;
		} 
	}

	console.log("ha sumado 10 "+ contador +" veces");
}

dado();


// ejercicio 3

var fecha = new Date();

function pedirMes(){
	var mes = Number(prompt("dime el mes"));
	if (mes <= 12 && mes > 0){
		return mes-1;	
	} else {
		console.log("mes incorrecto");
	}
	 
}


fecha.setMonth(pedirMes()); // 
//fecha.setDate(Number(prompt("dime el día"))); // 
//fecha.setFullYear(Number(prompt("dime el año"))); // 
console.info("La fecha es " + fecha);

var newDate = new Date(newMonth, newDate, newYear);
console.info("La fecha es " + newDate);
    

console.log (date)


