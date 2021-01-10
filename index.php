<?php

/*require('Templates/reg.php');
require('Scripts/Reg.php');

if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['repeat_password'])) {

if ($_POST['repeat_password'] != $_POST['password']) {

var_dump('Пароли не совпадают');

} else {

$result = checkLogin($_POST['login'], $_POST['password']);

};

}; */

// require('Templates/Sudoku.html');

$is_true = false;

require('Scripts/Auth.php');

if (isset($_POST['login'])){
var_dump($_POST);
$is_true = checkPassword($_POST['login'] , $_POST['password']);

} 

if ($is_true) {

require('Templates/Sudoku.php');

} else {

require('Templates/Auth.php');

}


?>