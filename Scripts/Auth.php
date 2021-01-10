<?php

function checkPassword($login , $pass){

$name = "Database/" . $login . ".txt" ;
$f = fopen($name, 'r');
$password = fread($f , filesize( $name ) );
fclose($f);

if ( $password == $pass){
return true;
}
return false;
}


?>