let video = false;
let videos = "";
function get_videos() {
    if (!video) {
        let api =  ip + '/dev/swaisseh_api/send_videos.php';
        fetch(api)
            .then(response => response.json())
            .then(data => {
                reset_to_original();
                videos = data;
                let preview_article = document.createElement('article');
                preview_article.classList.add('article-content');
                preview_article.id = 'videos';
                document.querySelector(".main_content").appendChild(preview_article);
                console.log(data)

                show_videos(videos);
                document.querySelector(".video-svg").style.color = "gray";
                video = true;
            })
            .catch(error => {
                console.log(error);
                console.log("some thing went wrong");
            });
    }
    else {
        reset_to_original();
        let preview_article = document.createElement('article');
        preview_article.classList.add('article-content');
        preview_article.id = 'videos';
        document.querySelector(".main_content").appendChild(preview_article);
        show_videos(videos);
        document.querySelector(".video-svg").style.color = "gray";
    }
}