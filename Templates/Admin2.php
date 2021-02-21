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
<link rel='stylesheet' href='/Static/Admin.css'></link>
</head>
<body background='https://i.pinimg.com/originals/19/d8/2d/19d82d3d407a5ae0aee06d495b69ad5c.jpg'>

<p class='AdminOrModerInPanel'><?php var_dump($is_true[1])?></p>

<header class='head'>

<div class='Admin_txt'>

    <h1>Панель админа:</h1> 
    <h2 class='Show_Tools_Button' onclick='HandlerSTB()'>➞Нажми меня🠨</h2>
    <img src='/Icon/Иконка Пользователи.png' class='icon_user' onclick='HandlerUser()'>
    <img src='/Icon/Стрелка назад.png' class='back'><h3 class='back_txt'>Назад</h3>

</div>

</header>

<!---->

<ul class='UL'>
<?php 
for ($i=0;$i<count($DataUser);$i++) {

    if ($is_true[1] == 'Moderator' && $DataUser[$i][1] == 'Moderator') continue;
?> 

<div class='currentUser'> <li>

<?php
 echo 'Имя пользователя: ' . $DataUser[$i][0] .  ', Роль: ' . $DataUser[$i][1] . ', Пароль Пользователя: ' . $DataUser[$i][2] .', Сохранённых игр: ' . $DataUser[$i][3];
?>
<br>
<button class='AddModer' onclick='HandlerAddModer()'>Сделать модератором</button>
<button class='DeleteUser' onclick='Delete()'>Удалить пользователя</button>

</li>
</div>;

<?php 
} 
?>
</ul>


<script src='/Static/Admin.js'></script>
<script
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"></script>

</body>
</html>