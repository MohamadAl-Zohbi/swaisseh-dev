function add_comment(index, user_id, post_id, comments) {
    let content = document.querySelector(".description" + post_id).value;
    let post_data = {
        user_id,
        post_id,
        content,
        comments
    };
    console.log(index)
    if (content == '') {
        return false;
    }

    let comment = `<div class="users_comments">
<div><img src="${profile.profile}"></div>
<h3 class="user_comments_title">@${profile.full_name}</h3>
<p class="user_comments_content">
${content}
</p>
</div>`;


    let post_comment = document.querySelector('.post_comment' + post_id);
    post_comment.innerHTML += comment;
    post_comment.scrollTo(0, post_comment.scrollHeight)


    let url = ip + '/dev/swaisseh_api/udates/add_comment.php';
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
            console.log(data)
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

}