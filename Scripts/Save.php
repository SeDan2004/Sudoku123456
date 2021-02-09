<?php 

$_arrPost = $_POST['KeySudoku'];


 $name = '../Database/Username/' . $_POST['User'] . '/User_Game/';

if (file_exists($name) == false) {

$name .= 'Sudoku1.txt';


} else {

  $dir = opendir($name);
  $count = 1;
  while($file = readdir($dir)){
      if($file == '.' || $file == '..' || is_dir($name . $file)){
          continue;
      }
      $count++;
  }

  $name .= 'Sudoku' . $count . '.txt'; 

}

$f = fopen($name, 'w');
     fwrite($f, json_encode($_arrPost));
     fwrite($f, ' ' . $_POST['Time']);
     fclose($f); 


$name = '../Database/Username/' . $_POST['User'] . '/' . $_POST['User'] . '.txt';

$f = fopen($name, 'r');
     $ObjUserData = json_decode(fread($f, filesize($name)));
     fclose($f);

     $ObjUserData -> sudoku_count++;
     $ObjUserData = json_encode($ObjUserData);


$f = fopen($name, 'w');
     fwrite($f, $ObjUserData);
     fclose($f);

?>