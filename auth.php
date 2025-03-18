<?php
session_start();
print_r($_POST);

if ($_POST["pass"] == "test") {
    $_SESSION["logged_in"] = "true";
}
?>