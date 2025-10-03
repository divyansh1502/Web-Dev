let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "You clicked the worng button"
//      document.querySelector(".box").style.backgroundColor = "red"
// })
// button.addEventListener("dblclick", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "You clicked the worng button"
//      document.querySelector(".box").style.backgroundColor = "red"
// })
// button.addEventListener("contextmenu", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "You clicked the worng button"
//      document.querySelector(".box").style.backgroundColor = "red"
// })
// button.addEventListener("keydown", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "You clicked the worng button"
//      document.querySelector(".box").style.backgroundColor = "red"
// })
button.addEventListener("keydown", (e)=>{
    console.log(e,e.key,e.keyCode)
})