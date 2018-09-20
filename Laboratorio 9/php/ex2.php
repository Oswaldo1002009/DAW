<?php
header('Content-Type: text/html; charset=utf-8');
$nums1=array(4,12,3,1,500,8,6,7);
$nums2=array(2,4,6,8,10,12,14,16,18);

function mediana($arr){
	$c = count($arr);//¿Cuántos hay?

	echo "La mediana de los números: ";
	foreach ($arr as $value) {
		echo "$value ";
	}
	sort($arr);
	if ($c % 2 == 1){ //Lista impar
		$mediana = $arr[($c -1) / 2];
		echo "<br>$mediana<br><br>";
	}else{
		$mediana = ( $arr[($c / 2) -1] + $arr[$c / 2]) / 2;
		echo "<br>$mediana<br><br>";
	}
}

mediana($nums1);
mediana($nums2);
?>