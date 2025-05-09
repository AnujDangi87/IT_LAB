<?php
include "config.php";

if(isset($_POST['submit']))
{
    $name = $_POST['name'];

    $sql = "INSERT INTO table1(name)
            VALUES ('$name')";

    $result = $conn->query($sql);

    if($result)
    {
        echo "Form submitted succesfully";
    }
    else
    {
        echo "Error submitting form";
    }

    $conn->close();

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <form id="form" method="POST" action="">
        <input name="name" type="text" placeholder="Name">
        <input type="submit" name="submit" value="submit">
    </form> 
</body>
</html>