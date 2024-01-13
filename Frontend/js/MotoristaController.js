
function EjecutarModalHistorial(nombreusuario){

    axios({
        method:'GET',
        url: '../../Backend/API/usuarios.php' + `?id=${nombreusuario}`,
        responseType:'json',
    }).then(res=>{
        console.log(res);
        document.getElementById('modalBottom').style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
        bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
        for (let i = 0; i < res.data.historial.length; i++) {
            
            document.getElementById('modalBody').innerHTML += 
                `
                    <ul class="list-group">
                        <li class="list-group-item">
                        <p id="HistorialText" >Orden: ${res.data.historial[i].orden}</p>
                        <p id="HistorialText">Fecha: ${res.data.historial[i].fecha}</p>
                        <p id="HistorialText">Comision: ${res.data.historial[i].comision}</p>
                        <p id="HistorialText">Descripcion: Descripcion</p>
                        </li>
                    </ul>
                `;
        }

    }).catch(error=>{
        console.error(error);
    });
}

function EjecutarModalVerOrdenes(){

    axios({
        method:'GET',
        url: '../../Backend/API/ordenes.php',
        responseType:'json',
    }).then(res=>{
        console.log(res);
        document.getElementById('modalBottom').style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
        bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
        for (let i = 0; i < res.data.length; i++) {   
            if(res.data[i].estado == 0){
                document.getElementById('modalBody').innerHTML += 
                `
                <ul class="list-group">
                    <li class="list-group-item">
                        <p id="HistorialText" >Orden #${res.data[i].OrdenNumero}</p>
                        <p id="HistorialText" style="position: absolute;">Fecha: ${res.data[i].fecha}</p>
                        <p id="HistorialText" style="position: absolute; margin-top: 7%">Estado: Orden No Tomada</p>
                        <input type="button" value="ver" style="margin-left: 80%; padding: 2%; border-radius: 10px;" onclick="VerOrdenMotorista(${res.data[i].OrdenNumero})">
                    </li>
                </ul>
                `;
                    }
            }


    }).catch(error=>{
        console.error(error);
    });

    /*

    document.getElementById('modalBottom').style.display = "none";
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
    document.getElementById('modalBody').innerHTML += 
    `
    
    <ul class="list-group">
        <li class="list-group-item">
            <p id="HistorialText" >Orden</p>
            <p id="HistorialText" style="position: absolute;">Fecha</p>
            <input type="button" value="ver" style="margin-left: 80%; padding: 2%; border-radius: 10px;" onclick="VerOrdenMotorista()">
        </li>
        <li class="list-group-item">
            <p id="HistorialText" >Orden</p>
            <p id="HistorialText" style="position: absolute;">Fecha</p>
            <input type="button" value="ver" style="margin-left: 80%; padding: 2%; border-radius: 10px;"  onclick="VerOrdenMotorista()">
        </li>
    </ul>

    
    ` */
}

function OrdenesProcesoVerButtom(){
    document.getElementById('modalBottom').style.display = "none";
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
    document.getElementById('modalBody').innerHTML += 
    ` 
    <ul class="list-group">
        <li class="list-group-item">
            <p style="position: absolute;" >Orden</p>
            <input type="button" value="ver" style="margin-left: 80%;  border-radius: 10px;" onclick="VerOrdenMotorista()">
        </li>
        <li class="list-group-item">
        <p id="HistorialText" >Usuario</p>
        <p id="HistorialText" >Destino</p>
        <p id="HistorialText" >Descripcion</p>
    </li>
    <li class="list-group-item">
        <p style="position: absolute;">Estado</p>
            <input type="button" value="Facturar" style="margin-left: 75%;  border-radius: 10px;" onclick="Facturacion()">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
            En Camino
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
            En Origen
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
            En Destino
            </label>
        </div>
    </li>
    </ul>
    
    `
}

function Facturacion(){
    document.getElementById('modalBody').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
    document.getElementById('modalBody').innerHTML += 
    `
    <ul class="list-group">
        <li class="list-group-item">
            <p id="HistorialText" >Orden</p>
        </li>

        <li class="list-group-item">

            <ul class="list-group">
                <li class="list-group-item">
                    <p id="HistorialText" style="position: absolute;">Orden</p>
                    <p id="HistorialText" style="margin-left: 200px">Precio</p>
                </li>
                <li class="list-group-item">
                    <p id="HistorialText" style="position: absolute;">Orden</p>
                    <p id="HistorialText" style="margin-left: 200px">Precio</p
                </li>
                <li class="list-group-item">
                    <p id="HistorialText" style="position: absolute;">Orden</p>
                    <p id="HistorialText" style="margin-left: 200px">Precio</p
                </li>
                <li class="list-group-item">
                    <p id="HistorialText" style="margin-left: 200px">ISV</p>
                    <p id="HistorialText" style="margin-left: 200px">Total</p
                </li>
            </ul>

        </li>
    </ul>    
    
    `;

    document.getElementById('modalBottom').style.display = "block";
    document.getElementById('modalBottom').innerHTML = 
    `
        <p id="HistorialText" style="position: absolute;" >Pago del Cliente</p>
        <p id="HistorialText" style="margin-left: 250px" >Comision</p>
        <input type="text" style="position: absolute;"></input>
        <input type="button" value="Finalizar" style="margin-left: 77%; border-radius: 10px;"  onclick="">
        <p id="HistorialText" style="position: absolute;" >Cambio</p>
    `;
}

function VerOrdenMotorista(id){

    axios({
        method:'GET',
        url: '../../Backend/API/ordenes.php' + `?id=${id}`,
        responseType:'json',
    }).then(res=>{
        console.log(res);
        //document.getElementById('modalBottom').style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
        bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
        for (let i = 0; i < res.data.productos.length; i++) {
            document.getElementById('modalBody').innerHTML += 
                `
                <ul class="list-group">
                    <li class="list-group-item">
                        <p id="HistorialText" >${res.data.productos[i].nombreProducto}</p>
                        <p id="HistorialText" >Descripcion</p>
                        <p id="HistorialText" >Precio: ${res.data.productos[i].precio}</p>
                        <p id="HistorialText" >Cantidad: ${res.data.productos[i].cantidad}</p>
                    </li>
                </ul>
                `;
        }

        let comision = ((res.data.total) * 0.10)
        document.getElementById('modalBottom').innerHTML = '';
        document.getElementById('modalBottom').style.display = "block";
        document.getElementById('modalBottom').innerHTML = 
        `
        <p id="HistorialText" >Direccion: ${res.data.direccion}</p>
        <p id="HistorialText" style="position: absolute;" >Comision: ${comision}</p>
        <p id="HistorialText" style="position: absolute; margin-top: 25px;">Total ${res.data.total + comision }</p>
        <input type="button" value="Tomar" style="margin-left: 80%; padding: 2%; border-radius: 10px;"  onclick="">
        
        `;

    }).catch(error=>{
        console.error(error);
    });

}

function EjecutarModalProceso(){
    axios({
        method:'GET',
        url: '../../Backend/API/ordenes.php',
        responseType:'json',
    }).then(res=>{
        console.log(res);
        document.getElementById('modalBottom').style.display = "none";
        document.getElementById('modalBody').innerHTML = '';
        bootstrap.Modal.getOrCreateInstance(ModalMotorista).show();
        for (let i = 0; i < res.data.length; i++) {   
            if(res.data[i].estado == 1){
                document.getElementById('modalBody').innerHTML += 
                `
                <ul class="list-group">
                    <li class="list-group-item">
                        <p id="HistorialText" >Orden #${res.data[i].OrdenNumero}</p>
                        <p id="HistorialText" style="position: absolute;">Fecha: ${res.data[i].fecha}</p>
                        <p id="HistorialText" style="position: absolute; margin-top: 7%">Estado: Orden Tomada</p>
                        <input type="button" value="ver" style="margin-left: 80%; padding: 2%; border-radius: 10px;" onclick="VerOrdenMotorista(${res.data[i].OrdenNumero})">
                        
                    </li>
                </ul>
                `;
                    }
            }


    }).catch(error=>{
        console.error(error);
    });

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