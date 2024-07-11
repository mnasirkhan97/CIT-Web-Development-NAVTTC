<?php

$servername = "localhost";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=test");

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";

     // insert
     $sql = "insert into students (Sr_no, Std_Name, Std_id, Cell_no, DOB) values (01, 'Nasir Khan', 123, '03172724776', '2000-09-20' )";
     $conn->exec($sql);
 
     // update
     $sql = "update Students set Std_Name='Nasir', Cell_no='03082193968' where Std_id=124";
     $conn->exec($sql);
 
     // delete
     $sql = "delete from Students where Std_id=134";
     $conn->exec($sql);
 
 
     // delete all
     $sql = "delete from Students";
     $conn->exec($sql);

     //  again insert
     $sql = "insert into students (Sr_no, Std_Name, Std_id, Cell_no, DOB) values (01, 'Nasir Khan', 123, '03172724776', '2000-09-20' )";
     $conn->exec($sql);

    echo "<br> Record inserted successfully";


 
} catch (PDOExeption $e) {
    echo "Connected failed : " . $e->getMessege();
}

?>