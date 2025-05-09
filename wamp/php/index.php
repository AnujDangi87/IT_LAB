<?php 
    $serverName = "127.0.0.1";
    $userName = "root";
    $password = "";
    $dbName = "user";

    $conn = new mysqli($serverName, $userName, $password, $dbName);

    if($conn->connect_error)
    {
        die("Connection failed" . $conn->connect_error);
    }

    if(isset($_POST["submit"]))
    {
        $userName = $_POST["username"];
        $password = $_POST["password"];

        $sql = "INSERT INTO user(username, password)
                VALUES (\"$userName\", md5(\"$password\"))";

        $result = $conn->query($sql);

        if($result == True)
        {
            echo "New Record successfully created";
        }
        else
        {
            echo "Error :".$sql."<br>".$conn->error;
        }
        $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            padding:5%;
        }
        form{
           item-allign : center;
           padding:10%;
        }
        input{
            margin:2%;
        }
    </style>
</head>
<body>
    <form method="POST">
        <input type="text" name="username" placeholder="UserName" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>