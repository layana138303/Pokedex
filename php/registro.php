<?php

require_once(__DIR__ . "/connection.php");

header('Content-Type: application/json');
$data = $_POST;

$reply = array();
$reply["ok"] = false;

if (!(isset($data["nombre"]) && isset($data["usuario"]) && isset($data["contrasena"]) && isset($data["correo"]))) {
    $reply["respuesta"] = "No se han recibido todos los datos necesarios para el registro: faltan datos";
    echo json_encode($reply);
    die();
}

if (empty($data["nombre"]) || empty($data["usuario"]) || empty($data["contrasena"]) || empty($data["correo"])) {
    $reply["respuesta"] = "No se han recibido todos los datos necesarios para el registro";
    echo json_encode($reply);
    die();
}

$nombre = $data["nombre"];
$usuario = $data["usuario"];
$contraseña = $data["contrasena"];
$email = $data["correo"];

// Validar el email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $reply["respuesta"] = "El correo electrónico no es válido";
    echo json_encode($reply);
    die();
}
else {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
}

$connection = Connection::getInstance();
$dbConn = $connection->getConnection();

// Comprobar si ya está registrado
$consulta = "SELECT * FROM Usuarios WHERE usuario = ? OR email = ?";
$statement = $dbConn->prepare($consulta);
$statement->bind_param("ss", $usuario, $email);

if ($statement->execute()) {
    $result = $statement->get_result();
    
    if ($result->num_rows > 0) {
        $reply["respuesta"] = "Ya existe un usuario con ese nombre de usuario o correo electrónico";
        echo json_encode($reply);

        $statement->close();
        $dbConn->close();
        die();
    }
} else {
    $reply["respuesta"] = "$consulta" . " ha causado " . $dbConn->error;
    echo json_encode($reply);

    $statement->close();
    $dbConn->close();
    die();
}

$consulta = "INSERT INTO Usuarios (id_usuario, nombre, usuario, email, contraseña) VALUES (?, ?, ?, ?, ?)";

$statement = $dbConn->prepare($consulta);
$statement->bind_param("sssss", $id_usuario, $nombre, $usuario, $email, $contraseña);

$id_usuario = hash("sha256", $nombre . $usuario . $email . $contraseña);

if ($statement->execute()) {
    $reply["ok"] = true;
    $reply["respuesta"] = "Usuario registrado correctamente";

} else {
    $reply["respuesta"] = $consulta . " ha causado" . $dbConn->error;
}

echo json_encode($reply);

$statement->close();
$dbConn->close();

?>
