<?php
    class Connect extends PDO
    {
        public function __construct()
        {
            parent::__construct("mysql:host=localhost;dbname=home_automation", 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            $query = "SELECT * FROM home_automation";
            $result = $this-> query($query);

            if(!$result){
                $createDbQuery = "CREATE DATABASE home_automation";
                $this->exec($createDbQuery);

                // Select the database
                $this->exec("USE home_automation");

                $createKitchen = "CREATE TABLE kitchen (
                    id INT PRIMARY KEY,
                    light1 INT,
                    light2 INT,
                    light3 INT,
                    temperature INT,
                    ac BOOLEAN,
                    computer BOOLEAN,
                    washer BOOLEAN
                )";

                $createLivingRoom = "CREATE TABLE livingRoom (
                    id INT PRIMARY KEY,
                    light1 INT,
                    light2 INT,
                    light3 INT,
                    temperature INT,
                    ac BOOLEAN,
                    tv BOOLEAN,
                    wifi BOOLEAN
                )";
                $createChildRoom = "CREATE TABLE childRoom (
                    id INT PRIMARY KEY,
                    light1 INT,
                    light2 INT,
                    light3 INT,
                    temperature INT,
                    ac BOOLEAN,
                    computer BOOLEAN,
                    tv BOOLEAN
                )";
                $createBedroom = "CREATE TABLE bedroom (
                    id INT PRIMARY KEY,
                    light1 INT,
                    light2 INT,
                    light3 INT,
                    temperature INT,
                    ac BOOLEAN,
                    computer BOOLEAN,
                    tv BOOLEAN
                )";
                $this->exec($createKitchen);
                $this->exec($createLivingRoom);
                $this->exec($createChildRoom);
                $this->exec($createBedroom);

                echo "Database created successfully.";
            }else {
            echo "Database already exists.";
        }
        }
    }
?>
