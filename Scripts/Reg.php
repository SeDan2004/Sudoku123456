<?php 

function checkLogin ($login, $pass) {

$name = 'Database/' . $login . '.txt';

if (file_exists($name) == false) {

$f = fopen($name, 'w');
$password = fwrite($f, $pass);
fclose($f);

} else {

var_dump('Пользователь '. $login . ' уже существует');

};

};

?>