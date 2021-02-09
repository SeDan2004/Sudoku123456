<?php
#смотрим названия папок

function CheckDataUser() {

$strdir = './Database/Username/';
$arrUser = scandir($strdir);


  array_shift($arrUser); array_shift($arrUser);

$Response = [];

 for ($i = 0; $i < count($arrUser); $i++) {
  

    $Userdir = fopen($strdir . $arrUser[$i] . '/' . $arrUser[$i] . '.txt', 'r');
               $fileRead = fread($Userdir, filesize($strdir . $arrUser[$i] . '/' . $arrUser[$i] . '.txt'));
               fclose($Userdir);

               $ObjUser = json_decode($fileRead);
               if ($ObjUser -> role == 'Admin') continue; 
               $temp = [$arrUser[$i] , $ObjUser->role ,$ObjUser->password, $ObjUser-> sudoku_count];
               array_push($Response , $temp);
              
 }
return $Response;
}

?>
