<?php 

class Empresa{
        private $nombreCategoria;
        private $descripcion;
        private $color;
        private $icono;
        private $empresas;
        
        public function __construct(
            $nombreCategoria,
            $descripcion,
            $color,
            $icono,
            $empresas,
        ){
            $this-> nombreCategoria = $nombreCategoria;
            $this-> descripcion = $descripcion;
            $this-> color = $color;
            $this-> icono = $icono;
            $this-> empresas = $empresas;
        }

        public static function obtenerEmpresas(){
            $contenidoArchivo = file_get_contents("../data/categorias.json");
            echo $contenidoArchivo;
        }

        public static function obtenerEmpresa($id){
            $contenidoArchivo = file_get_contents('../data/categorias.json');
            $usuarios = json_decode($contenidoArchivo, true);
            $usuario = null;
            for ($i=0; $i<sizeof($usuarios); $i++) {
                    if($usuarios[$i]["nombreCategoria"]==$id){
                            $usuario = $usuarios[$i];
                            echo json_encode($usuario);
                            break;
                    }
            }
            //$usuario[]
        }

        public static function obtenerProductos($categoriaSeleccionada , $empresa){
            $contenidoArchivo = file_get_contents('../data/categorias.json');
            $categorias = json_decode($contenidoArchivo, true);
            $categoria = null;
            for ($i=0; $i<sizeof($categorias); $i++) {
                if($categorias[$i]["nombreCategoria"]==$categoriaSeleccionada){
                    $listaEmpresas = $categorias[$i]["empresas"];
                    $listaProductos = $listaEmpresas[$empresa]["productos"];
                        echo json_encode($listaProductos);
                        break;
                }
            }
        }

        public function guardarEmpresa($categoriaid, $nombreEmpresa, $color, $imagen){
                $contenidoArchivo = file_get_contents('../data/categorias.json');
                $usuarios = json_decode($contenidoArchivo, true);
                //$datoComparativo = $this->tipoUsuario;
                for ($i=0; $i<sizeof($usuarios); $i++) {
                        if($usuarios[$i]["nombreCategoria"] == $categoriaid){
                                $empresa = array(
                                        "nombreEmpresa"=> $nombreEmpresa,
                                        "color" => $color,
                                        "imagen"=> $imagen,
                                        "productos"=> [],
                                );
                                $empresas = $usuarios[$i]["empresas"];
                                array_push($empresas, $empresa);
                                $usuarios[$i]["empresas"] = $empresas;

                                $archivo = fopen('../data/categorias.json',"w");
                                fwrite($archivo,json_encode($usuarios));
                                fclose($archivo);
                                break;

                        }
                }
                    

        }

        /**
         * Get the value of nombreCategoria
         */ 
        public function getNombreCategoria()
        {
                return $this->nombreCategoria;
        }

        /**
         * Set the value of nombreCategoria
         *
         * @return  self
         */ 
        public function setNombreCategoria($nombreCategoria)
        {
                $this->nombreCategoria = $nombreCategoria;

                return $this;
        }

        /**
         * Get the value of descripcion
         */ 
        public function getDescripcion()
        {
                return $this->descripcion;
        }

        /**
         * Set the value of descripcion
         *
         * @return  self
         */ 
        public function setDescripcion($descripcion)
        {
                $this->descripcion = $descripcion;

                return $this;
        }

        /**
         * Get the value of color
         */ 
        public function getColor()
        {
                return $this->color;
        }

        /**
         * Set the value of color
         *
         * @return  self
         */ 
        public function setColor($color)
        {
                $this->color = $color;

                return $this;
        }

        /**
         * Get the value of icono
         */ 
        public function getIcono()
        {
                return $this->icono;
        }

        /**
         * Set the value of icono
         *
         * @return  self
         */ 
        public function setIcono($icono)
        {
                $this->icono = $icono;

                return $this;
        }

        /**
         * Get the value of empresas
         */ 
        public function getEmpresas()
        {
                return $this->empresas;
        }

        /**
         * Set the value of empresas
         *
         * @return  self
         */ 
        public function setEmpresas($empresas)
        {
                $this->empresas = $empresas;

                return $this;
        }


}
?>