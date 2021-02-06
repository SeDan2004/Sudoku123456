<?php

function checkPassword($login , $pass){

$name = "Database/Username/" . $login . '/' . $login . ".txt";
$f = fopen($name, 'r');
$data = json_decode(fread($f , filesize( $name ) ));
fclose($f);



if ($data -> password ==  $pass) {

return [true, $data -> role];

}

return [false, $data];

};


?>