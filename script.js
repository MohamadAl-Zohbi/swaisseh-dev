let settingsMenu =  document.querySelector(".setting_menu");
let darkBtn =  document.getElementById("dark_btn");
let darkactionBtn = document.getElementById("darkactionBtn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("setting_menu_height");
    document.getElementById("notification-menu").style.height = 0+"px"

}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark_btn_on");
    darkactionBtn.classList.toggle("darkactionBtn");
}
function passvalue() {
        let message =   document.getElementById("")
}


document.getElementById("notification-to-open").addEventListener("click", ()=>{
    let div = document.getElementById("notification-menu")
    if (div.style.height == "450px") {
        div.style.height = 0+"px"
    } else {
        div.style.height = 450+"px"
    }

});


document.getElementById('dark_btn').addEventListener('click',()=>{
    document.getElementById('nav').classList.toggle("dark");
    document.getElementById('taskbar').classList.toggle("dark");
    document.querySelector('.container').classList.toggle("dark");
    document.querySelector('.right_sidebar').classList.toggle("dark");
    document.querySelector('.post_container').classList.toggle("dark");
    document.querySelector('.settings_menu_inner').classList.toggle("dark");
    document.querySelector('#notification-menu').classList.toggle("dark");
})


// document.getElementById("post").addEventListener("click",()=>{

//     Notification.requestPermission().then(perm => {
//         if (perm == "granted") {
//             new Notification(
//                 "Uploading...",{
//                     body:  "/100",
//                     data: {hi:"jndc"},
//                     tag: ""
//                 }
//             )
//         }
//     });
// })
