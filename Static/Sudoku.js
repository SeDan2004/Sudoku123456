var This_Col
var TD_arr = document.querySelectorAll('.little-col')

var Easy_bool 
var Medium_bool 
var Hard_bool
var Arr_Str_Clear_Numb = ''
var UserName = document.querySelector('.message').innerText.substr(9)

/* for (i=0 ; i < TD_arr.length ; i++){
TD_arr[i].innerText = i
} */


function NewGameStart() {


if (document.querySelector('.Game').value == 'Новая игра') {

  document.querySelector('.floor').removeChild(document.querySelector('.Game'))
  document.querySelector('.LevelSet').style.visibility = 'visible'
  
  } else if (document.querySelector('.Game').value == 'Сохранённые игры') {

    sel = document.createElement('select')
    opt = document.createElement('option')
    opt.innerText = 'Выбрать игру'
    opt.hidden = 'true'
    sel.appendChild(opt)
    sel.setAttribute('Class', 'CheckGame')
    
    
    document.querySelector('.floor').removeChild(document.querySelector('.Game'))
    document.querySelector('.floor').appendChild(sel)
    

    $.ajax({
      type: 'POST',
      url: '/Scripts/CheckGame.php',
      data: {User: UserName},
      success: function (Arg){

select_sudoku = document.querySelector('.CheckGame')

if (Arg == 0) {

  opt = document.createElement('option')

    opt.setAttribute('disabled', 'disabled')

      opt.style.color = 'red'

        opt.innerText = 'Сохранённых игр нету'
                       
          select_sudoku.appendChild(opt)

            return null
          
} else {


select_sudoku.addEventListener('click', GetSudokuInDirectory)


      for (i = 1; i <= Arg; i++) {

opt = document.createElement('option')
opt.innerText = '' + i

select_sudoku.appendChild(opt)

      }
      }
      } 
      })

  }

}

function Level(){

if (event.target.value != "Выбрать Режим") {

document.querySelector('#Start').hidden = false

}

// if (event.target.value == "Лёгкий") Easy()
// if (event.target.value == "Средний") Medium()
// if (event.target.value == "Сложный") Hard()

}

function Easy() {

if (document.querySelector('#Start').hidden == false) {

  document.querySelector('#Start').hidden = true

  return Easy_bool = true


  }

} 

function Medium(){

if (document.querySelector('#Start').hidden == false) {

  document.querySelector('#Start').hidden = true

  return Medium_bool =  true

  }

}

function Hard() {

if (document.querySelector('#Start').hidden == false) {

  document.querySelector('#Start').hidden = true

  return Hard_bool =  true

  }

}

function Show_Square() {

if (document.querySelector('.LevelSet').value == 'Лёгкий') Easy()
if (document.querySelector('.LevelSet').value == 'Средний') Medium()
if (document.querySelector('.LevelSet').value == 'Сложный') Hard()

document.querySelector('.Tabl').style.visibility = 'visible'

document.querySelector('.Save').style.visibility = 'visible'

fillSudoku()

Timer()

document.querySelector('#Start').hidden = true

if (Easy_bool == true) {

document.querySelector('.LevelSet').setAttribute('disabled', 'disabled')

for (i = 0; i <= document.querySelector('.LevelSet').childNodes.length - 1; i++) {

if (document.querySelector('.LevelSet').childNodes[i].nodeName == 'OPTION') {

    if (document.querySelector('.LevelSet').childNodes[i].value == 'Выбрать Режим' || document.querySelector('.LevelSet').childNodes[i].value == document.querySelector('.LevelSet').value) continue

document.querySelector('.LevelSet').childNodes[i].hidden = true

  }

}

clear_number_start = 1

  while (clear_number_start <= 24) {

 let clear_number = Math.floor(Math.random() * 80 + 1)

 if (TD_arr[clear_number].innerText == "") {

  while (true) {

    clear_number = Math.floor(Math.random() * 80 + 1)
    
    if (TD_arr[clear_number].innerText != "") break

  }

}

 Arr_Str_Clear_Numb = Arr_Str_Clear_Numb + ` ${clear_number}` + ` = ${TD_arr[clear_number].innerText},`

 TD_arr[clear_number].innerText = "" 

 clear_number_start++

}
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.substr(1, Arr_Str_Clear_Numb.length - 2)
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.split(', ')
}

if (Medium_bool == true) {

  document.querySelector('.LevelSet').setAttribute('disabled', 'disabled')

for (i = 0; i <= document.querySelector('.LevelSet').childNodes.length - 1; i++) {

if (document.querySelector('.LevelSet').childNodes[i].nodeName == 'OPTION') {

    if (document.querySelector('.LevelSet').childNodes[i].value == 'Выбрать Режим' || document.querySelector('.LevelSet').childNodes[i].value == document.querySelector('.LevelSet').value) continue

document.querySelector('.LevelSet').childNodes[i].hidden = true

  }

}

  clear_number_start = 1

  while (clear_number_start <= 48) {

 let clear_number = Math.floor(Math.random() * 80 + 1)

 if (TD_arr[clear_number].innerText == "") {

  while (true) {

    clear_number = Math.floor(Math.random() * 80 + 1)
    
    if (TD_arr[clear_number].innerText != "") break

  }

}

 Arr_Str_Clear_Numb = Arr_Str_Clear_Numb + ` ${clear_number}` + ` = ${TD_arr[clear_number].innerText},` 

 TD_arr[clear_number].innerText = "" 

 clear_number_start++

}
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.substr(1, Arr_Str_Clear_Numb.length - 2)
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.split(', ')
}

if (Hard_bool == true) {

  document.querySelector('.LevelSet').setAttribute('disabled', 'disabled')

for (i = 0; i <= document.querySelector('.LevelSet').childNodes.length - 1; i++) {

if (document.querySelector('.LevelSet').childNodes[i].nodeName == 'OPTION') {

    if (document.querySelector('.LevelSet').childNodes[i].value == 'Выбрать Режим' || document.querySelector('.LevelSet').childNodes[i].value == document.querySelector('.LevelSet').value) continue

document.querySelector('.LevelSet').childNodes[i].hidden = true

  }

}

  clear_number_start = 1

  while (clear_number_start <= 56) {

 let clear_number = Math.floor(Math.random() * 80 + 1)

 if (TD_arr[clear_number].innerText == "") {

  while (true) {

    clear_number = Math.floor(Math.random() * 80 + 1)
    
    if (TD_arr[clear_number].innerText != "") break

  }

}

 Arr_Str_Clear_Numb = Arr_Str_Clear_Numb + ` ${clear_number}` + ` = ${TD_arr[clear_number].innerText},`

 TD_arr[clear_number].innerText = "" 

 clear_number_start++

}
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.substr(1, Arr_Str_Clear_Numb.length - 2)
Arr_Str_Clear_Numb = Arr_Str_Clear_Numb.split(', ')
}

}

function Start_Game(){

Start.addEventListener('click', Show_Square)

document.querySelector('.End').addEventListener('click', HandlerEnd)

}

function ShowColButton(){

if (event.target.textContent != "") return null

This_Col = event.target

i = 0

while (i <= document.querySelector('.SetNumber').childNodes.length - 1) {

if (document.querySelector('.SetNumber').childNodes[i].nodeName == "OPTION") {

document.querySelector('.SetNumber').childNodes[i].style.color = 'blue'

}
i++
}

document.querySelector('.SetNumber').style.visibility = 'visible'
document.getElementById('ClearButton').style.visibility = 'hidden'

}

function HandlerSetNumber() {

if (event.target.value != "Выбрать цифру") {


event.target.style.color = 'blue'
document.querySelector('.SayOk').style.visibility = 'visible'

}

}

function ClickOnSetNumber() {

document.querySelector('.SetNumber').addEventListener('click', HandlerSetNumber)

}

function HandlerSayOk(number) {


// Индексы блока и ячейки
let This_Ind_Block
let This_Ind_Col


//опредялем индекс ячейки в TD_arr (Переменная index)
//ее блок (Переменная This_Ind_Block)
//индекс ячейки в блоке (Переменная This_Ind_Col)
for(i=0 ; i<TD_arr.length ; i++){
if (TD_arr[i] == This_Col){
index = i
This_Ind_Block = Math.floor(i / 9)
This_Ind_Col = i % 9
break
}
}

//проверим сам блок
index_start_block = This_Ind_Block * 9
index_end_block = (This_Ind_Block+1) * 9 - 1

for (i = index_start_block;i <= index_end_block;i++){

if (i == index){
continue
}

if (HandlerSayOk.caller.caller != fillSudoku) CheckNumberUser(i)

if (TD_arr[i].innerText == number){
//ошибка , число стоит неправильно

This_Col.style.color = 'red'
console.log('Сработало')

}

}



//проверять горизонталь
current_bloks_line = Math.floor(index / 27)
current_line_in_block = Math.floor(This_Ind_Col / 3)

//console.log(current_bloks_line) // индекс линии блока
//console.log(current_line_in_block) // индекс линии с ячейками в блоке

if (current_bloks_line == 0) {

let Vertical_Index_Start_Block = This_Ind_Block
let Vertical_Index_Start_Col = This_Ind_Col % 3

i = 1
  
  while (i <= 3) {

m = 1

 while (m <= 3) {

if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) {
  
  This_Col.style.color = 'red'
  console.log('Сработало')

}

  Vertical_Index_Start_Col += 3

  m++
 }

    Vertical_Index_Start_Col -= 9
    Vertical_Index_Start_Block += 3
    i++
  }

}

if (current_bloks_line == 1) {

let Vertical_Index_Start_Block = This_Ind_Block - 3
let Vertical_Index_Start_Col = This_Ind_Col % 3

i = 1

  while (i <= 3) {

m = 1

  while (m <= 3) {

if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) {
  
  This_Col.style.color = 'red'
  console.log('Сработало')

}
    Vertical_Index_Start_Col += 3
    m++
  }

    Vertical_Index_Start_Col -= 9
    Vertical_Index_Start_Block += 3
    i++
  }

}

if (current_bloks_line == 2) {

  let Vertical_Index_Start_Block = This_Ind_Block - 6
  let Vertical_Index_Start_Col = This_Ind_Col % 3
  
  i = 1
    
    while (i <= 3) {
  
  m = 1
  
   while (m <= 3) {
  
  if (TD_arr[Vertical_Index_Start_Col + (Vertical_Index_Start_Block * 9)].innerText == number) {
    
    
    This_Col.style.color = 'red'
    console.log('Сработало')

  }
    Vertical_Index_Start_Col += 3
    m++
   }
  
  
      Vertical_Index_Start_Col -= 9
      Vertical_Index_Start_Block += 3
      i++
    }

}

Gorizontal_Index_Start_Block = This_Ind_Block
Gorizontal_Index_Start_Col = This_Ind_Col

i = This_Ind_Block


 while (i % 3 != 0) {

i--

}

Gorizontal_Index_Start_Block = i



i = This_Ind_Col


  while (i % 3 != 0) {

i--

}

Gorizontal_Index_Start_Col = i



  i = 1

    while (i <= 3) {

m = 1

  while (m <= 3) {

if (TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)] == This_Col) Gorizontal_Index_Start_Col++

if (Gorizontal_Index_Start_Col % 3 == 0 && Math.floor(Gorizontal_Index_Start_Col / 3) != current_line_in_block) break

if (TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)].innerText == number) {
  
  This_Col.style.color = 'red'
  console.log('Сработало')

}
//console.log(TD_arr[Gorizontal_Index_Start_Col + (Gorizontal_Index_Start_Block * 9)])

Gorizontal_Index_Start_Col++
m++

  }

      Gorizontal_Index_Start_Col -= 3
      Gorizontal_Index_Start_Block++
      i++
    }

/* 🠕🠕🠕🠕🠕🠕🠕
Проверка блока
*/

col = 0

labelName: while (col <= TD_arr.length - 1) {

    if (TD_arr[col].innerText == "") {

      for (StartCol = col + 1; StartCol <= TD_arr.length - 1; StartCol++) {

        if (TD_arr[StartCol].innerText == "") {

          break labelName
} 
            if (TD_arr[StartCol].innerText != "" && StartCol == TD_arr.length - 1) {

              document.querySelector('.End').style.visibility = 'visible'

}

}

}
  col += 1
}

This_Col.textContent = document.querySelector('.SetNumber').value
document.querySelector('.SayOk').style.visibility = 'hidden'
document.querySelector('.SetNumber').value = "Выбрать цифру"
document.querySelector('.SetNumber').style.visibility = 'hidden'

if (HandlerSayOk.caller.caller != fillSudoku) {

if (This_Col.style.color == 'red') {

document.getElementById('ClearButton').style.visibility = 'visible'

}

}

}

function ClickOnSayOk() {

document.querySelector('.SayOk').addEventListener('click',function (){  HandlerSayOk (document.querySelector('.SetNumber').value ) } )

}

function GetAllCol() {

Get_Col = document.querySelectorAll('.little-col')

i = 0

while (i <= Get_Col.length - 1){

Get_Col[i].addEventListener('click', ShowColButton)

i++

}

}

function create_sudoku(){
square = 9

//разбираемся с единичками
//генерим первую ячейку
index = Math.round(Math.random() * 8)
TD_arr[index] = '1'

}

function clearSudoku(){
  for ( let i = 0; i < TD_arr.length ; i++){
    TD_arr[i].innerText = ''
  }
}

function fillSudoku(){
  iter = 0
  function fill(){

    for(let i = 0; i < TD_arr.length ; i ++){
      This_Col = TD_arr[i]

      count = 0
      while (true){

        This_Col.style.color = "black"
        let number = Math.floor(Math.random() * 9 + 1)
        document.querySelector('.SetNumber').value = number
        HandlerSayOk(number)
        
        if (This_Col.style.color != 'red'){
          break
        }
        
        if (count == 100){
          //Очистить поле судоку , и еще раз запсутить функцию
          clearSudoku()
          return
        }
        count = count + 1
        
      }
    //  console.log(count)
    }
    return true
  }

  while (true){

  //  console.log(iter)
    if (fill()){
      return
    }
    i = i + 1
  }

  //очистить случайные ячейки

}

function Timer(Clock) {

  function Start_Timer() {

    GiveTime.setSeconds(GiveTime.getSeconds() + 1);
    GiveTimeString = GiveTime.toTimeString() + "";
    GiveTimeString = GiveTimeString.substr(0, 8);
    
    
    document.querySelector('.Timer_Start').innerText = `Время: ${GiveTimeString}`;
    
    }


if (Timer.arguments.length != 0) {

Clock = Clock.substr(Clock.indexOf("0"))
Clock = Clock.split(':')

GiveTime = new Date()
GiveTime.setHours(Clock[0])
GiveTime.setMinutes(Clock[1])
GiveTime.setSeconds(Clock[2])

setInterval(Start_Timer, 1000)

} else {

GiveTime = new Date();
GiveTime.setSeconds(0);
GiveTime.setMinutes(0);
GiveTime.setHours(0);

setInterval(Start_Timer, 1000)

}
}

function HandlerClearNumber () {

if (This_Col.style.color == 'red') {

This_Col.innerText = ""
This_Col.style.color = 'black'
document.getElementById('ClearButton').style.visibility = 'hidden'
This_Col.addEventListener('click', ShowColButton)

}

}

function Clear () {

document.getElementById('ClearButton').addEventListener('click', HandlerClearNumber)

}

function CheckNumberUser(Argument) {


  if (HandlerSayOk.caller.caller == fillSudoku) {
  
                return null

}


if (TD_arr[Argument].innerText != "") return null


NumberUser = document.querySelector('.SetNumber').value

  for (Start_Check = 0; Start_Check <= Arr_Str_Clear_Numb.length - 1; Start_Check++) {

    if (Arr_Str_Clear_Numb[Start_Check][1] != " ") {

      if (Argument == Arr_Str_Clear_Numb[Start_Check][0] + Arr_Str_Clear_Numb[Start_Check][1]

         && Arr_Str_Clear_Numb[Start_Check].lastIndexOf(NumberUser) == 5
         
         ) {

if (This_Col != TD_arr[Argument]) {
  
This_Col.style.color = 'red' 
console.log('Сработало')

}

      } 
} else {

if (Argument == Arr_Str_Clear_Numb[Start_Check][0] && Arr_Str_Clear_Numb[Start_Check].lastIndexOf(NumberUser) == 4) {

console.log('Условие прошло')

  if (This_Col != TD_arr[Argument]){

This_Col.style.color = 'red'
console.log('Сработало')

}
}
}
}
}

function HandlerEnd() {

i = 0

  while (i < Arr_Str_Clear_Numb.length - 1) {

    if (Arr_Str_Clear_Numb[i].charAt(1) != " ") {

This_Col = TD_arr[Arr_Str_Clear_Numb[i].slice(0, 2)]


      if(This_Col.innerText != Arr_Str_Clear_Numb[i][5]) This_Col.style.color = 'red'

      if (This_Col.style.color == 'red') {
      alert('Были найдены ошибки')
      return null
}
} else {

This_Col = TD_arr[Arr_Str_Clear_Numb[i].slice(0, 1)]

      if (This_Col.innerText != Arr_Str_Clear_Numb[i][4]) This_Col.style.color = 'red'

      if (This_Col.style.color == 'red') { 
      alert('Были найдены ошибки')
      return null
}
}

i++
}

alert('ПОЗДРАВЛЯЕМ, ИГРА УСПЕШНО ПРОЙДЕНА!!!')

}

function HandlerSend() {

Send_arr = []

currentTime = document.querySelector('.Timer_Start').innerText

for (i = 0; i <= TD_arr.length - 1; i++) {

Send_arr.push(TD_arr[i].innerText)

}

$.ajax({
  type: "POST",
  url: '/Scripts/Save.php',
  data: {KeySudoku: Send_arr, User: UserName, Time: currentTime},
  success: function (Respond) { console.log(Respond) },
})



}

function Send_Number() {

document.querySelector('.Save').addEventListener('click', HandlerSend)

}

function GetSudokuInDirectory() {

if (event.target.value != 'Выбрать игру') {

$.ajax({
type: 'POST',
url: '/Scripts/CheckSudokuGame.php',
data: {SudokuNumber: event.target.value, User: UserName},
success: function (ArrCol) {

currentClock = ' ' + ArrCol.substr(ArrCol.indexOf('В'))

ArrCol = ArrCol.replace(currentClock, '')


 ArrCol = eval(ArrCol)

i = 0

  while (i < ArrCol.length) {
        
    TD_arr[i].innerText = ArrCol[i]

i++
}

document.querySelector('.Tabl').style.visibility = 'visible'
Timer(currentClock)
       
}
})

}
}

Send_Number()
Clear()
Start_Game()
ClickOnSetNumber()
ClickOnSayOk()
GetAllCol()

