let profile = "";


let api = ip + '/dev/swaisseh_api/users_api.php';
fetch(api)
    .then(response => response.json())
    .then(data => {
        profile = data[0];
        document.getElementById("profile").src = profile.profile;
        // document.getElementById("profile-post").src = profile.profile;
        document.getElementById("name").innerText = profile.full_name;
        document.getElementById("hidden-profile").src = profile.profile;
        document.getElementById('post_container_profile').src = profile.profile;
        document.getElementById('post_container_username').innerText = profile.full_name;

    })
    .catch(error => {
        console.log(error);
        alert("fetch profile error")
    });



