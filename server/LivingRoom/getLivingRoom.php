<?php
    require_once __DIR__ . '/../config.php';
    class API {
        function Select(){
            $db = new Connect;
            $livingRoom = array();
            $data = $db-> prepare('SELECT * FROM livingroom ORDER BY id');
            $data->execute();
            while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
                $livingRoom[$OutputData['id']] = array(
                    'id' => $OutputData['id'],
                    'light1' => $OutputData['light1'],
                    'light2' => $OutputData['light2'],
                    'light3' => $OutputData['light3'],
                    'temperature' => $OutputData['temperature'],
                    'ac' => $OutputData['ac'],
                    'tv' => $OutputData['tv'],
                    'wifi' => $OutputData['wifi']
                );
            }
            return json_encode($livingRoom);
        }
    }
    $API = new API;
    header('Content-Type: application/json');
    echo $API->Select();
?>