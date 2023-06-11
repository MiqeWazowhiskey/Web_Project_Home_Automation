<?php
    class Connect extends PDO
    {
        public function __construct()
        {
            parent::__construct("mysql:host=localhost;dbname=home_automation", 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            
            //create db if not exists
            try{
                $checkDbQuery = "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = home_automation";
                $result = $this-> query($checkDbQuery);

            if(!$result->fetch()){
                $createDbQuery = "CREATE DATABASE home_automation";
                $this->exec($createDbQuery);

                // Select the database
                $this->exec("USE home_automation");

                
                echo "Database created successfully.";
            }else {
                $this->exec("USE home_automation");
                echo "Database already exists.";
        }}catch(PDOException $e){

        }

        $createKitchen = "CREATE TABLE IF NOT EXISTS kitchen (
            id INT PRIMARY KEY,
            light1 INT,
            light2 INT,
            light3 INT,
            temperature INT,
            ac BOOLEAN,
            computer BOOLEAN,
            washer BOOLEAN,
            usage_id INT,
            FOREIGN KEY (usage_id) REFERENCES monthlyUsage(id)
        )";
        
        $createLivingRoom = "CREATE TABLE IF NOT EXISTS livingroom (
            id INT PRIMARY KEY,
            light1 INT,
            light2 INT,
            light3 INT,
            temperature INT,
            ac BOOLEAN,
            tv BOOLEAN,
            wifi BOOLEAN,
            usage_id INT,
            FOREIGN KEY (usage_id) REFERENCES monthlyUsage(id)
        )";
        
        $createChildRoom = "CREATE TABLE IF NOT EXISTS childroom (
            id INT PRIMARY KEY,
            light1 INT,
            light2 INT,
            light3 INT,
            temperature INT,
            ac BOOLEAN,
            computer BOOLEAN,
            tv BOOLEAN,
            usage_id INT,
            FOREIGN KEY (usage_id) REFERENCES monthlyUsage(id)
        )";
        
        $createBedroom = "CREATE TABLE IF NOT EXISTS bedroom (
            id INT PRIMARY KEY,
            light1 INT,
            light2 INT,
            light3 INT,
            temperature INT,
            ac BOOLEAN,
            computer BOOLEAN,
            tv BOOLEAN,
            usage_id INT,
            FOREIGN KEY (usage_id) REFERENCES monthlyUsage(id)
        )";
        
        $createUsage = "CREATE TABLE IF NOT EXISTS monthlyUsage (
            id INT PRIMARY KEY,
            day1 INT,
            day2 INT,
            day3 INT,
            day4 INT,
            day5 INT,
            day6 INT,
            day7 INT,
            kitchen_id INT,
            livingroom_id INT,
            childroom_id INT,
            bedroom_id INT,
            FOREIGN KEY (kitchen_id) REFERENCES kitchen(id),
            FOREIGN KEY (livingroom_id) REFERENCES livingroom(id),
            FOREIGN KEY (childroom_id) REFERENCES childroom(id),
            FOREIGN KEY (bedroom_id) REFERENCES bedroom(id)
        )";
        

        
        $this->exec($createKitchen);
        $this->exec($createLivingRoom);
        $this->exec($createChildRoom);
        $this->exec($createBedroom);
        $this->exec($createUsage);



        //insert into tables if it is empty
        $checkKitchen = "SELECT COUNT(*) FROM kitchen";
        $countKitcen = $this->query($checkKitchen)->fetchColumn();

        if ($countKitcen == 0) {
            $insertKitchen = "INSERT INTO kitchen (id, light1, light2, light3, temperature, ac, computer, washer)
            VALUES (1, 0, 0, 0, 27, 0, 0, 0)";
            $this->exec($insertKitchen);
        }


        $checkLivingRoom = "SELECT COUNT(*) FROM livingRoom";
        $countLivingRoom = $this->query($checkLivingRoom)->fetchColumn();

        if ($countLivingRoom == 0) {
            $insertLivingRoom = "INSERT INTO livingRoom (id, light1, light2, light3, temperature, ac, tv, wifi)
            VALUES (1, 0, 0, 0, 27, 0, 0, 0)";
            $this->exec($insertLivingRoom);
        }

        $checkChildRoom = "SELECT COUNT(*) FROM childroom";
        $countChildRoom = $this->query($checkChildRoom)->fetchColumn();

        if ($countChildRoom == 0) {
            $insertChildRoom = "INSERT INTO childroom (id, light1, light2, light3, temperature, ac, computer, tv)
            VALUES (1, 0, 0, 0, 27, 0, 0, 0)";
            $this->exec($insertChildRoom);
        }

        
        $checkBedroom = "SELECT COUNT(*) FROM bedroom";
        $countBedroom = $this->query($checkBedroom)->fetchColumn();

        if ($countBedroom == 0) {
            $insertBedroom = "INSERT INTO bedroom (id, light1, light2, light3, temperature, ac, computer, tv)
            VALUES (1, 0, 0, 0, 27, 0, 0, 0)";
            $this->exec($insertBedroom);
        }

        $checkUsage = "SELECT COUNT(*) FROM monthlyusage";
        $countUsage = $this->query($checkUsage)->fetchColumn();

        if ($countUsage == 0) {
            $insertUsage = "INSERT INTO monthlyusage (id, day1, day2, day3, day4, day5, day6, day7)
            VALUES (1, 300, 324, 285, 128, 458, 340, 296)";
            $this->exec($insertUsage);
        }

        }
    }
?>
