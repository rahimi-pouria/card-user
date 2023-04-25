// event get user name
let changeName = document.querySelector('#changeName').addEventListener('click', function () {
    //  create variable
    let nameUser = document.getElementById("nameUser")
    
    console.log(nameUser)
    let getName = document.getElementById('addName').value
    console.log(getName)
    nameUser.innerHTML = getName
})

// change user photo
const imagesArray = []
function choosPhoto(input) {
 var reader = new FileReader();
 reader.onload = function()
 {
  var logo = document.getElementById('logo');
  logo.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}