<?php
    if (isset($_POST) &&  $_POST["log"] == "pass")
    {
        $cookie = "true+green";
        setcookie("auth" , "true");
        setcookie("session" , $cookie);
    }

    if (isset($_COOKIE) &&  $_COOKIE["auth"] == "true")
    {
        $login = $_COOKIE["login"];
        require_once('admin.php');
    } 
    else 
    {
        require_once('start.php');
    }
?>
