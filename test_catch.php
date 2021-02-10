<?php

//$url = "http://localhost:3003/user/1";

echo 'test';
$result = file_get_contents($url);
// Will dump a beauty json :3
echo var_dump(json_decode($result, true));

?>