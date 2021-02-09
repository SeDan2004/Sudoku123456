<?php 
require("./Scripts/Admin.php");
$DataUser = CheckDataUser();
?>

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

<?php
for ($i=0;$i<count($DataUser);$i++) {
?>

<div class='currentUser'> <li>

<?php
 echo 'Имя пользователя: ' . $DataUser[$i][0] .  ', Роль: ' . $DataUser[$i][1] . ', Пароль Пользователя: ' . $DataUser[$i][2] .', Сохранённых игр: ' . $DataUser[$i][3]; 
?>  

</li></div>;

<?php 
}
?>

<p style="color:white;"><?= "ghbdtn" ?></p>


</body>
</html>