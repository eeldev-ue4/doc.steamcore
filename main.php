<?php
session_start();
if (!isset($_SESSION["logged_in"])) {
    $_SESSION["logged_in"] = 0;
}

if (strpos($_GET["url"], '/') == true) {
    $file = $_GET["url"] . "/index.html";
} else {
    $file = $_GET["url"] . "/index.html";
}

if (strpos($_GET["url"], 'multiplayer') == true) {
    print "require auth";
} else {
    print "no auth required";
}

if ($_SESSION["logged_in"] == "true") {
    print "logged in";
    print_r($_SESSION);
}

if (file_exists($file)) {
    $content = file_get_contents($file);
    print $content;
} else {
echo "nope";
}
echo $file;

?>

<form action="/auth.php" method="post">
    <input type="text" name="pass">
    <input type="submit" value="submit">
</form>