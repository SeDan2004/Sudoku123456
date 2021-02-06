<?php

// require('Templates/Sudoku.html');

 $is_true = false;

require('Scripts/Auth.php');

if (isset($_POST['login'])){
var_dump($_POST);
$is_true = checkPassword($_POST['login'] , $_POST['password']);

var_dump($is_true);

} 

if ($is_true[0]) {

if ($is_true[1] == 'User') {

require('Templates/Sudoku.php');

}

if ($is_true[1] == 'Admin') {

require('Scripts/Admin.php');

}

} else {

require('Templates/Auth.php');

} 




?>