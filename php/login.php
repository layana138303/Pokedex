<?php

require_once(__DIR__ . "/connection.php");

header('Content-Type: application/json');
$data = $_POST;

$reply = array();
$reply["ok"] = false;

if (!(isset($data["usuario"]) && isset($data["contrasena"]))) {
    $reply["respuesta"] = "No se han recibido todos los datos para el login";
    echo json_encode($reply);
    die();
}

if (empty($data["usuario"]) || empty($data["contrasena"])) {
    $reply["respuesta"] = "No se han recibido todos los datos para el login";
    echo json_encode($reply);
    die();
}

$usuario = $data["usuario"];
$contrasena = $data["contrasena"];

$connection = Connection::getInstance();
$dbConn = $connection->getConnection();

// Comprobar credenciales
$consulta = "SELECT * FROM Usuarios WHERE usuario = ? AND contraseña = ?";
$statement = $dbConn->prepare($consulta);
$statement->bind_param("ss", $usuario, $contrasena);

if ($statement->execute()) {
    $result = $statement->get_result();
    
    if ($result->num_rows == 0) {
        $reply["respuesta"] = "No existe ningún usuario con esas credenciales: " . $usuario . " - " . $contrasena;

    } elseif ($result->num_rows == 1) {
        $reply["ok"] = true;
        $reply["respuesta"] = "Usuario: $usuario";
    } else {
        $reply["respuesta"] = "Hay más de un usuario con esas credenciales" . $usuario . " - " . $contrasena;
    }
} else {
    $reply["respuesta"] = $consulta . "<br>" . $dbConn->error;
}

echo json_encode($reply);

$statement->close();
$dbConn->close();

?>