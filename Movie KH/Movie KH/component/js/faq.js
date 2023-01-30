var qsBtn = document.querySelectorAll('.question-quick-box');
var aqsBtn = document.querySelectorAll('.asked-question-box');
var faqContent = document.querySelectorAll('.faq-content');
var angleDown = document.querySelectorAll('.arrow-btn-down');

var arrayI = [1,1,1,1,1,1,1];
function showQuestionBox(id,ySize){
    qsBtn[id].addEventListener('click',()=>{
        if(arrayI[id]%2!=0){
            for(var i=0 ; i<qsBtn.length ; i++){
                if(i==id){
                    faqContent[i].style.height = `${ySize}px`;
                    angleDown[i].style.transform = 'rotate(180deg)';
                    aqsBtn[i].style.margin = '20px 0';
                    qsBtn[i].style.border = 'none'
                    qsBtn[i].style.borderRadius = "5px 5px 0 0";
                }else{
                    faqContent[i].style.height = '0';
                    angleDown[i].style.transform = 'rotate(0)';
                    aqsBtn[i].style.margin = '0';
                    qsBtn[i].style.border = '1px solid #3a3a3a'
                    qsBtn[i].style.borderRadius = "0";
                    changeBorderRadius();
                    arrayI[i] = 1;
                }
            }
        }else{
            faqContent[id].style.height = '0';
            angleDown[id].style.transform = 'rotate(0)';
            aqsBtn[id].style.margin = '0';
            qsBtn[id].style.border = '1px solid #3a3a3a'
            qsBtn[id].style.borderRadius = "0";
            changeBorderRadius();
        }
        arrayI[id]++;
    });
       
}

function changeBorderRadius(){
    document.querySelector(".question-box-1 .question-quick-box").style.borderRadius = "5px 5px 0 0";
    document.querySelector(".question-box-7 .question-quick-box").style.borderRadius = "0 0 5px 5px";
}

showQuestionBox(0,120);
showQuestionBox(1,50);
showQuestionBox(2,50);
showQuestionBox(3,50);
showQuestionBox(4,500);
showQuestionBox(5,450);
showQuestionBox(6,1650);
