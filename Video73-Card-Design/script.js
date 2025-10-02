var thumbnail = document.querySelector(".thumbnail img")
var time = document.querySelector(".thumbnail .time")
var title = document.querySelector(".title h5")
var cName = document.querySelector(".cName")
var views = document.querySelector(".views")
var old = document.querySelector(".old")

var thumbnail1 = "https://i.ytimg.com/vi/u6sXvRgnXV0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBswXZ582P9SVi_OeZypn5wVFdvyw"
var time1 = "13:23";
var title1 = "I Investigated Unlimited Food Offers"
var ChannelNAme = "Ayush Sapra"
var views1 = "352K views"
var months1 = "7 months"

createCard(thumbnail1,time1,title1,ChannelNAme, views1,months1);
function createCard(imageurl,samay,heading,Channel,view,months){
    thumbnail.src = imageurl;
    time.innerHTML = samay
    title.innerHTML = heading;
    cName.innerHTML = Channel;
    views.innerHTML = view;
    old.innerHTML = months;
}