<?

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: *');
require "connection.php";
require 'functions.php';

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        getData($connect);
        break;
    case "PATCH":
        $data = file_get_contents('php://input');
        postData($connect, $data);
        break;
    default:
        echo "no method specified";
        break;
}