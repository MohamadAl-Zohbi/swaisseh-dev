<!-- 
<form id="upload-video" method="post" enctype="multipart/form-data">
                <label for="file-input">Choose a video:</label>

                <input type="file" id="file-input" name="video" />

                <div id="selected-items">

                </div>
                <div class="action-btn">
                    <button type="submit" class="send-btn">Send</button>
                    <button type="button" class="cancel-btn">Cancel</button>

                </div>
            </form>
 -->
<?php
header("Access-Control-Allow-Origin: *");
$uploadDirectory = 'uploads/';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['video'])) {
        $file = $_FILES['video'];

        // Check for errors during file upload
        if ($file['error'] === UPLOAD_ERR_OK) {
            // Generate a unique filename
            $time = intval(microtime(true));
            $direction = explode(".", $file["name"])[1];
            $filename = explode(".", $file["name"])[0] . $time . "." . $direction;

            // Move the uploaded file to the destination directory
            $destination = $uploadDirectory . $filename;
            // db
            $src = "http://192.168.1.123/dev/swaisseh_api/" . $destination;
            $type = "";
            if ($direction == "mp4") {
                $type = 'video';
            } else {
                $type = 'photo';
            }
            $description = $_POST["description"];
            include_once 'connect_db_for_apis.php';
            $post = $database->prepare("INSERT INTO `posts` (`id`, `user_id`, `posted_time`, `description`, `src`, `likes`, `comments`, `post_type`) VALUES (NULL, '1', current_timestamp(), '$description', '$src', '0', '0', '$type')");
            if ($post->execute()) {
                move_uploaded_file($file['tmp_name'], $destination);
            }



            echo "File uploaded successfully: " . $filename;
        } else {
            echo "Error uploading file. Please try again.";
        }
    } else {
        echo "No file selected.";
    }
}



?>