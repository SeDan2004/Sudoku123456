<?php

// require('Templates/Sudoku.html');

 $is_true = false;

require('Scripts/Auth.php');

if (isset($_POST['login'])){

$is_true = checkPassword($_POST['login'] , $_POST['password']);

} 

if ($is_true[0]) {

if ($is_true[1] == 'User') {

require('Templates/Sudoku.php');

}

if ($is_true[1] == 'Admin' || $is_true[1] == 'Moderator') {

require('Templates/Admin2.php');

}

} else {

require('Templates/auth.php');

} 




?>