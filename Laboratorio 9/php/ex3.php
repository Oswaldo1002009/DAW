<?php
header('Content-Type: text/html; charset=utf-8');
$nums1=array(4,12,3,1,500,8,6,7);
$nums2=array(2,4,6,8,10,12,14,16,18);

function average($n){
	$average = array_sum($n)/count($n);
	echo "El promedio de los números: ";
	foreach ($n as $value) {
		echo "$value, ";
	}
	echo "es $average.<br><br>";
}

function mediana($arr){
	$c = count($arr);//¿Cuántos hay?

	echo "La mediana de los números: ";
	foreach ($arr as $value) {
		echo "$value ";
	}
	sort($arr);
	if ($c % 2 == 1){ //Lista impar
		$mediana = $arr[($c -1) / 2];
		echo "es $mediana<br><br>";
	}else{
		$mediana = ( $arr[($c / 2) -1] + $arr[$c / 2]) / 2;
		echo "es $mediana<br><br>";
	}
}

function orderAsc($arr){
	echo "Orden ascendente: ";
	sort($arr);
	foreach ($arr as $value) {
		echo "$value ";
	}
	echo "<br><br>";
}

function orderDes($arr){
	echo "Orden descendente: ";
	rsort($arr);
	foreach ($arr as $value) {
		echo "$value ";
	}
	echo "<br><br>";
}

function list_ex($arr){
	echo"<p>Ejemplo</p><ol><li>";
	echo average($arr) . "</li><li>";
	echo mediana($arr) . "</li><li>";
	echo orderAsc($arr) . "</li><li>";
	echo orderDes($arr);
	echo "</li></ol><br>";
}

list_ex($nums1);
list_ex($nums2);
?>