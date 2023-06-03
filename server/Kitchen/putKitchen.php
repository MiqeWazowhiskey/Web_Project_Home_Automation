<?php
    require_once __DIR__ . '/config.php';
    class API {
        function Update($id, $data){
            $db = new Connect;
            $query = $db->prepare('UPDATE kitchen SET light1 = :light1, light2 = :light2, light3 = :light3, temperature = :temperature, ac = :ac, computer = :computer, washer = :washer WHERE id = :id');
            $data['id'] = $id;
            $query->execute($data);
            return true;
        }
    }
    /*retrieves the raw POST data from the request (php://input),
    and json_decode is used to decode the JSON data into an associative array.
    The decoded data is assigned to the $requestData variable*/
    $requestData = json_decode(file_get_contents('php://input'), true);

    // Extract the ID from the request data
    $id = isset($requestData['id']) ? $requestData['id'] : null;
    unset($requestData['id']); // Remove the ID from the data array

    $API = new API;
    $API->Update($id, $requestData);
    $response = array('message' => 'Update successful');

    header('Content-Type: application/json');
    echo json_encode($response);
?>