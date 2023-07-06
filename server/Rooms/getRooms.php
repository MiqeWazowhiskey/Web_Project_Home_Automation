<?php
require_once __DIR__ . '/../config.php';

// Set CORS headers to allow requests from any domain
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

class API {
    function getAllRooms() {
        $db = new Connect();
        $query = "SELECT * FROM rooms";
        $stmt = $db->query($query);
        $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $rooms;
    }
}

$API = new API;
$result = $API->getAllRooms();
header('Content-Type: application/json');
echo json_encode($result);
?>
