<?php
require_once __DIR__ . '/../config.php';

// Set CORS headers to allow requests from any domain
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

class API {
    function getDevicesForRoom($roomId) {
        $db = new Connect();
        $query = "SELECT * FROM devices WHERE roomId = ?";
        $stmt = $db->prepare($query);
        $stmt->bindParam(1, $roomId);
        $stmt->execute();
        $devices = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $devices;
    }
}

// Check if the room ID is provided in the query string
if (isset($_GET['roomId'])) {
    $roomId = $_GET['roomId'];
    $API = new API;
    $result = $API->getDevicesForRoom($roomId);
    header('Content-Type: application/json');
    echo json_encode($result);
} else {
    // Return an error message if the room ID is not provided
    $response = array('error' => 'Room ID not provided');
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
