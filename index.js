//selecting popup-overlay and popup-box and add-popup-button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display ="block";
    popupbox.style.display ="block";
})

//selecting cancel popup button 

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){

    event.preventDefault() 
    popupoverlay.style.display ="none";
    popupbox.style.display ="none";

})

var container = document.querySelector(".container")

var booktitleinput = document.getElementById("book-title-input")
var bookautherinput = document.getElementById("book-auther-input")
var bookdescriptioninput = document.getElementById("book-description-input")



var addbook = document.getElementById("add-book")

addbook.addEventListener("click",function(event){
     
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
    <h5>${bookautherinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
   <button onclick ="deletebooks(event)">Delete</button>`
    container.append(div)

})

function deletebooks(event)
{
    event.target.parentElement.remove()
}