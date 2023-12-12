<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");

$data = file_get_contents("php://input");
$data = json_decode($data);

include_once '../connect_db_for_apis.php';

$sql = $database->prepare("INSERT INTO `comments` (`id`, `user_id`, `post_id`, `content`, `time`) VALUES (NULL, '$data->user_id', '$data->post_id', :content , current_timestamp());UPDATE posts SET comments = $data->comments+1 WHERE id = $data->post_id;");

$sql->bindParam("content", $data->content);


$sql->execute();
// if ($sql->execute()) {
//     # code...
// }
print_r(json_encode($data));
