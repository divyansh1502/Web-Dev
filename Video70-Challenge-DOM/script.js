var box = document.getElementsByClassName("box")
box[0].style.backgroundColor = "orange"
box[1].style.backgroundColor = "cornFlowerBlue"
box[2].style.backgroundColor = "cadetBlue"
box[3].style.backgroundColor = "cyan"
box[4].style.backgroundColor = "green"

var box2 = document.querySelector("#box2")

box2.addEventListener("dblclick", function(){
    box2.style.backgroundColor = "yellow"
})