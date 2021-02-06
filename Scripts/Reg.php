<?php 

function Checklogin($login, $pass) {

    $CreateUserFile = 'Database/Username/' . $login;
    mkdir($CreateUserFile);
    $SudokuGame = 'Database/Username/' . $login . '/' . 'User_Game';
    mkdir($SudokuGame);
    
    
    $name = 'Database/Username/' . $login . '/' . $login . '.txt';

    $data = json_encode(['password' => $pass, 'role' => 'User', 'sudoku_count' => 0]);
    
    if (file_exists($name) == false) {
    
    $f = fopen($name, 'w');
    fwrite($f, $data);
    fclose($f);
    return true;
    
    } else {
    
    var_dump('Пользователь '. $login . ' уже существует');
    
    };
    
    };


?>