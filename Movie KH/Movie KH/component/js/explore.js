const genre1 = document.querySelectorAll('.mat-chip-list-1>div');
const genre2 = document.querySelectorAll('.mat-chip-list-2>div');
const genre3 = document.querySelectorAll('.mat-chip-list-3>div');
const genre4 = document.querySelectorAll('.mat-chip-list-4>div');
const genre5 = document.querySelectorAll('.mat-chip-list-5>div');

function setGenre1BackColor(id){
    for(var i=0 ; i<genre1.length ; i++){
        if(i==id){
            genre1[i].style.backgroundColor = '#ffff';
            genre1[i].style.color = '#000';
        }else{
            genre1[i].style.backgroundColor = '#4b4b4b';
            genre1[i].style.color = '#ececec';
        }
    } 
}
function setGenre2BackColor(id){
    for(var i=0 ; i<genre2.length ; i++){
        if(i==id){
            genre2[i].style.backgroundColor = '#ffff';
            genre2[i].style.color = '#000';
        }else{
            genre2[i].style.backgroundColor = '#4b4b4b';
            genre2[i].style.color = '#ececec';
        }
    } 
}
function setGenre3BackColor(id){
    for(var i=0 ; i<genre3.length ; i++){
        if(i==id){
            genre3[i].style.backgroundColor = '#ffff';
            genre3[i].style.color = '#000';
        }else{
            genre3[i].style.backgroundColor = '#4b4b4b';
            genre3[i].style.color = '#ececec';
        }
    } 
}
function setGenre4BackColor(id){
    for(var i=0 ; i<genre4.length ; i++){
        if(i==id){
            genre4[i].style.backgroundColor = '#ffff';
            genre4[i].style.color = '#000';
        }else{
            genre4[i].style.backgroundColor = '#4b4b4b';
            genre4[i].style.color = '#ececec';
        }
    } 
}
function setGenre5BackColor(id){
    for(var i=0 ; i<genre5.length ; i++){
        if(i==id){
            genre5[i].style.backgroundColor = '#ffff';
            genre5[i].style.color = '#000';
        }else{
            genre5[i].style.backgroundColor = '#4b4b4b';
            genre5[i].style.color = '#ececec';
        }
    } 
}