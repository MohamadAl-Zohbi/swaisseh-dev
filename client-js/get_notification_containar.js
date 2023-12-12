function get_notification_content() {
    let api = ip +'/dev/swaisseh_api/get_notification_containar.php';
    fetch(api)
        .then(response => response.json())
        .then(data => {

            document.getElementById("notification-menu-content").innerHTML += `${data}` + "see all"
        })
        .catch(error => {
            console.log("some thing went wrong");
        });
}

get_notification_content()