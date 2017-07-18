<?php
header("Content-disposition: attachment; filename=Fa15Application.doc");
header("Content-type: application/msword");
readfile("Fa15Application.doc");
?>