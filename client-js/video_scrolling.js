function play_autoplay_videos(data) {
    let element = "";
    window.addEventListener('scroll', () => {
        for (let i in data) {
            element = document.querySelector(".post_video" + data[i].id);
            if (document.querySelector(".post_video" + data[i].id)) {
                if (
                    window.scrollY <= element.offsetTop &&
                    element.offsetTop < window.scrollY + window.innerHeight
                ) {
                    element.play()
                } else {
                    element.pause()
                }
            }
        }
    })



    // Check if the element is in the viewport after scrolling



    function getMaxScrollTop() {
        let totalDocumentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        let viewportHeight = window.innerHeight;
        return totalDocumentHeight - viewportHeight;
    }
}