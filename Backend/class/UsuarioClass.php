<?php

class Usuario{

    private $firstName;
    private $lastName;
    private $password;
    private $birthdate;
    private $email;
    private $NumeroTelefono;    
    private $tipoUsuario;

    public function __construct(
        $firstName,
        $lastName,
        $password,
        $birthdate,
        $email,
        $NumeroTelefono,
        $tipoUsuario
    ){
        $this-> firstName = $firstName;
        $this-> lastName = $lastName;
        $this-> password = $password;
        $this-> birthdate = $birthdate;
        $this-> email = $email;
        $this-> NumeroTelefono = $NumeroTelefono;
        $this-> tipoUsuario = $tipoUsuario;
    }


    /**
     * Get the value of firstName
     */ 
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstName
     *
     * @return  self
     */ 
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get the value of lastName
     */ 
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastName
     *
     * @return  self
     */ 
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of birthdate
     */ 
    public function getBirthdate()
    {
        return $this->birthdate;
    }

    /**
     * Set the value of birthdate
     *
     * @return  self
     */ 
    public function setBirthdate($birthdate)
    {
        $this->birthdate = $birthdate;

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

    /**
     * Get the value of NumeroTelefono
     */ 
    public function getNumeroTelefono()
    {
        return $this->NumeroTelefono;
    }

    /**
     * Set the value of NumeroTelefono
     *
     * @return  self
     */ 
    public function setNumeroTelefono($NumeroTelefono)
    {
        $this->NumeroTelefono = $NumeroTelefono;

        return $this;
    }

    /**
     * Get the value of tipoUsuario
     */ 
    public function getTipoUsuario()
    {
        return $this->tipoUsuario;
    }

    /**
     * Set the value of tipoUsuario
     *
     * @return  self
     */ 
    public function setTipoUsuario($tipoUsuario)
    {
        $this->tipoUsuario = $tipoUsuario;

        return $this;
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
                "tipoUsuario"=> $this->tipoUsuario,
                "historial" => []
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

    public function actualizarUsuario($email){
        $contenidoArchivo = file_get_contents("../data/Usuario.json");
        $usuarios = json_decode($contenidoArchivo, true);
        //$usuario = $usuarios[$indice];
        //$nombreUsuario = $this -> email;
        
        for ($i=0; $i<sizeof($usuarios); $i++) {
            if ($usuarios[$i]["email"] == $email && $usuarios[$i]["ordenes"] == null){
                $usuario = array(
                    "firstName"=> $this->firstName,
                    "lastName" => $this->lastName,
                    "password"=> $this->password,
                    "birthdate"=> $this->birthdate,
                    "email" => $this->email,
                    "NumeroTelefono"=> $this->NumeroTelefono,
                    "tipoUsuario"=> $usuarios[$i]["tipoUsuario"] 
                    );

                    $usuarios[$i] = $usuario;
                    $archivo = fopen('../data/Usuario.json','w');
                    fwrite($archivo, json_encode($usuarios));
                    fclose($archivo);
            
                }elseif(($usuarios[$i]["email"] == $email)){

                    $usuario = array(
                        "firstName"=> $this->firstName,
                        "lastName" => $this->lastName,
                        "password"=> $this->password,
                        "birthdate"=> $this->birthdate,
                        "email" => $this->email,
                        "NumeroTelefono"=> $this->NumeroTelefono,
                        "tipoUsuario"=> $usuarios[$i]["tipoUsuario"] ,
                        "ordenes" => $usuarios[$i]["ordenes"]
                        );
                        $usuarios[$i] = $usuario;
                        $archivo = fopen('../data/Usuario.json','w');
                        fwrite($archivo, json_encode($usuarios));
                        fclose($archivo);
            }else{
                echo "nada1";
            };
        }  
        }
    }

?>