const desBtn = document.querySelector(".description-quick-icon");
var desDetail = document.querySelector(".description-detail");
var desDetailText = document.querySelector(".description-detail p");
var qucikIcon = document.querySelector(".description-quick-icon i")
var i = 1;
desBtn.addEventListener("click",()=>{
    if(i%2!=0){
        desDetail.style.height = "120px";
        qucikIcon.style.transform = "rotate(180deg)";
    }else{
        desDetail.style.height = "0";
        qucikIcon.style.transform = "rotate(0)";
    }
    i++;
});

const fvrMovieBtn = document.querySelector(".detail-action button");
var fvrMovieIcon = document.querySelector(".detail-action button");

var j = false;
fvrMovieBtn.addEventListener("click",()=>{
    if(j==false){
        fvrMovieIcon.innerHTML = `<i class="fa-solid fa-heart"></i>Favorite`;
        j=true;
    }else{
        fvrMovieIcon.innerHTML = `<i class="fa-regular fa-heart"></i>Favorite`;
        j=false;
    }
});