<?php
require_once __DIR__ . '/../config.php';

class API {
    function addDevice() {        
        
        $db = new Connect();
        $query = "INSERT INTO devices (deviceName, roomId) VALUES (?,?)";
        $stmt = $db->prepare($query);
        
        // Retrieve the 'name' parameter from the request body (using JSON)
        $requestBody = file_get_contents('php://input');
        $requestParams = json_decode($requestBody, true);
        
        if (isset($requestParams['name'])) {
            $name = $requestParams['name'];
            $stmt->bindParam(1, $name);
            $roomId = $requestParams['roomId'];
            $stmt->bindParam(2,$roomId);
            $result = $stmt->execute();
            
            if ($result) {
                $response = array('message' => 'Device added successfully');
            } else {
                $response = array('message' => 'Failed to add device');
            }
        } else {
            $response = array('message' => 'Invalid request body');
        }
        
        return $response;
    }
}

$API = new API;
$result = $API->addDevice();
header('Content-Type: application/json');
echo json_encode($result);
?>
