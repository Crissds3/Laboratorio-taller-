<?php 
/* Validar que sesión no haya expirado */ 
session_start();
if (!isset($_SESSION['sso'])){
	session_unset();
	session_destroy();	
    // Ubicación de archivo -> inter.php.
    Header("Location: https://huemultest.utalca.cl/tst/inter.php");
}








?>