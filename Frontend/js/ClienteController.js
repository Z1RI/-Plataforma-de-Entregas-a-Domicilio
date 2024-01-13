var email = "";

function generarCategorias(){
    axios({
        url:'../../Backend/API/empresas.php',
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res.data);
        document.getElementById('BarraEmpresas').innerHTML ='<option disabled selected hidden>Categorias</option>';
        for (let i = 0; i < res.data.length; i++) {
            document.getElementById('BarraEmpresas').innerHTML += 
            `
            <option>${res.data[i].nombreCategoria}</option>

            `;
        }
    }).catch(error=>{
        console.error(error);
    });

}

generarCategorias()

function generarEmpresas(nombreUsuarioRegistro){
    email = nombreUsuarioRegistro;
    document.getElementById('listaTiendas').innerHTML = '';
    let categoriaSeleccionada = document.getElementById("BarraEmpresas").value;
    axios({
        url:'../../Backend/API/empresas.php' + `?id=${categoriaSeleccionada}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res.data);
        document.getElementById('listaTiendas').innerHTML ='';
        for (let i = 0; i < res.data.empresas.length; i++) {
            document.getElementById('listaTiendas').innerHTML += 
            `
            <div class=" col" style="margin: -2px; margin-top: 5px;"> 
                <div class="card" style="width: 8.8rem; backGround-color: ${res.data.empresas[i].color}; color:white " onclick="VerProductosEmpresa('${categoriaSeleccionada}',${i})">
                    <div class="card-body shop-pointer ">
                        <img src="../img/empty.jpg" id="UnknowImage">
                        <p class="card-text" style="margin: 2px;">${res.data.empresas[i].nombreEmpresa}</p>
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

function VerProductosEmpresa(idCategoria,idEmpresa){
    
    document.getElementById('modalBody').innerHTML = '';
    //let categoriaSeleccionada = document.getElementById("BarraEmpresas").value;
    console.log(idCategoria,idEmpresa)
    
    axios({
        url:'../../Backend/API/empresas.php' + `?categoriaSeleccionada=${idCategoria}` + '&' +`empresa=${idEmpresa}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        console.log(res.data);
        document.getElementById('modalBody').innerHTML ='';
        document.getElementById('modalBottom').style.display = "none";
        bootstrap.Modal.getOrCreateInstance(ModalClienteProductos).show();
        for (let i = 0; i < res.data.length; i++) {
            document.getElementById('modalBody').innerHTML += 
            `
            <ul class="list-group">
            <li class="list-group-item">
                <img src="../img/empty.jpg" style="position: relative;" id="UnknowImage">
                <section style="position: absolute; margin-left: 120px; margin-top: -100px;">
                    <p id="HistorialText" >${res.data[i].nombreProducto}</p>
                    <p id="HistorialText" >Descripcion</p>
                    <p id="HistorialText" style="position: absolute;">Precio:</p>
                    <p id="HistorialText" style="position: absolute; margin-left: 50px">${res.data[i].precio}</p>
                    <p id="HistorialText" style="margin-top: 35px">Cantidad</p>
                    <input id = '${res.data[i].Codigo}' type="number" style="width: 50px; margin-top: 2px">
                </section>
                <input type="button" value="Pedir" style="margin-left: 80%; padding: 2%; border-radius: 10px;" onclick="PedirButton(
                '${res.data[i].nombreProducto}',
                ${res.data[i].precio},
                ${res.data[i].Codigo})">
            </li>
        </ul>

            `;
        }
    }).catch(error=>{
        console.error(error);
    });

}

function CantidadButton(){

    document.getElementById('modalEstructureBody2').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalEstructura2).show();
    document.getElementById('modalEstructureBody2').innerHTML += 
    `
        <p id="HistorialText" >Producto</p>
        <p id="HistorialText" >Descripcion</p>
        <p id="HistorialText" >Cantidad</p>
        <input type="number">
        <input type="button" value="Pedir" style="margin-left: 80%; padding: 2%; border-radius: 10px;" onclick="PedirButton()">
    `;
}

//Falta esto
function PedirButton(nombreProducto, precio, Codigo){
    let cantidad = document.getElementById(Codigo).value
    console.log(email,nombreProducto,precio,cantidad);
    
    let producto ={
        email:email,
        nombreproducto: nombreProducto,
        precio: precio,
        Cantidad: parseInt(cantidad),
        Codigo: Codigo
    };

    console.log('Usuario a guardar', producto);
    
    axios({
        method:'POST',
        url: '../../Backend/API/carroCompras.php',
        responseType:'json',
        data: producto

    }).then(res=>{

        //document.getElementById('clienteNombre').value="";
        //alert("Registrado con Exito");
        //window.location.href = "../index.html"

        console.log(res);

    }).catch(error=>{
        console.error(error);
    });
    
}



function VerCarritodeCompras(nombreusuario){
    //console.log(nombreusuario);
    let total = 0;
    axios({
        method:'GET',
        url: '../../Backend/API/usuarios.php' + `?id=${nombreusuario}`,
        responseType:'json',
    }).then(res=>{
        //console.log(res);
        document.getElementById('modalBody').innerHTML ='';
        bootstrap.Modal.getOrCreateInstance(ModalClienteProductos).show();
        for (let i = 0; i < res.data.ordenes.length; i++) {
            document.getElementById('modalBody').innerHTML += 
            `

            <ul class="list-group">
                <li class="list-group-item">
                    <p id="HistorialText" >${res.data.ordenes[i].nombreProducto}</p>
                    <p id="HistorialText" >Descripcion</p>
                    <p id="HistorialText" >Precio: ${res.data.ordenes[i].precio}</p>
                    <p id="HistorialText" >Cantidad: ${res.data.ordenes[i].cantidad}</p>
                    <input id="FacutarButtom" style = "position: absolute; margin-left: 130px; padding: 0%" type="button" value="Eliminar del Carrito"  onclick="eliminarProductoCarrito(${i},'${nombreusuario}')">
                </li>
            </ul>

            `;
            total = total + (res.data.ordenes[i].precio * res.data.ordenes[i].cantidad )
        }
        document.getElementById('modalBottom').style.display = "block";
        document.getElementById('modalBottom').innerHTML = 
        
        `
        <hr style="padding: -3%;">
        <p>Total: ${total}</p>
        <input id="FacutarButtom" type="button" value="Pagar"  onclick="CarritoPAgarButton()">
        `;


    }).catch(error=>{
        console.error(error);
    });
}

function eliminarProductoCarrito(indice,nombreUsuario){
    //console.log(indice)
    console.log('Eliminar el lemento'+ indice);
    axios({
        method:'DELETE',
        url: '../../Backend/API/usuarios.php' + `?nombreUsuario=${nombreUsuario}` + '&' +`indice=${indice}`,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        VerCarritodeCompras(nombreUsuario)
    }).catch(error=>{
        console.error(error);
    });
}

function CarritoPAgarButton(){

    document.getElementById('modalBodyTomato').innerHTML = '';
    bootstrap.Modal.getOrCreateInstance(ModalEstructura3).show();
    document.getElementById('modalBodyTomato').innerHTML += 
    `
    <p id="HistorialText" style="position: absolute; margin-left: 30px;">Seleccione La Ubiccacion de Entrega</p>
    <section id="mapa" style="background-color: gray; height: 250px; width: 250px; margin: 10%; position: absolute;">
    </section>
    <input type="button" value="Seleccionar" style=" margin-top: 290px; margin-left: 35%; padding: 2%; border-radius: 10px;" onclick="">

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