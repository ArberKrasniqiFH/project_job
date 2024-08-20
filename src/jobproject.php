<?php
header("Access-Control-Allow-Origin: *"); //für JS-Zugriffe von anderen Hosts
require_once("db_login.php");
if (isset($_GET['action']) && $_GET['action'] === "list") {
$mysqli = login("AdressDB");
$result = $mysqli->query("SELECT * FROM adressen");
$array = array();
while ($adresse = $result->fetch_assoc()) {
$array[] = $adresse;
}
echo json_encode($array);
}
?>
<?php
$server = "localhost";
$user = "root";
$passwort = "";
$database = "adressverwaltungdb";
$tabelle = "userverwaltung";
?>
<div style="display: flex; align-items: center; justify-content: center; margin: 0;">
    <form method="POST">
        <?php
        $mysqli = new mysqli($server, $user, $passwort, $database);
        $mysqli->set_charset("utf8");
        if ($mysqli->connect_error) {
            echo "Fehler bei der Verbindung mit der Datenbank.";
            exit();
        }
        ?>
<form action="uebung9_login.php" method="POST">
  <input type="text" name="username" >
  <input type="text" name= "password" >
 <input type="submit" name="submit">

<?php 
$result = $mysqli->query("SELECT * FROM userverwaltung");
$username = $_POST['username'];
$password = $_POST['password'];

if (isset($_POST['submit'])){
    while ($adrresse = $result->fetch_object()) {
    if($username==$adrresse->username&&sha1($password)==$adrresse->password&& $adrresse->admin==1  ){
        header('Location: http://localhost/webtech/uebung9_bearbeitung.php');
    exit;
        }
    }
}
?>
</form> 