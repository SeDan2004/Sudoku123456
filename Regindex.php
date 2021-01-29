<?php 

require('Templates/reg.php');
require('Scripts/Reg.php');

$result = false;

if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['repeat_password'])) {

if ($_POST['repeat_password'] != $_POST['password']) {

var_dump('Пароли не совпадают');

} else {

$result = checkLogin($_POST['login'], $_POST['password']);


};



};

?>