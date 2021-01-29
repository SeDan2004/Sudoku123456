<?php

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