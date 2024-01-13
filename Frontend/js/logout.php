<?php
    session_start();
    session_destroy();
    setcookie("token","",time()-1,"/");
    setcookie("email","",time()-1,"/");
    setcookie("tipoUsuario","",time()-1,"/");
    header("location: ../index.html")
?>