<?php
    session_start();
    header("Content-Type: application/json");
    include_once("../class/UsuarioClass.php");

    /* session_start();
    if (!isset($_SESSION["token"])){
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
    }    
    if (!isset($_COOKIE["token"])){   
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
    }    
    if ($_SESSION["token"] != $_COOKIE["token"]){ 
        echo '{"mensaje":"Acceso no autorizado"}';  
        exit;
    }  */   

    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
                //guardar
                $usuario = Usuario::verificarUsuario($_POST['email'], $_POST['password']);
                if ($usuario){
                    $resultado = array(
                        "codigoResultado"=>1,
                        "tipoUsuario"=> $usuario["tipoUsuario"],
                        "mensaje"=>"Usuario autenticado",
                        "token"=>sha1(uniqid(rand(),true)),
                    );
                //echo '{"codigoResultado":1,"mensaje":"Usuario autenticado","token":"'.sha1(uniqid(rand(),true)).'"}';
                $_SESSION["token"] = $resultado["token"];
                setcookie("token",$resultado["token"],time()+(60*60*24*32),"/");
                setcookie("email",$usuario["email"],time()+(60*60*24*32),"/");
                echo json_encode($resultado);
                }else{
                    setcookie("token","",time()-1,"/");
                    setcookie("email","",time()-1,"/");
                    echo '{"codigoResultado":0,"mensaje":"Usuario/Password incorrectos"}'; 

                }
        break;
        
        case 'GET':
            if (isset($_GET['id'])){
                
                
            }else{
                
            }
        break;
        case 'PUT':
                //Actualizar
        break;
        case 'DELETE':
            //Eliminar
        break;
    }
?>