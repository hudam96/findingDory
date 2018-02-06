function add() {
var obj =  document.querySelector("#h").value ;
document.querySelector(".a").innerHTML = document.querySelector(".a").innerHTML + "<li>" + obj + "</li>";
document.querySelectorAll("li").style.fontsize = "50px"

}

function change1() {
 document.getElementById("b").src = "dory2.jpg";
}

function arrayPush(){
var a = document.getElementById('h1') ;
var b = document.getElementById('h2') ;
var c = document.getElementById('h3') ;
var arr=[] ;
arr.push(a);
arr.push(b);
arr.push(c);
console.log(arr);
}
