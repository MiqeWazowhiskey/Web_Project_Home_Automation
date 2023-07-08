<?php
require_once __DIR__ . '/../config.php';

class API {
    function changeDeviceStatus() {        
        
        $db = new Connect();
        $query = "UPDATE devices SET status = ? WHERE deviceId = ?";
        $stmt = $db->prepare($query);

         // Retrieve the 'status' and 'deviceId' parameters from the request body (using JSON)
         $requestBody = file_get_contents('php://input');
         $requestParams = json_decode($requestBody, true);
         
         if (isset($requestParams['status']) && isset($requestParams['deviceId'])) {
             $status = $requestParams['status'];
             $stmt->bindParam(1, $status);
             $deviceId = $requestParams['deviceId'];
             $stmt->bindParam(2, $deviceId);
             $result = $stmt->execute();
             
             if ($result) {
                 $response = array('message' => 'Device status changed successfully');
             } else {
                 $response = array('message' => 'Failed to change device status');
             }
         } else {
             $response = array('message' => 'Invalid request body');
         }
         
         return $response;
     }
 }

$API = new API;

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $result = $API->changeDeviceStatus();
} else {
    $result = array('message' => 'Invalid request method');
}

header('Content-Type: application/json');
echo json_encode($result);
?>
