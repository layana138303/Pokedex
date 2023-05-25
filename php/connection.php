<?php

class Connection {
  // private $host = "eim-srv-mysql";
  // private $user = "iw23_u_138303";
  // private $pass = "fsociety";
  // private $database = "iw23_db_138303";

  private $host = "localhost";
  private $user = "root";
  private $pass = "00000000";
  private $database = "pokedex";
  
  private static $instance = null;
  private $connection = null;

  private function __construct() {
    $this->connect();
  }

  public function connect() {
    $this->connection = new mysqli($this->host, $this->user, $this->pass, $this->database);
    
    if ($this->connection->connect_error) {
      die("Connection failed: " . $this->connection->connect_error);
    }
  }

  public static function getInstance() {
    if (null === self::$instance) {
      self::$instance = new self();
    }
    return self::$instance;
  }

  public function getConnection() {
    return $this->connection;
  }
}

?>