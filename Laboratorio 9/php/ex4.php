<?php
header('Content-Type: text/html; charset=utf-8');
function table_ex($n){
	echo "Caso: " . $n . "<br>";
	if($n > 0){
		$mathTable = "<table>";

		//Encabezado
		$mathTable = $mathTable . "<tr><th>Número</th>";
		for ($i = 1; $i <= $n; $i++) {
			$mathTable = $mathTable . "<th>" . $i . "<th>";
		}
		$mathTable = $mathTable . "</tr>";
		//Cuadrados
		$mathTable = $mathTable . "<tr><th>Cuadrados</th>";
		for ($i = 1; $i <= $n; $i++) {
			$mathTable = $mathTable . "<td>" . $i*$i . "<td>";
		}
		$mathTable = $mathTable . "</tr>";
		//Cubos
		$mathTable = $mathTable . "<tr><th>Cubos</th>";
		for ($i = 1; $i <= $n; $i++) {
			$mathTable = $mathTable . "<td>" . $i*$i*$i . "<td>";
		}
		$mathTable = $mathTable . "</tr>";

		$mathTable = $mathTable . "</table>";
		echo $mathTable;
		echo "<br><br>";
	}else{
		echo "Se requiere de un número positivo<br><br>";
	}
}

table_ex(3);
table_ex(-1);
table_ex(12);
?>