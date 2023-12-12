# Facebook-Clone
Facebook Clone Website With HTML , CSS , JS
<?php
header("Access-Control-Allow-Origin: *");

// Define the upload directory
$uploadDirectory = 'uploads/';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the file field is set
    if (isset($_FILES['video'])) {
        $file = $_FILES['video'];

        // Check for errors during file upload
        if ($file['error'] === UPLOAD_ERR_OK) {
            // Generate a unique filename
            $filename = uniqid() . '_' . basename($file['name']);

            // Move the uploaded file to the destination directory
            $destination = $uploadDirectory . $filename;
            move_uploaded_file($file['tmp_name'], $destination);

            // Display a success message
            echo "File uploaded successfully: $uploadDirectory$filename";
        } else {
            // Display an error message
            echo "Error uploading file. Please try again.";
        }
    } else {
        // Display an error message if the file field is not set
        echo "No file selected.";
    }
}

?>

41 943 040 bytes

kb mb gb