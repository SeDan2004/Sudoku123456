<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>

body {

background-color: black;

}

.currentUser {

background-color: navy;
border: 3px orangered solid;
margin-bottom: 0.8rem;
color: lime;
position: relative;
left: -1.7rem;


}

</style>
</head>
<body>
<ul>
<?php
#смотрим названия папок

function CheckDataUser() {

$strdir = './Database/Username/';
$arrUser = scandir($strdir);


  array_shift($arrUser); array_shift($arrUser);


for ($i = 0; $i < count($arrUser); $i++) {

    $Userdir = scandir($strdir . $arrUser[$i] . '/');

    array_shift($Userdir); array_shift($Userdir);
    
    $m = 0;


while ($m < count($Userdir)) {

    $current_File_Or_Dir = $strdir . $arrUser[$i] . '/' . $Userdir[$m];

  if ( is_dir($current_File_Or_Dir) == false ) {

    $f = fopen($current_File_Or_Dir, 'r');
    $DataUser = fread($f, filesize($current_File_Or_Dir));
    fclose($f);

    $DataUser = json_decode($DataUser); 
    
  if ($DataUser -> role == 'Admin') break 2;

    echo "<div class='currentUser'>" . 
    
    "<li>" . 'Имя пользователя: ' .  $arrUser[$i] .  
    
    ', Роль: ' . $DataUser -> role . ', Пароль Пользователя: ' . $DataUser -> password .
    
    ', Сохранённых игр: ' . $DataUser -> sudoku_count . 
    
    "</li>" . 

    "</div>";


 }

    $m++;

 }
    

 } 

 };

CheckDataUser()

/*for ($i = 0; $i < count($result); $i++) {

echo "<li>" . $result[$i] . "</li>";

} */
?>
</ul>
</body>
</html>