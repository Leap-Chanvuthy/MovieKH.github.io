const searchButton = document.getElementById("search-btn");
const searchSecondBtn = document.getElementById("search-second-btn");
var searchBar = document.querySelector(".search-bar");
var closeBtn = document.querySelector(".search-box i");
var searchContent = document.querySelector(".search-content");
var i = 1;
searchButton.addEventListener("click",()=>{
    if(i%2!=0){
        searchBar.style.backgroundColor = "#00000052";
        searchBar.style.pointerEvents = "all";
        searchContent.style.marginTop = "0";
    }else{
        searchBar.style.background = "none";
        searchBar.style.pointerEvents = "none";
        searchContent.style.marginTop = "100vh";
    }
    i++;
});
searchSecondBtn.addEventListener("click",()=>{
    if(i%2!=0){
        searchBar.style.backgroundColor = "#00000052";
        searchBar.style.pointerEvents = "all";
        searchContent.style.marginTop = "0";
    }else{
        searchBar.style.background = "none";
        searchBar.style.pointerEvents = "none";
        searchContent.style.marginTop = "100vh";
    }
    i++;
});
closeBtn.addEventListener("click",()=>{
    searchBar.style.background = "none";
    searchBar.style.pointerEvents = "none";
    searchContent.style.marginTop = "100vh";
    i++;
});

const myGenreList = document.querySelectorAll('.genre-group');

function genreSelected(id){
    for(var i=0;i<myGenreList.length;i++){
        if(i==id){
            myGenreList[i].style.backgroundColor = '#ffff';
            myGenreList[i].style.color = '#000';
        }else{
            myGenreList[i].style.backgroundColor = '#4b4b4b';
            myGenreList[i].style.color = 'aliceblue';
        }
    }
}