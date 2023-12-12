<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");

$data = file_get_contents("php://input");
$data = json_decode($data);

include_once '../connect_db_for_apis.php';

if ($data->is_liked == true) {
    $sql = $database->prepare("UPDATE posts SET likes = $data->likes-1 WHERE id = $data->post_id;DELETE FROM likes WHERE post_id = $data->post_id && user_id = $data->user_id");
    $sql->execute();
}else{
    $sql = $database->prepare("UPDATE posts SET likes = $data->likes+1 WHERE id = $data->post_id;INSERT INTO likes (id,post_id, user_id,is_liked) VALUES (NULL,$data->post_id,$data->user_id,0)");
    $sql->execute();
}

print_r(json_encode($data));
