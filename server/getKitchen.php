<?php
    require_once __DIR__ . '/config.php';
    class API {
        function Select(){
            $db = new Connect;
            $kitchen = array();
            $data = $db-> prepare('SELECT * FROM kitchen ORDER BY id');
            $data->execute();
            while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
                $kitchen[$OutputData['id']] = array(
                    'id' => $OutputData['id'],
                    'light1' => $OutputData['light1'],
                    'light2' => $OutputData['light2'],
                    'light3' => $OutputData['light3'],
                    'temperature' => $OutputData['temperature'],
                    'ac' => $OutputData['ac'],
                    'computer' => $OutputData['computer'],
                    'washer' => $OutputData['washer']
                );
            }
            return json_encode($kitchen);
        }
    }
    $API = new API;
    header('Content-Type: application/json');
    echo $API->Select();
?>