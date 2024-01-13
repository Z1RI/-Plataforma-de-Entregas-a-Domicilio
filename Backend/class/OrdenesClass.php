<?php 
class Orden{
    private $OrdenNumero;
    private $fecha;
    private $direccion;
    private $estado;
    private $productos;

    public function __construct(
        $OrdenNumero,
        $fecha,
        $direccion,
        $estado,
        $productos
    ){
        $this-> OrdenNumero = $OrdenNumero;
        $this-> fecha = $fecha;
        $this-> direccion = $direccion;
        $this-> estado = $estado;
        $this-> productos = $productos;
    }





    /**
     * Get the value of OrdenNumero
     */ 
    public function getOrdenNumero()
    {
        return $this->OrdenNumero;
    }

    /**
     * Set the value of OrdenNumero
     *
     * @return  self
     */ 
    public function setOrdenNumero($OrdenNumero)
    {
        $this->OrdenNumero = $OrdenNumero;

        return $this;
    }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }

    /**
     * Get the value of direccion
     */ 
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     *
     * @return  self
     */ 
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

    /**
     * Get the value of estado
     */ 
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     *
     * @return  self
     */ 
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get the value of productos
     */ 
    public function getProductos()
    {
        return $this->productos;
    }

    /**
     * Set the value of productos
     *
     * @return  self
     */ 
    public function setProductos($productos)
    {
        $this->productos = $productos;

        return $this;
    }

    public static function obtenerOrdenes(){
        $contenidoArchivo = file_get_contents("../data/ordenes.json");
        echo $contenidoArchivo; 
    }

    public static function obtenerOrden($id){
        $contenidoArchivo = file_get_contents("../data/ordenes.json");
        $usuarios = json_decode($contenidoArchivo, true);
        for ($i=0; $i < sizeof($usuarios); $i++) { 
            if ($usuarios[$i]["OrdenNumero"]== $id){
                echo json_encode($usuarios[$i]);
            }
        }

        
    }
}

?>