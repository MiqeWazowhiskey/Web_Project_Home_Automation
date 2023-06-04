<?php
    require_once __DIR__ . '/../config.php';
    class API {
        function Select(){
            $db = new Connect;
            $usageData = array();
            $data = $db-> prepare('SELECT * FROM monthlyUsage ORDER BY id');
            $data->execute();
            while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
                $usageData[$OutputData['id']] = array(
                    'id' => $OutputData['id'],
                    'day1' => $OutputData['day1'],
                    'day2' => $OutputData['day2'],
                    'day3' => $OutputData['day3'],
                    'day4' => $OutputData['day4'],
                    'day5' => $OutputData['day5'],
                    'day6' => $OutputData['day6'],
                    'day7' => $OutputData['day7']
                );
            }
            return json_encode($usageData);
        }
    }
    $API = new API;
    header('Content-Type: application/json');
    echo $API->Select();
?>