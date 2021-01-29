<?php 

$name = '../Database/Username/' . $_POST['User'] . '/User_Game/';

$arrFile = count(scandir($name)) - 2;

echo $arrFile;

?>