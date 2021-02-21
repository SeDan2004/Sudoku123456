
var UserList = document.querySelector('.UL')
    document.body.removeChild(UserList)

var Ic_User = document.querySelector('.icon_user')

    document.querySelector('.icon_user').addEventListener('click', checkModerOrAdmin)
        
    ModerOrAdmin = document.querySelector('.AdminOrModerInPanel')
    document.body.removeChild(document.querySelector('.AdminOrModerInPanel'))



function checkModerOrAdmin() {


if (ModerOrAdmin.innerText.includes('Moderator')) {
  
ThisUser = document.querySelectorAll('.currentUser')


 i = 0

  while (i < ThisUser.length) {

    ThisUser[i].childNodes[1].childNodes[3].remove()
    ThisUser[i].childNodes[1].childNodes[4].style.marginLeft = '72.2rem'

 i++
} 

}


if (ModerOrAdmin.innerText.includes('Admin')) {


ThisUser = document.querySelectorAll('.currentUser')


i = 0

  while (i < ThisUser.length) {

 if (ThisUser[i].childNodes[1].childNodes[0].nodeValue.includes('Moderator')) {


Delete_Moder = ThisUser[i].childNodes[1].childNodes[3]


               Delete_Moder.innerText = 'Сделать пользователем'
               Delete_Moder.classList.remove('AddModer')
               Delete_Moder.classList.add('DeleteModer')
               Delete_Moder.removeEventListener('click', HandlerAddModer)
               Delete_Moder.addEventListener('click', FuncDeleteModer)


} 

 i++ 
}

}

}

function goBack() {

    document.querySelector('.back').style.visibility = 'hidden'
    document.querySelector('.back_txt').style.visibility = 'hidden'
  
      Com = document.createComment('')
      document.body.replaceChild(Com, UserList)
    

    Ic_User.style.visibility = 'visible'

}

function setHandlerOnButtonBack() {

    document.querySelector('.back').onclick = goBack
    document.querySelector('.back_txt').onclick = goBack

}

function setColor () {
    
    Elem_arr = 0
  
  function Set_Color_In_Admin_Txt () {
  
    Admin_txt = document.querySelector('.Admin_txt')
    arr_color = ['red', 'lime', 'aqua', 'yellow', 'royalblue']
    Admin_txt.style.visibility = 'visible'
    Admin_txt.style.color = arr_color[Elem_arr++]
  
    if (Elem_arr == arr_color.length) Elem_arr = 0
  
  }
      
  setInterval(Set_Color_In_Admin_Txt, 300)
  
  
  }

function HandlerSTB () {

  document.querySelector('.Show_Tools_Button').style.visibility = 'hidden'

    Ic_User.style.visibility = 'visible'
    Ic_User.style.left = '15.8rem'

}

function HandlerUser () {

for (i = 0; i <= document.body.childNodes.length - 1; i++) {

  if (document.body.childNodes[i].nodeName == '#comment' && document.body.childNodes[i].length == 0) {


    document.body.replaceChild(UserList, document.body.childNodes[i])

  }

}
  
    Ic_User.style.visibility = 'hidden'
  
  document.querySelector('.back').style.visibility = 'visible'
  document.querySelector('.back_txt').style.visibility = 'visible'

}

function HandlerAddModer() {

UserStr = event.target.parentNode.childNodes[0].nodeValue
UserStr = UserStr.slice(UserStr.indexOf(':') + 2, UserStr.indexOf(','))

$.ajax({

        type: 'POST',
        url: '/Scripts/AddModer.php',
        data: {UserName: UserStr}, 
        success: (Arg) => {

          console.log(Arg)
}
                                        })

event.target.innerText = 'Сделать Пользователем'
event.target.classList.remove('AddModer')
event.target.classList.add('DeleteModer')
event.target.removeEventListener('click', HandlerAddModer)
event.target.addEventListener('click', FuncDeleteModer)

}

function FuncDeleteModer() {

$.ajax({

type: 'POST',
url: '/Scripts/DeleteModer.php',
data: {UserName: UserStr},
success: function (Argument) {

console.log(Argument)

}

})

event.target.innerText = 'Сделать модератором'
event.target.removeEventListener('click', FuncDeleteModer)
event.target.addEventListener('click', HandlerAddModer)

}

function Delete() {

document.querySelector('ul').removeChild(event.target.parentNode.parentNode)

UserStr = event.target.parentNode.childNodes[0].nodeValue
UserStr = UserStr.slice(UserStr.indexOf(':') + 2, UserStr.indexOf(','))

$.ajax({

type: 'POST',
url: '/Scripts/DeleteUser.php',
data: {UserName: UserStr},
success: function (User) {

console.log(User)

}

})

}

setColor()
setHandlerOnButtonBack()
