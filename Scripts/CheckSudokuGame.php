<?php 

$name = '../Database/Username/' . $_POST['User'] . '/User_Game/' . 'Sudoku' . $_POST['SudokuNumber'] . '.txt';

$f = fopen($name, 'r');
echo fread($f, filesize( $name ));
fclose($f);

?>