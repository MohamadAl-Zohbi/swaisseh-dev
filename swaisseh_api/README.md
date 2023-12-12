SELECT post_type,full_name,posts.id,profile,posted_time,description,src,likes,shared,comments,is_liked FROM `posts` LEFT JOIN users ON
    posts.user_id = users.id LEFT JOIN likes on
    likes.user_id = posts.user_id && likes.post_id = posts.id
    WHERE posts.id = 22







SELECT post_type,full_name,posts.id,profile,posted_time,description,src,likes,shared,comments,is_liked FROM `posts` LEFT JOIN users ON
    posts.user_id = users.id LEFT JOIN likes on
    likes.user_id = 3 && likes.post_id = posts.id
    WHERE posts.id = 22