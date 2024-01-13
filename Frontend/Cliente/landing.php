
<?php
    session_start();
    if (!isset($_SESSION["token"]))
        header("location: ../index.html");
    if (!isset($_COOKIE["token"]))    
        header("location: ../index.html");
    if ($_SESSION["token"] != $_COOKIE["token"]) 
        header("location: ../index.html");   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--Pagina de Registro-->
    <link rel="stylesheet" href="../css/clienteCss.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9dfc205b5c.js" crossorigin="anonymous"></script>


</head>
<body style="background-color: #4699C2;">

    <section id="formulario">
        
        <section id="top">
            <img src="../img/UnkowUser.jpg" id="UnknowUser" width="70" height="70" onclick="Menu('<?php echo$_COOKIE['email']?>')">
            <div id ="nombreUsuarioSession" style="position: absolute; margin-left: 30%; margin-top: 5%;" ><?php echo $_COOKIE["email"]?></div>
            <i class="fas fa-arrow-left position-absolute top-0 end-0 fa-lg" style="margin: 13%;" onclick=""></i>
            <i class="fas fa-shopping-cart fa-2x" id="TopIcon" onclick="VerCarritodeCompras('<?php echo$_COOKIE['email']?>')"></i>
        </section>


        <section id="LandingBody">

            <select class="form-select" id="BarraEmpresas" onchange="generarEmpresas('<?php echo$_COOKIE['email']?>')" style="width: 250px; margin-left: 40px; margin-top: 40px; position: absolute;">
                <option disabled selected hidden>Categorias</option>
            </select>  
            
            
            <section class="Sections" id="ListaEmpresas">

                <div class="container-fluid overflow-auto">
                    <div class="row" id="listaTiendas">
                    </div>
                </div>  
                
            </section>




        </section>


        <div id="ModalClienteProductos" class="modal">
            <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-body" >
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <section id="modalBody" class="overflow-auto" >

                    </section>
                    <section id="modalBottom" >

                    </section>
                </div>
            </div>
            </div>
        </div>


        <div id="ModalEstructura2" class="modal">
            <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-body" id="Modal2Body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <section id="modalEstructureBody2" style="background-color: white; width: 310px; height: 170px; color: black; padding: 3%;" >

                    </section>
                </div>
            </div>
            </div>
        </div>

        <div id="ModalEstructura3" class="modal">
            <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-body" style="height: 400px; background-color: tomato;" >
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    <section id="modalBodyTomato" style="height: 340px; color: black; background-color: white;">

                    <section id="clickImagen"></section>    


                    <section id="editarRegistro" style="background-color:aqua"></section>

                    </section>

                </div>
            </div>
            </div>
        </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="../js/ClienteController.js"></script>
</body>
</html>