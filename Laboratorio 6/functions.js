function list(){
	var n = prompt("Escribe un número a continuación", "5");
	if(n > 0){
		//Encabezado
		var mathTable = "";
		mathTable = mathTable + "<tr><th>Número</th>";
		for (var i = 1; i <= n; i++) {
			mathTable = mathTable + "<th>" + i + "<th>";
		}
		mathTable = mathTable + "</tr>";
		//Cuadrados
		mathTable = mathTable + "<tr><th>Cuadrados</th>";
		for (var i = 1; i <= n; i++) {
			mathTable = mathTable + "<td>" + i*i + "<td>";
		}
		mathTable = mathTable + "</tr>";
		//Cubos
		mathTable = mathTable + "<tr><th>Cubos</th>";
		for (var i = 1; i <= n; i++) {
			mathTable = mathTable + "<td>" + i*i*i + "<td>";
		}
		mathTable = mathTable + "</tr>";
		document.getElementById("mathTable").innerHTML = mathTable;
	}
	else{
		document.getElementById("mathTable").innerHTML = "<th>Se requiere de un número positivo</th>";
	}
}

function suma(){ //se me olvidó no usar spanglish... otra vez
	var x = parseInt(Math.random()*100);
	var y = parseInt(Math.random()*100);
	var start = new Date();
	var ans = prompt("¿Cuál es el resultado de la siguiente suma?\n" + x + " + " + y, 0);
	if(ans == x + y){
		var end = new Date();
    	var n = end.getTime() - start.getTime();
		document.getElementById("acierto").innerHTML = "¡Genial! Te ha tomado " + (n/1000) + " segundos calcularlo.";
	}
	else{
		document.getElementById("acierto").innerHTML = "Lo siento, pero esta no es la respuesta.";
		setTimeout(function(){ alert("Soy como un screamer por contestar mal la pregunta. ¡Boo!"); }, 5000);
	}
}

function rc(){
	var row = prompt("¿Cuántas filas?", 5);
	var col = prompt("¿Cuántas columnas?", 5);
	if(row > 0 && col > 0){
		row = parseInt(row);
		col = parseInt(col);
		average(row, col);
		document.getElementById("incorrecto").innerHTML = "dwdaw";
	}
	else document.getElementById("incorrecto").innerHTML = "Se requieren dos números.";
}

function average(r, c){
	var table = "";
	var acum;
	var temp;
	for (var i = 1; i <= r; i++) {
		table = table + "<tr>";
		acum = 0;
		for(var j = 1; j <= c; j++){
			temp = parseInt(Math.random()*100);
			table += "<td>" + temp + "</td>";
			acum += temp;
		}
		table += "<th>" + acum/c + "</th></tr>";
	}
	document.write("<table>" + table + "</table>");
}

var a; //Soy una variable global
function inverso(){
	var a = prompt("Escribe un número a continuación", "00156420");
	if(a <=0 || a >0){ //Comprobar que realmente es un número
		a = a + "";
		a = a.split("").reverse().join("");
		a = parseInt(a) + ""; //Eliminar ceros en el extremo izquierdo, los que antes estaban en el izquierdo se mantienen
		document.write("El resultado de inversión es: ", a);
	}
	else{
		document.write("Nope, necesitabas introducir un número." ,"<br />");
	}
	/*a = a + "";
	a = a.split("").reverse().join("");*/ //Esto funciona para todo string o número con ceros a los extremos
}

function each(){
	var x = prompt("Escribe un número a continuación", 5);
	var list = "";
	var temp = 0;
	var pos = 0;
	var zer = 0;
	var neg = 0;
	if(x >= 0){
		for (var i = 0; i < x; i++) {
			temp = parseInt(Math.random()*20 - 10);
			if(i == 0) list = list + temp;
			else list += ", " + temp;
			if(temp > 0) pos++;
			if(temp < 0) neg++;
			if(temp == 0) zer++;
		}
		document.getElementById("counter").innerHTML = list + "<br/>Positivos: " + pos +"<br/>Ceros: " + zer + "<br/>Negativos: " + neg;
	}
	else{
		document.getElementById("counter").innerHTML = "Debe ingresarse un número no negativo.";
	}
}

function ACM(){	
    var f = prompt("Escribe una oración, puede ser WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB", "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
    var ans = "Respuesta: ";
    var i = 0;
    var j = 0;
    var word =  f.split('');
    var len = word.length;
    while(i < len){
        if(f[i]=='W' && f[i+1]=='U' && f[i+2]=='B'){
            if(j!=0){
                if(!(f[i-3]=='W' && f[i-2]=='U' && f[i-1]=='B')) ans+= " ";
            }
            i+=3;
        }
        else if(!(f[i]=='W' && f[i+1]=='U' && f[i+2]=='B')){
            ans += f[i];
            //printf("%c", f[i]);
            i++;
            j++;
        }
    }
    document.getElementById("problem").innerHTML = ans;
}

//Nuevas funciones para el lab 6
function myFunction() {
    document.getElementById("position").style.position = "absolute";
}

function italic() {
    document.getElementById("myTitle").style.fontStyle = "italic";
}

function hide() {
    document.getElementById("hide").style.visibility = "hidden";
}
var text = "Escribe un número con ceros a la izquierda para que éstos aparezcan a la derecha. Los ceros a la derecha se perderán.";
function changeText(){
	document.getElementById("textChange").innerHTML = text;
}
function normalText(){
	document.getElementById("textChange").innerHTML = "Inverso de un número";
}

//Función del lab 6, arrastrar imágenes
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}