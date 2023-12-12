function like_unlike(user_id, post_id, is_liked,likes) {
    let post_data = {
        user_id,
        post_id,
        is_liked,
        likes
    };
    let url = ip + '/dev/swaisseh_api/udates/update_like.php';
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