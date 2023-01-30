const rqBox = document.querySelector('.request-drama');
var contactBox = document.querySelector(".contact-box");
var cntBox = document.querySelector('.contact-box');
var body = document.querySelector("body");
function showContactBox(){
    cntBox.style.pointerEvents = "all";
    contactBox.style.backgroundColor = "#0505054b";
    body.style.overflow = "hidden";
    cntBox.innerHTML = `<div class="contact-box-message">
                                <div class="contact-box-close-btn"><i onclick="closeContactBox();" class="fa-solid fa-xmark"></i></div>
                                <div class="contact-box-content">
                                    <h2>Chat With Us</h2>
                                    <p>You can <span style="color: #e97c00;">Request Drama</span> Or <span style="color: #0078ff;">Report A Problem</span></p>
                                </div>
                                <button class="contact-link-box">
                                    <div class="contact-link-box-text">
                                        <p>https://t.kisskh.me/Zmya</p>
                                    </div>
                                    <div class="contact-link-box-icon">
                                        <i class="fa-solid fa-link"></i>
                                    </div>
                                </button>
                                <div class="contact-btn">
                                    <a href="https://web.facebook.com/profile.php?id=100005989516582" target="_blank" class="contact-btn-1">Facebook<i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://web.facebook.com/profile.php?id=100005989516582" target="_blank" class="contact-btn-2">Messenger<i class="fa-brands fa-facebook-messenger"></i></a>
                                </div>
                            </div>`;
}
rqBox.addEventListener('click',()=>{
        showContactBox();
});
function closeContactBox(){
    cntBox.innerHTML = '';
    contactBox.style.backgroundColor = "unset";
    cntBox.style.pointerEvents = "none";
    body.style.overflow = "unset";
}