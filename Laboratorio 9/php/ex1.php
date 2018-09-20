<?php
header('Content-Type: text/html; charset=utf-8');
$nums1=array(1,2,3,4,5,6);
$nums2=array(2,4,6,8,10, 12, 14, 16, 18, 20);

function average($n){
	$average = array_sum($n)/count($n);
	echo "El promedio de los números: ";
	foreach ($n as $value) {
		echo "$value, ";
	}
	echo "es $average.<br><br>";
}

average($nums1);
average($nums2);
?>