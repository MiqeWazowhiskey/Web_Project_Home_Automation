<?php
    require_once __DIR__ . '/config.php';
    class API {
        function Insert($data){
            //connection
            $db = new Connect;
            //query 
            $query = $db->prepare('INSERT INTO kitchen (light1, light2, light3, temperature, ac, computer, washer) VALUES (:light1, :light2, :light3, :temperature, :ac, :computer, :washer)');
            // bind the values
            $query->bindValue(':light1', $data['light1']);
            $query->bindValue(':light2', $data['light2']);
            $query->bindValue(':light3', $data['light3']);
            $query->bindValue(':temperature', $data['temperature']);
            $query->bindValue(':ac', $data['ac']);
            $query->bindValue(':computer', $data['computer']);
            $query->bindValue(':washer', $data['washer']);
            //execution
            $query->execute();
            $insertedId = $db->lastInsertId();
            return $insertedId;
        }
    }
    /*retrieves the raw POST data from the request (php://input),
    and json_decode is used to decode the JSON data into an associative array.
    The decoded data is assigned to the $requestData variable*/
    $requestData = json_decode(file_get_contents('php://input'), true);
    $API = new API;
    $insertedId = $API->Insert($requestData);
    $response = array('insertedId' => $insertedId);

    header('Content-Type: application/json');
    echo json_encode($response);
?>