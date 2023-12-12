function main() {
    let api = ip + '/dev/swaisseh_api/send_posts.php';
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            posts = data;
            show_posts(posts)

        })
        .catch(error => {
            console.log("some thing went wrong", error);
        });
}
onload = main();
// let posts = [
//     {
//         owner: 'Mohamad Zohbi', profile: "../images/pro.jpg", timestamp: "Sep 0 2023 , 12:09 Am", title: `<p class="post_text">Subscribe <span> @Kashan Adnan </span>Youtube channel to Watch More VIdeos Website
//     Devolopment And UI Design
//     <a href="#">#KashanAdnan</a><a href="#">#YoutubeChannel</a>
//     </p>`, src: "../images/pro.jpg", id: 1, likes: 12, comments: 3, shared: 2, is_liked: "0", index: 0
//     }, {
//         owner: 'Mohamad Zohbi', profile: "../images/pro.jpg", timestamp: "Sep 0 2023 , 12:09 Am", title: `<p class="post_text">Subscribe <span> @Kashan Adnan </span>Youtube channel to Watch More VIdeos Website
//     Devolopment And UI Design
//     <a href="#">#KashanAdnan</a><a href="#">#YoutubeChannel</a>
//     </p>`, src: "../images/pro.jpg", id: 2, likes: 12, comments: 3, shared: 2, is_liked: "0", index: 1
//     }, {
//         owner: 'Mohamad Zohbi', profile: "../images/pro.jpg", timestamp: "Sep 0 2023 , 12:09 Am", title: `<p class="post_text">jrfkjerkjeek</p>`, src: "../images/pro.jpg", id: 22, likes: 12, comments: 3, shared: 2, is_liked: "0", index: 2
//     },
// ];

// let comment = `<div class="users_comments">
// <div><img src="../images/pro.jpg"></div>
// <h3 class="user_comments_title">@Baker Rifaii</h3>
// <p class="user_comments_content">
// cdjndejcjkehjehjhej
// </p>
// </div>`;

// posts = [];


function show_posts(source) {
    // document.querySelector(".main_content").innerHTML = "";

    for (let i in source) {
        // let type = "";
        // if (posts[i].type == "video") {
        //     continue;
        //     type = `<video src = "${posts[i].src}" controls class="post_img"></video>`;
        // } else {
        //     type = `<img src="${posts[i].src}" alt="Profile Pic" class="post_img">`;

        // }
        let type = `<img src="${posts[i].src}" alt="Profile Pic" class="post_img">`;

        // like blue !
        let likeblue = "";
        if (posts[i].is_liked == 1) {
            likeblue = `<img class="like" id="like${posts[i].id}" value="${posts[i].index}" src="../images/like-blue.png" alt="icon" onclick="like(${posts[i].index} ,'${posts[i].type}')">`
        } else {
            likeblue = `<img class="like" id="like${posts[i].id}" value="${posts[i].index}" src="../images/like.png" alt="icon" onclick="like(${posts[i].index} , '${posts[i].type}')">`
        }
        document.querySelector("#home").innerHTML +=
            `
        <div class="post_container">
                <div class="post_row">
                    <div class="user_profile">
                        <img src="${posts[i].profile}" alt="Pro We Are Pro You Now">
                        <div>
                            <p>${posts[i].owner}</p>
                            <span>${posts[i].timestamp}</span>
                        </div>
                    </div>
                    <a href=""><i class="fa fa-ellipsis-v"></i></a>
                </div>
                <p class="post_text">${posts[i].title}</p>
                ${type}
                <div class="post_row">
                    <div class="activity_icon">
                        <div>${likeblue}<span id="likes${posts[i].id}">${posts[i].likes}</span></div>
                        <div><img class="comment" id="comment${posts[i].id}" value="${posts[i].index}" src="../images/comments.png" alt="icon" onclick="show_comment_containar(${posts[i].index} ,'${posts[i].type}' )"><span id="likes${posts[i].id}">${posts[i].comments}</span></div>
                        <div><img class="share" id="share${posts[i].id}" value="${posts[i].index}" src="../images/share.png" alt="icon" onclick="share(${posts[i].index})">${posts[i].shared}</div>
                    </div>
                    <div class="post_profile_icon">
                    <img src="${posts[i].profile}" alt="Profile Pic"> <i class="fa fa-caret-down"></i>
                    </div>
                </div>
                <div class="post_comment post_comment${posts[i].id}" id="post_comment${posts[i].id}">
                <div style="width:300px; display:inline-block; background-color:#cccccc;border-radius:30px;"><input class="description description${posts[i].id}" type="text" placeholder="comment..."/>
                <button onclick="add_comment(${i},${profile.id},${posts[i].id},${posts[i].comments})" class="post_comment_btn"><i data-visualcompletion="css-img" class="x1b0d499 xmgbrsx" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/JB6JkiPTost.png&quot;); background-position: 0px -479px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;color:white;"></i></button></div>   <br>

                </div>
            </div>
        `;
    }
}


// videos 
function show_videos(source) {
    // document.querySelector(".main_content").innerHTML = "";

    for (let i in source) {
        let type = `<video src = "${videos[i].src}" controls class="post_video post_video${videos[i].id}"></video>`;
        let likeblue = "";
        if (videos[i].is_liked == 1) {
            likeblue = `<img class="like" id="like${videos[i].id}" value="${videos[i].index}" src="../images/like-blue.png" alt="icon" onclick="like(${videos[i].index})">`
        } else {
            likeblue = `<img class="like" id="like${videos[i].id}" value="${videos[i].index}" src="../images/like.png" alt="icon" onclick="like(${videos[i].index})">`
        }
        document.querySelector("#videos").innerHTML +=
            `
        <div class="post_container">
                <div class="post_row">
                    <div class="user_profile">
                        <img src="${videos[i].profile}" alt="Pro We Are Pro You Now">
                        <div>
                            <p>${videos[i].owner}</p>
                            <span>${videos[i].timestamp}</span>
                        </div>
                    </div>
                    <a href=""><i class="fa fa-ellipsis-v"></i></a>
                </div>
                <p class="post_text">${videos[i].title}</p>
                ${type}
                <div class="post_row">
                    <div class="activity_icon">
                        <div>${likeblue}<span id="likes${videos[i].id}">${videos[i].likes}</span></div>
                        <div><img class="comment" id="comment${videos[i].id}" value="${videos[i].index}" src="../images/comments.png" alt="icon" onclick="show_comment_containar(${videos[i].index})"><span id="likes${videos[i].id}">${videos[i].comments}</span></div>
                        <div><img class="share" id="share${videos[i].id}" value="${videos[i].index}" src="../images/share.png" alt="icon" onclick="share(${videos[i].index})">${videos[i].shared}</div>
                    </div>
                    <div class="post_profile_icon">
                    <img src="${videos[i].profile}" alt="Profile Pic"> <i class="fa fa-caret-down"></i>
                    </div>
                </div>
                <div class="post_comment post_comment${videos[i].id}" id="post_comment${videos[i].id}">
                <div style="width:300px; display:inline-block; background-color:#cccccc;border-radius:30px;"><input class="description description${videos[i].id}" type="text" placeholder="comment..."/>
                <button onclick="add_comment(${i},${profile.id},${videos[i].id},${videos[i].comments})" class="post_comment_btn"><i data-visualcompletion="css-img" class="x1b0d499 xmgbrsx" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/JB6JkiPTost.png&quot;); background-position: 0px -479px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;color:white;"></i></button></div>   <br>

                </div>
            </div>
        `;
    }
    play_autoplay_videos(source);


}


function like(index, post_type) {

    if (post_type == "photo") {
        let post = posts[index];
        let like_icon = document.getElementById("like" + post.id);
        let likes = document.getElementById("likes" + post.id);

        let user_id = profile.id;
        let post_id = post.id;
        let is_liked = post.is_liked

        like_unlike(user_id, post_id, is_liked, post.likes);
        if (is_liked == true && post.likes > 0) {
            like_icon.src = "../images/like.png";
            post.is_liked = false;
            post.likes--;
            likes.innerText = post.likes;
        } else {
            like_icon.src = "../images/like-blue.png";
            post.is_liked = true;
            post.likes++;
            likes.innerText = post.likes;
        }
    } else {
        let video = videos[index];
        let like_icon = document.getElementById("like" + video.id);
        let likes = document.getElementById("likes" + video.id);

        let user_id = profile.id;
        let video_id = video.id;
        let is_liked = video.is_liked

        like_unlike(user_id, video_id, is_liked, video.likes);
        if (is_liked == true && video.likes > 0) {
            like_icon.src = "../images/like.png";
            video.is_liked = false;
            video.likes--;
            likes.innerText = video.likes;
        } else {
            like_icon.src = "../images/like-blue.png";
            video.is_liked = true;
            video.likes++;
            likes.innerText = video.likes;
        }
    }
}


function show_comment_containar(index, post_type) {
    document.getElementById("notification-menu").style.height = 0 + "px"

    if (post_type == 'photo') {
        let post = posts[index];
        get_comments(index,post.owner,post.id,post_type)
        let post_id = post.id;
        let div = document.getElementById("post_comment" + post_id);
        if (div.style.height == "200px") {
            div.style.height = 0 + "px"
        } else {
            div.style.height = 200 + "px"
        }
    } else {
        let video = videos[index];
        get_comments(index,video.owner,video.id,post_type)

        let video_id = video.id;
        let div = document.getElementById("post_comment" + video_id);
        if (div.style.height == "200px") {
            div.style.height = 0 + "px"
        } else {
            div.style.height = 200 + "px"
        }
    }
}

function share(post_index) {
    let post = posts[post_index];
    let post_id = post.id;

    var urlToShare = '172.0.0.1:5500/' + post_id;
    var phoneNumber = '71025261';
    var whatsappLink = 'https://wa.me/?text=' + encodeURIComponent('Check out this link: ' + urlToShare);
    window.open(whatsappLink, '_blank');
}
