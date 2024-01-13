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

    <link rel="stylesheet" href="../css/AdministracionLandingCss.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9dfc205b5c.js" crossorigin="anonymous"></script>
</head>
<body style="background-color: rgb(68, 196, 189);">
    
    <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid" style="background-color: #4699C2;margin-top: -10px;margin-bottom: -10px; padding: 1%;">
            <p style="position: absolute; margin-left: 10%; margin-top: -2%; color:azure"><?php echo $_COOKIE["email"]?></p>
            <a class="navbar-brand"><img src="../img/UnkowUser.jpg" style="border-radius: 15px;" width="70" height="70" alt="" onclick="Menu('<?php echo$_COOKIE['email']?>')"></a>
            <form class="d-flex">
            </form>
        </div>
    </nav>

    <select class="form-select" id="barraCategorias" onchange="generarEmpresas()" style="width: 300px; margin-left: 100px; margin-top: 40px; position: absolute;">
        <option disabled selected hidden>Categorias</option>
    </select>

    <input id="AgregarbuttonPrincipal" style="margin-left: 550px; display: none;" type="button" value="Agregar" onclick="AgregarEmpresaButton()">
    <p style="position: absolute; margin-left: 1170px; margin-top: 3%;">Pedidos Pendientes</p>
    <input id="LadingButtom" style="margin-left: 1350px;" type="button" value="Solicitudes de Motoristas" onclick="SolicitudMotoristaModal()">

    <dir class="flexContainer">

        <section class="Sections" id="Empresas">
            <div class="container-fluid">
                <div class="row" id="listaTiendas">
                    

                </div>
            </div>  
        </section>
        
        <section class="Sections" id="Motoristas">

            <ul class="list-group">
                <li class="list-group-item">
                    <p id="HistorialText" >Pedido 1</p>
                    <p id="HistorialText" style="position: absolute;">Descripcion</p>
                    <input type="button" value="ver" style="margin-left: 80%;  border-radius: 10px;" onclick="VerOrdenMotoristaAdministrativo()">
                    <p id="HistorialText" style="">Total</p>
                </li>
                <li class="list-group-item">
                    <p id="HistorialText" >Pedido 2</p>
                    <p id="HistorialText" style="position: absolute;">Descripcion</p>
                    <input type="button" value="ver" style="margin-left: 80%;  border-radius: 10px;"  onclick="VerOrdenMotoristaAdministrativo()">
                    <p id="HistorialText" style="">Total</p>
                </li>
            </ul>
        

        </section>

    </dir>

    <div id="AdministradorModal" class="modal" >
        <div class="modal-dialog modal-lg" >
            <div class="modal-content">
                <div class="modal-body" >
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <section id="modalBody">

                    </section>
                </div>
            </div>
        </div>
    </div>


    <div id="AdministradorModal2" class="modal" style="background-color: block; margin-top: 200px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: rgb(68, 196, 189);">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="modalBody2" class="modal-body" style="height: 360px; ">

                </div>
            </div>
        </div>
    </div>


    <div id="AlternativeModal" class="modal"  style="background-color: block; margin-top: 70px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body"  style="height: 700px; background-color: rgb(82, 129, 184);"  >
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <section id="AlternativeModalBody">
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

                    </section>

                </div>
            </div>
            </div>
        </div>
 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="../js/AdministradorController.js"></script>
</body>
</html>