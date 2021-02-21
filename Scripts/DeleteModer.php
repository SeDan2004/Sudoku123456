<?php 

$str = '../Database/Username/' . $_POST['UserName'] . '/' . $_POST['UserName'] . '.txt';


    $f = fopen($str, 'r');

        $objUser = json_decode(fread($f, filesize($str)));

    fclose($f);

        $objUser -> role = 'User';
        $objUser = json_encode($objUser);    


    $f = fopen($str, 'w');

        fwrite($f, $objUser);

        fclose($f); 

?>