<?php
require_once __DIR__ . '/../config.php';

class API {
    function Update($id, $data){
        $db = new Connect;
        $updateData = '';
        $bindData = array('id' => $id); // Initialize the bind data array with the ID
        foreach($data as $key => $value){
            $updateData .= $key . ' = :' . $key . ', ';
            $bindData[$key] = $value; // Add the key-value pair to the bind data array
        }
        $updateData = substr($updateData, 0, -2); // Remove the trailing comma and space

        $query = "UPDATE kitchen SET $updateData WHERE id = :id";
        $stmt = $db->prepare($query);
        $stmt->execute($bindData);
        return true;
    }
}

$API = new API;


    //  the data is sent in JSON format
    $putData = json_decode(file_get_contents("php://input"), true);

    //  the ID is passed as a parameter in the URL
    $id = $_GET['id'];

    if (!empty($id) && !empty($putData)) {
        $result = $API->Update($id, $putData);
        if ($result) {
            echo json_encode(array('message' => 'Update successful'));
        } else {
            echo json_encode(array('message' => 'Update failed'));
        }
    } else {
        echo json_encode(array('message' => 'Invalid request'));
    }

?>
