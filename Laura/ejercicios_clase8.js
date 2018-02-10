// ejercicio 1

var hoy = new Date (); 
console.log ("hoy es día", hoy.toLocaleString());
hoy.setDate(hoy.getDate() + 30);
console.info("La fecha será " + hoy.toLocaleString());

// ejercicio 2

var inicioCurso = new Date (2018, 0, 24);
var hoy = new Date ();

console.log("el primer día fue", inicioCurso.toLocaleString());
console.log("y hoy es", hoy.toLocaleString());

var diferencia = hoy.getTime() - inicioCurso.getTime();
console.log("y la diferencia en milisegundos es ", diferencia.toLocaleString());


// ejercicio 3

var finalCurso = new Date (Date.UTC (2018, 1, 28));
var hoy = new Date ();
var diferencia = finalCurso.getTime() - hoy.getTime();

console.log("hoy es", hoy.toLocaleString());
console.log("el curso acaba el", finalCurso.toLocaleString());
console.log("es decir, dentro de "+ diferencia +" milisegundos");

// ejercicio 4

var hoy = new Date (); 

hoy.setFullYear(hoy.getFullYear() + 1);
console.log("dentro de un año será", hoy.toLocaleString());

hoy.setHours(hoy.getHours() + 10);
console.log("dentro de un año y 10 horas será", hoy.toLocaleString());

// ejercicio 5

var hoy = new Date(); 
console.log ("hoy en formato koreano es",  hoy.toLocaleString('ko-KN', {
  timeZone: 'UTC',
  hour12: true,
});

// ejercicio 1 - letra

function contar() {
  var texto = "Lorem ipsum dolor tal".toLowerCase();
  
  var veces = 0; 
  
  for (i = 0; i <= texto.lenght; i++) {
    if(texto.indexOf("l") > 0 ){
      veces ++;
    }
  }
  
  console.log(veces);  
}

contar();




