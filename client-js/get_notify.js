let notify = false;
function get_notify() {
    if (!notify) {
        let api = ip +'/dev/swaisseh_api/get_notify.php';
        fetch(api)
            .then(response => response.json())
            .then(data => {
                reset_to_original();
                document.querySelector(".main_content").innerHTML += data;
                document.querySelector(".notification-svg").style.color = "gray";
                notify = true;
            })
            .catch(error => {
                console.log(error);
                console.log("some thing went wrong");
            });
    } else {
        reset_to_original();
        document.getElementById("notify").style.display = "block";
        document.querySelector(".notification-svg").style.color = "gray";
    }
}


function get_home() {
    reset_to_original();
    document.getElementById("home").style.display = "block";
    document.querySelector(".home-svg").style.color = "gray";
}

function reset_to_original() {
    window.scrollTo(0,0);
    let articles = document.getElementsByClassName("article-content");
    let svgs = document.getElementsByClassName("svgs");
    if (document.querySelector("#videos")) {
        document.querySelector("#videos").remove();
    }
    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
    for (let i = 0; i < svgs.length; i++) {
        svgs[i].style.color = "white";
    }
}