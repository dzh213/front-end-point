var box = document.getElementById("box");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
box1.addEventListener("click",function(e) {
   console.log("捕获box1")
},true)
box1.addEventListener("click",function(e) {
    console.log("冒泡box1")
},false)

box2.addEventListener("click",function(e) {
    console.log("捕获box2")
},true)
box2.addEventListener("click",function(e) {
    console.log("冒泡box2")
},false)

box3.addEventListener("click",function(e) {
    console.log("捕获box3")
},true)
box3.addEventListener("click",function(e) {
    console.log("冒泡box3")
},false)

//-----------------------事件代理----------------------------------
var list = document.getElementById("list");
list.addEventListener("click",function(e) {
    console.log(e)
    var target = e.target || e.srcElement;
    if(target.nodeName == "LI") {
        console.log(target.innerHTML)
    }
})
