<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// header("Access-Control-Allow-Methods: POST");

// $data = file_get_contents("php://input");
// $data = json_decode($data);

include_once 'connect_db_for_apis.php';



// if ($data != null) {
    $posts = $database->prepare("select * from users where id = 1");
    $posts->execute();

$posts = $posts->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($posts));
// }else{
//     print_r("null");
// }


