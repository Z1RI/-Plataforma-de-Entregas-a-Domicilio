<?php

class Producto{

    private $email;
    private $nombreProducto;
    private $precio;
    private $Cantidad;
    private $Codigo;

    public function __construct(
        $email,
        $nombreProducto,
        $precio,
        $Cantidad,
        $Codigo
    ){
        $this -> $email = $email;
        $this-> nombreProducto = $nombreProducto;
        $this-> precio = $precio;
        $this-> Cantidad = $Cantidad;
        $this-> Codigo = $Codigo;
    }

    public  function guardarProducto($email){
        $contenidoArchivo = file_get_contents('../data/Usuario.json');
        $usuarios = json_decode($contenidoArchivo, true);
        //$datoComparativo = $this->tipoUsuario;
        $nombreUsuario = $this -> email;
        $nombreProducto = $this-> nombreProducto;

        $nuevoProducto = array(
            "nombreProducto"=> $this->nombreProducto,
            "precio" => $this->precio,
            "Codigo"=> $this->Codigo,
            "cantidad"=> $this->Cantidad
            );

        for ($i=0; $i < sizeof($usuarios); $i++) { 
            if ($usuarios[$i]["email"] == $email){
                    $ordenes = $usuarios[$i]["ordenes"];

                    array_push($ordenes, $nuevoProducto);

                    $usuarios[$i]["ordenes"] = $ordenes;
                    //echo json_encode($usuarios[$i]);
                    $archivo = fopen('../data/Usuario.json',"w");
                    fwrite($archivo,json_encode($usuarios));
                    fclose($archivo);
                break;
            }

    }
}

    public static function verificarUsuario($email,$password){
        $contenidoArchivoUsuarios = file_get_contents('../data/Usuario.json');
        $usuarios = json_decode($contenidoArchivoUsuarios,true);
        for ($i=0; $i < sizeof($usuarios); $i++) { 
            if ($usuarios[$i]["email"]== $email && $usuarios[$i]["password"]==$password){
                return $usuarios[$i];
            }
        }
        return null;
    }

    public function guardarUsuario(){
        $contenidoArchivo = file_get_contents('../data/Usuario.json');
        $usuarios = json_decode($contenidoArchivo, true);
        $datoComparativo = $this->tipoUsuario;
        if($datoComparativo == "1")
            $usuarios[] = array(
                "firstName"=> $this->firstName,
                "lastName" => $this->lastName,
                "password"=> $this->password,
                "birthdate"=> $this->birthdate,
                "email" => $this->email,
                "NumeroTelefono"=> $this->NumeroTelefono,
                "tipoUsuario"=> $this->tipoUsuario,
                "ordenes" => []
                );
            else        
        $usuarios[] = array(
                "firstName"=> $this->firstName,
                "lastName" => $this->lastName,
                "password"=> $this->password,
                "birthdate"=> $this->birthdate,
                "email" => $this->email,
                "NumeroTelefono"=> $this->NumeroTelefono,
                "tipoUsuario"=> $this->tipoUsuario
        );
            
        $archivo = fopen('../data/Usuario.json',"w");
        fwrite($archivo,json_encode($usuarios));
        fclose($archivo);
    }

    public static function obtenerUsuario($indice){
        $contenidoArchivo = file_get_contents("../data/Usuario.json");
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i=0; $i < sizeof($usuarios); $i++) { 
            if ($usuarios[$i]["email"]== $indice){
                $usuario = $usuarios[$i];
                echo json_encode($usuario);
                break;
            }
        }
        //return null;
       // echo json_encode($usuarios[$indice]);       
    }

    public static function eliminarProducto($nombreUsuario, $indice){
        $contenidoArchivo = file_get_contents("../data/Usuario.json");
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i=0; $i < sizeof($usuarios); $i++) { 
            if ($usuarios[$i]["email"] == $nombreUsuario){
                $usuario = $usuarios[$i]["ordenes"];
               // echo json_encode($usuario);
                array_splice($usuario, $indice, 1);
                //echo json_encode($usuario);
                $usuarios[$i]["ordenes"] = $usuario;
                echo json_encode($usuarios[$i]);

            
                $archivo = fopen('../data/Usuario.json','w');
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);
                
                break;
            }

        /*
        array_splice($usuarios, $indice, 1);
        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
            */
        }


    }

    /**
     * Get the value of nombreProducto
     */ 
    public function getNombreProducto()
    {
        return $this->nombreProducto;
    }

    /**
     * Set the value of nombreProducto
     *
     * @return  self
     */ 
    public function setNombreProducto($nombreProducto)
    {
        $this->nombreProducto = $nombreProducto;

        return $this;
    }

    /**
     * Get the value of precio
     */ 
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set the value of precio
     *
     * @return  self
     */ 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }

    /**
     * Get the value of Cantidad
     */ 
    public function getCantidad()
    {
        return $this->Cantidad;
    }

    /**
     * Set the value of Cantidad
     *
     * @return  self
     */ 
    public function setCantidad($Cantidad)
    {
        $this->Cantidad = $Cantidad;

        return $this;
    }

    /**
     * Get the value of Codigo
     */ 
    public function getCodigo()
    {
        return $this->Codigo;
    }

    /**
     * Set the value of Codigo
     *
     * @return  self
     */ 
    public function setCodigo($Codigo)
    {
        $this->Codigo = $Codigo;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }
}

?>