<?php
    require_once __DIR__ . '/../config.php';
    class API {
        function Select(){
            $db = new Connect;
            $bedroom = array();
            $data = $db-> prepare('SELECT * FROM bedroom ORDER BY id');
            $data->execute();
            while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
                $bedroom[$OutputData['id']] = array(
                    'id' => $OutputData['id'],
                    'light1' => $OutputData['light1'],
                    'light2' => $OutputData['light2'],
                    'light3' => $OutputData['light3'],
                    'temperature' => $OutputData['temperature'],
                    'ac' => $OutputData['ac'],
                    'computer' => $OutputData['computer'],
                    'tv' => $OutputData['tv']
                );
            }
            return json_encode($bedroom);
        }
    }
    $API = new API;
    header('Content-Type: application/json');
    echo $API->Select();
?>