<?php
    //session_start();
    //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");
    include_once("../class/OrdenesClass.php");
    //sleep(5);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario($_POST["firstName"], $_POST["lastName"], $_POST["password"],$_POST["birthdate"], $_POST["email"], $_POST["NumeroTelefono"],$_POST["tipoUsuario"]);
            $usuario->guardarUsuario();
            $resultado["mensaje"] = "Guardar usuario, informacion:". json_encode($_POST);
            echo json_encode($resultado);
            
        break;
        case 'GET':
            if (isset($_GET['id'])){
                Orden::obtenerOrden($_GET['id']);
                
            }else{
                Orden::obtenerOrdenes();
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario($_PUT["firstName"], $_PUT["lastName"], $_PUT["password"],$_PUT["birthdate"], $_PUT["email"], $_PUT["NumeroTelefono"], "null");
            $usuario -> actualizarUsuario($_PUT["usuarioCambiar"]);
            setcookie("email","",time()-1,"/");
            setcookie("email",$_PUT["email"],time()+(60*60*24*32),"/");
            $resultado["mensaje"] =  "Actualizar un usuario con el Usuario: " .$_PUT["email"].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':
            Usuario::eliminarProducto($_GET["nombreUsuario"],$_GET["indice"]);
            //$resultado["mensaje"] = "Eliminar un prudcto del usuario ".$_GET["nombreUsuario"] . "con el id: ".$_GET['indice'];
            //echo json_encode($resultado);
        break;
    }
?>