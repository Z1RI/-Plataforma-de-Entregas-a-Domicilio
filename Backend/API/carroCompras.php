<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");
    include_once("../class/ObjetoClass.php");
    //sleep(5);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $usuario = new Producto($_POST["email"], $_POST["nombreproducto"], $_POST["precio"],$_POST["Cantidad"], $_POST["Codigo"]);
            $usuario->guardarProducto($_POST["email"]);
            $resultado["mensaje"] = "Guardar usuario, informacion:". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET':

            if(isset($_GET['categoriaSeleccionada'], $_GET['empresa'])){
                //Empresa::obtenerProductos($_GET['categoriaSeleccionada'], $_GET['empresa']);
            }


        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
           // $usuario = new Usuario($_PUT["nombre"], $_PUT["apellido"], $_PUT["fechaNacimiento"],$_PUT["pais"]);
            //$usuario -> actualizarUsuario($_GET['id']);

            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
        break;
        case 'DELETE':
            //Usuario::eliminarUsuarios($_GET["id"]);
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }

?>