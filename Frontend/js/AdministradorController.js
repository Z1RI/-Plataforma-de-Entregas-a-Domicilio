var colorCategoria = "";
function generarCategorias(){
    axios({
        url:'../../Backend/API/empresas.php',
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res.data);
        document.getElementById('barraCategorias').innerHTML ='<option disabled selected hidden>Categorias</option>';
        for (let i = 0; i < res.data.length; i++) {
            document.getElementById('barraCategorias').innerHTML += 
            `
            <option>${res.data[i].nombreCategoria}</option>

            `;
        }
    }).catch(error=>{
        console.error(error);
    });

}
generarCategorias()

function generarEmpresas(){
    //email = nombreUsuarioRegistro;
    document.getElementById('listaTiendas').innerHTML = '';
    document.getElementById('AgregarbuttonPrincipal').style.display = "block";
    let categoriaSeleccionada = document.getElementById("barraCategorias").value;
    axios({
        url:'../../Backend/API/empresas.php' + `?id=${categoriaSeleccionada}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res.data);
        document.getElementById('listaTiendas').innerHTML ='';
        
        for (let i = 0; i < res.data.empresas.length; i++) {
            colorCategoria = res.data.empresas[i].color
            document.getElementById('listaTiendas').innerHTML += 
                `
            <div class=" col" style="margin: 10px;"> 
                <div class="card" style="width: 15rem; backGround-color: ${res.data.empresas[i].color}; color:white " onclick="">
                    <div class="card-body shop-pointer " onclick="ModificarCardFunction()">
                        <h5 class="card-title  ">${res.data.empresas[i].nombreEmpresa}</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!</p>
                        <button class="btn btn-outline btn-sm"  onclick="EliminarCardFunction()"><i class="fas fa-trash" style="float: right;"></i></button>
                    </div>
                </div>
            </div>

            `;
        }
    }).catch(error=>{
        console.error(error);
    });
    console.log(categoriaSeleccionada);
}

function AgregarEmpresaButton(){
    let categoriaSeleccionada = document.getElementById("barraCategorias").value;
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal).show();
    document.getElementById('modalBody').innerHTML += 
    `
    
    <img src="../img/empty.jpg" alt="" width="150" height="150" style="margin-left: 40px; position: absolute;">
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Empresa" id="nombreEmpresaAgregar"></input>
    <textarea  style="margin-left: 230px; height: 110px; width: 450px;"  placeholder="Descripcion"></textarea>
    <input id="" style="margin-left: 60px; margin-top: 70px; margin-bottom: 10px;" type="button" value="Agregar Producto" onclick="productoModal()">
    <section id="ListaProductosSection"></section>
    <input id="" style="margin-left: 607px; margin-top: 20px; margin-bottom: 10px;" type="button" value="Agregar" onclick="AgregarEmpresa('${categoriaSeleccionada}')">
    
    `;

}

function AgregarEmpresa(categoriaid){
    let empresa ={
        categoria: categoriaid,
        nombreEmpresa: document.getElementById('nombreEmpresaAgregar').value,
        color: colorCategoria,
        imagen: "img/banner.jpg",
        productos: [],
    };
    console.log('Empresa a guardar', empresa)
    axios({
        method:'POST',
        url: '../../Backend/API/empresas.php',
        responseType:'json',
        data: empresa
    }).then(res=>{
        document.getElementById('nombreEmpresaAgregar').value="";
        alert("Registrado con Exito");
        //window.location.href = "../index.html"
        console.log(res);
    }).catch(error=>{
        console.error(error);
    });
}


function productoModal(){
    document.getElementById('modalBody2').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal2).show();
    document.getElementById('modalBody2').innerHTML += 
    `
    
    <img src="../img/empty.jpg" alt="" width="150" height="150" style="margin-left: 15px; position: absolute;">
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Empresa"></input>
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Precio"></input>
    <textarea  style="margin-left: 7px; margin-top: 90px; height: 110px; width: 450px;"  placeholder="Descripcion"></textarea>
    <input id="" style="margin-left: 360px; margin-top: 10px; margin-bottom: 1px; background-color: white);" type="button" value="Agregar" onclick="">
    

    `
}

function ModificarCardFunction(){
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal).show();
    document.getElementById('modalBody').innerHTML += 
    `
    <img src="../img/empty.jpg" alt="" width="150" height="150" style="margin-left: 40px; position: absolute;">
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Empresa"></input>
    <textarea  style="margin-left: 230px; height: 110px; width: 450px;"  placeholder="Descripcion"></textarea>
    <input id="" style="margin-left: 60px; margin-top: 70px; margin-bottom: 10px;" type="button" value="Agregar Producto" onclick="productoModal()">
    <section id="ListaProductosSection"></section>
    <input id="" style="margin-left: 607px; margin-top: 20px; margin-bottom: 10px;" type="button" value="Guardar Cambios" onclick="">
    
    `
}

function ModificarproductoModal(){
    document.getElementById('modalBody2').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal2).show();
    document.getElementById('modalBody2').innerHTML += 
    `
    
    <img src="../img/empty.jpg" alt="" width="150" height="150" style="margin-left: 15px; position: absolute;">
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Empresa"></input>
    <input style="margin-left: 230px; margin-bottom: 10px;"  type="text" placeholder="Precio"></input>
    <textarea  style="margin-left: 7px; margin-top: 90px; height: 110px; width: 450px;"  placeholder="Descripcion"></textarea>
    <input id="" style="margin-left: 360px; margin-top: 10px; margin-bottom: 1px; background-color: white);" type="button" value="Agregar" onclick="">
    

    `
}
function EliminarCardFunction(){
    console.log("Eliminando")
}

function VerOrdenMotoristaAdministrativo(){
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal).show();
    document.getElementById('modalBody').innerHTML += 
    `   
    <section id= "prueba "style="backGround-color: rgb(45, 97, 156); height: 640px; width: 700px; margin: 4%; padding: 5%;">
    <h3>Pedidos</h3>
    <div type="textarea" class="scrollable" style="height: 290px; width: 630px; background-color: white; overflow-y: auto;" >

        <ul class="list-group">
            <li class="list-group-item">
                <p id="HistorialText">Producto 1</p>
                <p id="HistorialText" >Descripcion</p>
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Producto 1</p>
                <p id="HistorialText" >Descripcion</p>
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Producto 1</p>
                <p id="HistorialText" >Descripcion</p>
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Producto 1</p>
                <p id="HistorialText" >Descripcion</p>
            </li>
        </ul>
    </div>
    <p id="HistorialText" style="padding: 1%; color: white;">Total</p>
    <input id="" style="margin-left: 60px; margin-bottom: 10px;" type="button" value="Motorista Disponibles" onclick="VerMotoristasDisponibles()">
    <p id="HistorialText" style="margin-left: 60px; padding: 1%; color: white;">Motorista Asignado</p>
    <img src="../img/UnkowUser.jpg" style=" position: absolute; margin-left: 60px; border-radius: 15px;" width="70" height="70" alt="">
    <p id="HistorialText" style="margin-left: 145px;  color: white;">Nombre</p>
    <p id="HistorialText" style=" margin-left: 145px; color: white;">ID</p>

    <section id="map"></section>    

    </section>

    <input id="" style="margin-left: 660px; margin-bottom: 10px;" type="button" value="Aceptar" onclick="">
    
    `;
}

function VerMotoristasDisponibles(){
    document.getElementById('modalBody2').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal2).show();
    document.getElementById('modalBody2').innerHTML += 
    `
    <section id= "prueba "style="backGround-color: rgb(45, 97, 156); height: 320px; width: 450px; margin: 1%; padding: 4%;">

    <div type="textarea" class="scrollable" style="height: 290px; width: 410px; background-color: white; overflow-y: auto;" >

        <ul class="list-group">
            <li class="list-group-item">
                <p id="HistorialText">Nombre </p>
                <p id="HistorialText" style="position: absolute;" >ID</p>
                <input type="button" value="Asignar" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="">
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Nombre </p>
                <p id="HistorialText" style="position: absolute;" >ID</p>
                <input type="button" value="Asignar" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="">
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Nombre </p>
                <p id="HistorialText" style="position: absolute;" >ID</p>
                <input type="button" value="Asignar" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="">
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Nombre </p>
                <p id="HistorialText" style="position: absolute;" >ID</p>
                <input type="button" value="Asignar" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="">
            </li>
            <li class="list-group-item">
                <p id="HistorialText">Nombre </p>
                <p id="HistorialText" style="position: absolute;" >ID</p>
                <input type="button" value="Asignar" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="">
            </li>
            
        </ul>
    </div>

</section>

    `
}

function SolicitudMotoristaModal(){
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AdministradorModal).show();
    document.getElementById('modalBody').innerHTML += 
    `

    
    <section id= "prueba "style="backGround-color: rgb(45, 97, 156); height: 720px; width: 750px; margin: 1%; padding: 4%;">

        <div type="textarea" class="scrollable" style="height: 670px; width: 690px; background-color: white; overflow-y: auto;" >

            <ul class="list-group">
                <li class="list-group-item">
                    <p id="HistorialText" style="position: absolute;"># Solicitud</p>
                    <input type="button" value="Ver" style="margin-left: 80%;  border-radius: 10px; margin-top: -5px;"  onclick="verSolicitudMotoristaModal()">
                </li>   
            </ul>      
        </div>

    </section>
    `
}

function verSolicitudMotoristaModal(){
    document.getElementById('AlternativeModalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(AlternativeModal).show();
    document.getElementById('AlternativeModalBody').innerHTML +=
    `
    <section id= "prueba" style="backGround-color:white; height: 600px; width: 450px; margin: 1%; padding: 4%; margin-top: 20px;">
            <img src="../img/UnkowUser.jpg" style="border-radius: 15px;" width="70" height="70" alt="">
            <h4 style="margin-left: 170px; position: absolute; margin-top: -80px;"># Solicitud</h4>
            <h5>Nombre</h5>
            <h5 style="margin-left: 90px; position: absolute; margin-top: -32px;">Apellido</h5>
            <h5>Edad</h5>
            <h5>Numero Telefonico</h5>
        <hr style="width:100%;text-align:left;margin-left:0">
            <h5>Fecha Nacimiento</h5>
            <h5>Correo Electronico</h5>
            <h5>Direccion Residencial</h5>
            <h5>Vehiculo</h5>
            <h5>Carta de Solicitud:</h5>
            <div type="textarea" class="scrollable"  style="height: 180px; width: 400px; background-color: gainsboro; overflow-y: auto; margin: 1%;" ></div>
            <input type="button" value="Rechazar" style=" margin: 1%; border-radius: 10px;  position: absolute"  onclick="">
            <input type="button" value="Aprobar" style="margin: 1%; margin-left: 90px; border-radius: 10px;  onclick="">
    </section>

    `;
}

function Menu(nombreusuario){
    document.getElementById('modalBodyTomato').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalEstructura3).show();
    document.getElementById('modalBodyTomato').innerHTML += 
    `

    <a href="../js/logout.php" style="padding: 5%">Cerrar sesion</a>
    <input type="button" value="Editar Perfil" style=" margin-left: -110px; margin-top: 30px; position: absolute;  border-radius: 10px;" onclick="MostrarEditor()">
    <br>

    <section id="editarPerfilRegistro" style="position: absolute; margin: 15%; display: none;">

        <input class ="CajaTexto" type="text" placeholder="Nombre" id="EditarclienteNombre">
        <input class ="CajaTexto" type="text" placeholder="Apellido" id="EditarclienteApellido">
        <input class ="CajaTexto" type="text" placeholder="contrasenia" id="EditarclienteContrasenia">
        <input class ="CajaTexto" type="date" placeholder="Fecha de Nacimiento" id="EditarclienteFechaNac">
        <input class ="CajaTexto" type="text" placeholder="Correo Electronico" id="EditarclienteCorreoElectro">
        <input class ="CajaTexto" type="number" placeholder="Numero de Telefono" id="EditarclienteNumeroTelef">
        <br>
        <br>
        <input type="button" value="Cambiar" style="   border-radius: 10px;" onclick="actualizarNuevoRegistro('${nombreusuario}')">

    </section>

    `;
    
}

function MostrarEditor(){
    if(document.getElementById('editarPerfilRegistro').style.display  == 'block'){
        document.getElementById('editarPerfilRegistro').style.display = 'none'

    }else{
        document.getElementById('editarPerfilRegistro').style.display = 'block'
    } 
}

function actualizarNuevoRegistro(nombreusuario){

    let usuarioSeleccionado = nombreusuario
    
    let usuario ={
        firstName: document.getElementById('EditarclienteNombre').value,
        lastName: document.getElementById('EditarclienteApellido').value,
        password: document.getElementById('EditarclienteContrasenia').value,
        birthdate: document.getElementById('EditarclienteFechaNac').value,
        email: document.getElementById('EditarclienteCorreoElectro').value,
        NumeroTelefono: document.getElementById('EditarclienteNumeroTelef').value,
        usuarioCambiar: usuarioSeleccionado
    };
    
    console.log('Usuario a actualizar', usuario)

    axios({
        method:'PUT',
        url: '../../Backend/API/usuarios.php',
        responseType:'json',
        data: usuario
    }).then(res=>{
        console.log(res);
        window.location.href = "landing.php" 
        //limpiar()
        //obtenerUsuarios();
    }).catch(error=>{
        console.error(error);
    });
}
