<?php 

$currentWay = '../Database/Username/' . $_POST['UserName'];


          function RemoveDirectory($dir) {

$ArrUser = scandir($dir);

array_shift($ArrUser); array_shift($ArrUser);


for ($i = 0; $i <= count($ArrUser) - 1; $i++) {


  if (is_dir($dir . '/' . $ArrUser[$i])) {

$User_Game = scandir($dir . '/' . $ArrUser[$i]);


array_shift($User_Game); array_shift($User_Game);


$m = 0;


    while ($m <= count($User_Game) - 1) {

unlink($User_Game[$m]);

  $m++;
}

rmdir($dir . '/' . $ArrUser[$i]);

} else {

unlink($dir . '/' . $ArrUser[$i]);

}

}

rmdir($dir);

          }

RemoveDirectory($currentWay);

?>