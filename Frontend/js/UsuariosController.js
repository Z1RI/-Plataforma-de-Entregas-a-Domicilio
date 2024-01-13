function login(){
    axios({
        url:"../Backend/API/login.php",
        method:"post",
        responseType:"json",
        data:{
            email: document.getElementById('nombreUsuario').value,
            password:document.getElementById('contrasenia').value
        }
    }).then(res=>{
        if (res.data.codigoResultado==1){
            switch(res.data.tipoUsuario) {
                case "1":
                    //console.log("tipo usuario 1")
                    window.location.href = "Cliente/landing.php" 
                    break;
                case "2":
                    //console.log("tipo usuario 2")
                    window.location.href = "Motorista/landing.php" 
                    break;
                case "0":
                    window.location.href = "Administracion/landing.php"
                    break;    
                default:
                  // code block
            }
        }
        else{
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = res.data.mensaje;
        }
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
}