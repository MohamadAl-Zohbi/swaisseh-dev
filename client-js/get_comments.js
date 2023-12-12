let got = false;
// function get_comments(index, user_id, post_id) {
//     if (!got) {
//         let api = 'http://' + ip + '/dev/swaisseh_api/get_comments.php';
//         fetch(api)
//             .then(response => response.json())
//             .then(data => {


// let comment = `<div class="users_comments">
// <div><img src="${profile.profile}"></div>
// <h3 class="user_comments_title">@${profile.full_name}</h3>
// <p class="user_comments_content">
// ${content}
// </p>
// </div>`;
// let post_comment = document.querySelector('.post_comment' + post_id);
// post_comment.innerHTML += comment;


// notify = true;
//             })
//             .catch(error => {
//                 console.log(error);
//                 console.log("some thing went wrong");
//             });
//     } else {
//         reset_to_original();
//         document.getElementById("notify").style.display = "block";
//         document.querySelector(".notification-svg").style.color = "gray";
//     }
// }



function get_comments(index, user_id, post_id,post_type) {
    let post_data = {
        user_id,
        post_id,
        index
    };
    let url = ip + '/dev/swaisseh_api/get_comments.php';
    let fetch_options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post_data)
    };
    fetch(url, fetch_options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            console.log(data);
            let post_comment = document.querySelector('.post_comment' + post_id);

            // post_comment.innerHTML = `<div style="width:300px; display:inline-block; background-color:#cccccc;border-radius:30px;"><input class="description description${post_id}" type="text" placeholder="comment..."/>
            // <button onclick="add_comment(${index},${profile.id},${post_id},${videos[index].comments})" class="post_comment_btn"><i data-visualcompletion="css-img" class="x1b0d499 xmgbrsx" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/JB6JkiPTost.png&quot;); background-position: 0px -479px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;color:white;"></i></button></div> `;

if(post_type == "video"){
    post_comment.innerHTML = `<div style="width:300px; display:inline-block; background-color:#cccccc;border-radius:30px;"><input class="description description${post_id}" type="text" placeholder="comment..."/>
    <button onclick="add_comment(${index},${profile.id},${post_id},${videos[index].comments})" class="post_comment_btn"><i data-visualcompletion="css-img" class="x1b0d499 xmgbrsx" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/JB6JkiPTost.png&quot;); background-position: 0px -479px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;color:white;"></i></button></div> `;
}else{
    post_comment.innerHTML = `<div style="width:300px; display:inline-block; background-color:#cccccc;border-radius:30px;"><input class="description description${post_id}" type="text" placeholder="comment..."/>
    <button onclick="add_comment(${index},${profile.id},${post_id},${posts[index].comments})" class="post_comment_btn"><i data-visualcompletion="css-img" class="x1b0d499 xmgbrsx" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/JB6JkiPTost.png&quot;); background-position: 0px -479px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;color:white;"></i></button></div> `;

}

            for (const i in data) {
                let comment = `<div class="users_comments">
            <div><img src="${data[i].profile}"></div>
            <h3 class="user_comments_title">@${data[i].full_name}</h3>
            <p class="user_comments_content">
            ${data[i].content}
            </p>
            </div>`;
            
                post_comment.innerHTML += comment;
            }


            notify = true;


        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

}