
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
    <link rel="stylesheet" href="../css/Motorista.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9dfc205b5c.js" crossorigin="anonymous"></script>


</head>
<body style="background-color: #4699C2;">

    <section id="formulario">
        
        <section id="top">
            <img src="../img/UnkowUser.jpg" id="UnknowImage" width="70" height="70" onclick="Menu('<?php echo$_COOKIE['email']?>')">
            <p style="position: absolute; margin-left: 30%; margin-top: 5%;"><?php echo $_COOKIE["email"]?></p>
            <i class="fas fa-arrow-left position-absolute top-0 end-0 fa-lg" style="margin: 13%;" onclick=""></i>
            <input id="TopButton" type="button" value="Historial" onclick="EjecutarModalHistorial('<?php echo$_COOKIE['email']?>')">
        </section>

        <section id="LandingBody">
            
        </section>



        <section id="bottom">
            <input id="BottomButton" type="button" value="Ver Ordenes" onclick="EjecutarModalVerOrdenes()">
            <input id="BottomButton" type="button" value="En Proceso" onclick="EjecutarModalProceso()">

            <section id="OrdenesProceso">
              <p style="color: black; margin-left: 30%;">Orden en Proceso</p>
              <p style="color: black; margin-left: 37%;">Descripcion</p>
              <input id="LandingBottomButton" type="button" value="Ver" onclick="OrdenesProcesoVerButtom()">
            </section>
        </section>
    
    </section>


    <div id="ModalMotorista" class="modal">
        <div class="modal-dialog" >
          <div class="modal-content">
            <div class="modal-body" >
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <section id="modalBody">

                </section>

                <section id="modalBottom">

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
      <script src="../js/MotoristaController.js"></script>
  </body>
  </html>