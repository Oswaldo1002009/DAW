<?php
header('Content-Type: text/html; charset=utf-8');
function acm($f){
    $ans = "Respuesta: ";
    $i = 0;
    $j = 0;
    //var word =  f.split('');
    $len = strlen($f);
    while($i < $len){
        if($f[$i]=='W' && $f[$i+1]=='U' && $f[$i+2]=='B'){
            if($j!=0){
                if(!($f[$i-3]=='W' && $f[$i-2]=='U' && $f[$i-1]=='B')) $ans = $ans . " ";
            }
            $i+=3;
        }
        else if(!($f[$i]=='W' && $f[$i+1]=='U' && $f[$i+2]=='B')){
            $ans = $ans . $f[$i];
            //printf("%c", f[i]);
            $i++;
            $j++;
        }
    }
    echo "Caso: ". $f . "<br>" . $ans . "<br><br>";
}

echo "Consulta el problema <a href=" . "https://codeforces.com/problemset/problem/208/A" . "> aquí.</a><br><br>";
acm("WUBWUBWUBSR");
acm("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
acm("CWUBBWUBWUBWUBEWUBWUBWUBQWUBWUBWUB");
acm("WUBWUBWUBFVWUBWUBWUBBPSWUBWUBWUBRXNETCJWUBWUBWUBJDMBHWUBWUBWUBBWUBWUBVWUBWUBB");


?>