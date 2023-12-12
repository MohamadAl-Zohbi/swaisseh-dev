<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");

$data = file_get_contents("php://input");
$data = json_decode($data);

include_once 'connect_db_for_apis.php';

$sql = $database->prepare("SELECT content,time,users.full_name,profile,time FROM `comments` LEFT JOIN users ON comments.user_id = users.id WHERE comments.post_id = $data->post_id and comments.user_id = 1");



$sql->execute();

$comments = $sql->fetchAll(PDO::FETCH_ASSOC);



// $data = [];
// for ($i = 0; $i < count($posts); $i++) {
//     $is_liked = false;
//     if ($posts[$i]['is_liked'] == NULL) {
//         $is_liked = false;
//     } else {
//         $is_liked = true;
//     }
//     $data[$i] = array(
//         "owner" => $posts[$i]['full_name'],
//         "profile" => $posts[$i]['profile'],
//         "timestamp" => $posts[$i]['posted_time'],
//         "title" => $posts[$i]['description'],
//         "src" => $posts[$i]['src'],
//         "id" => $posts[$i]['id'],
//         "likes" => $posts[$i]['likes'],
//         "shared" => $posts[$i]['shared'],
//         "comments" => $posts[$i]['comments'],
//         "is_liked" => $is_liked,
//         "index" => $i,
//         "type" => $posts[$i]['post_type'],
//     );
// }
print_r(json_encode($comments));
