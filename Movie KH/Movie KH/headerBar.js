const menuBtn = document.getElementById('menu-btn');
const menuBtnSecond = document.getElementById('menu-btn-second');
var navBar = document.querySelector('.navbar');
var navList = document.getElementById('navbar-list');
var container = document.querySelector(".container");

var contactBox = document.querySelector(".contact-box");

var active = false;
menuBtn.addEventListener('click',()=>{
    if(active == false){
        container.style.pointerEvents = "none";
        navBar.style.backgroundColor = "#181818";
        navList.style.left = "0";
        navList.style.pointerEvents = "all";
        active = true;
    }else{
        container.style.pointerEvents = "all";
        navBar.style.backgroundColor = "#212121";
        navList.style.left = "-200px";
        active = false;
    }
});
menuBtnSecond.addEventListener('click',()=>{
    if(active == false){
        container.style.pointerEvents = "none";
        navBar.style.backgroundColor = "#181818";
        navList.style.left = "0";
        navList.style.pointerEvents = "all";
        active = true;
    }else{
        container.style.pointerEvents = "all";
        navBar.style.backgroundColor = "#212121";
        navList.style.left = "-200px";
        active = false;
    }
});