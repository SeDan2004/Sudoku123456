<?php 

function checkLogin ($login, $pass) {

$CreateUserFile = 'Database/Username/' . $login;
mkdir($CreateUserFile);
$SudokuGame = 'Database/Username/' . $login . '/' . 'User_Game';
mkdir($SudokuGame);


$name = 'Database/Username/' . $login . '/' . $login . '.txt';

if (file_exists($name) == false) {

$f = fopen($name, 'w');
$password = fwrite($f, $pass);
fclose($f);
return true;

} else {

var_dump('Пользователь '. $login . ' уже существует');

};

};

?>