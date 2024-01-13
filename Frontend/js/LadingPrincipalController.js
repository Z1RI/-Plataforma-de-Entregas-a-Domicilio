function registrate(){
    window.location.href = "LandingPrincipal/registrate.html";
}

function BackButton(){
    window.location.href = "../index.html";
}

function Registrarse(){
    let usuario ={
        firstName: document.getElementById('clienteNombre').value,
        lastName: document.getElementById('clienteApellido').value,
        password: document.getElementById('clienteContrasenia').value,
        birthdate: document.getElementById('clienteFechaNac').value,
        email: document.getElementById('clienteCorreoElectro').value,
        NumeroTelefono: document.getElementById('clienteNumeroTelef').value,
        tipoUsuario: "1"
    };

    console.log('Usuario a guardar', usuario)
    axios({
        method:'POST',
        url: '../../Backend/API/usuarios.php',
        responseType:'json',
        data: usuario
    }).then(res=>{
        document.getElementById('clienteNombre').value="";
        document.getElementById('clienteApellido').value="";
        document.getElementById('clienteContrasenia').value="";
        document.getElementById('clienteFechaNac').value="";
        document.getElementById('clienteCorreoElectro').value="";
        document.getElementById('clienteNumeroTelef').value="";
        alert("Registrado con Exito");
        window.location.href = "../index.html"
        console.log(res);
    }).catch(error=>{
        console.error(error);
    });

}

function Solicitar(){
    let usuario ={
        firstName: document.getElementById('motoristaNombre').value,
        lastName: document.getElementById('motoristaApellido').value,
        password: document.getElementById('motoristaContrasenia').value,
        birthdate: document.getElementById('motoristaNacim').value,
        email: document.getElementById('motoristaEmail').value,
        NumeroTelefono: document.getElementById('NumeroTelefono').value,
        tipoUsuario: "2"
    };

    console.log('Usuario a guardar', usuario)
    axios({
        method:'POST',
        url: '../../Backend/API/usuarios.php',
        responseType:'json',
        data: usuario
    }).then(res=>{
        document.getElementById('motoristaNombre').value="";
        document.getElementById('motoristaApellido').value="";
        document.getElementById('motoristaContrasenia').value="";
        document.getElementById('motoristaNacim').value="";
        document.getElementById('motoristaEmail').value="";
        document.getElementById('NumeroTelefono').value="";
        alert("Registrado con Exito");
        window.location.href = "../index.html"
        console.log(res);
    }).catch(error=>{
        console.error(error);
    });
}

