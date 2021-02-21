<?php
if (isset($_COOKIE) &&  $_COOKIE["auth"] == "true")
    {
        $login = $_COOKIE["login"];
    } 
else
{
    header('Location: http://testcookie./');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    вы в приватной зоне
</body>
</html>