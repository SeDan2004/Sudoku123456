<html>
<head>

<title>Поле для регистрации</title>
<meta charset="UTF-8">
<link rel='stylesheet' href='Static/reg.css'>

</head>
<body>
<center>
<form method='post' action='/Regindex.php'>

  <input type='text' placeholder='Логин' class='login' name='login'><br>
  <p></p>
  <input type='password' placeholder='Пароль' class='password' name='password'><br>
  <p></p>
  <input type='password' placeholder='Повторите пароль' class='repeat_password' name='repeat_password'><br>
  <p></p>
  <input type='submit' value='Отправить' class='sub' onclick='opennewtab("https:/\/sudoku./")'><br>

<a href='/index.php' class='lnk'>Если вы уже зарегистрированы: Ссылка на авторизацию</a>

</form>
</center>
<script>

function opennewtab(url) {

window.open(url, "_blank")

}

</script>
</body>
</html>