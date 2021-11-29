const errores = document.getElementsByClassName("err")
email=document.getElementById("email")
password=document.getElementById("password")
    
/**
 * Ocultar los errores de Validación
 */
 for(let i=0;i<errores.length;i++){
    errores[i].style.display = "none";
}





validar.addEventListener("click", (e)=>{
    e.preventDefault()
    let resp1=validarEmail(email.value)?"none":"block"
    let resp2=validarPassword(password.value)?"none":"block"
    console.log(resp1)
    console.log(resp2)
    
    errores[0].style.display=resp1
    errores[1].style.display=resp2    
    console.log(password.value)
    console.log(validarEmail(email.value))
    console.log(validarPassword(password.value))
})

email.addEventListener("click",(e)=>{
    errores[0].style.display="none"
})
password.addEventListener("click",(e)=>{
    errores[1].style.display="none"
})


const validarEmail=( email )=> 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

const validarPassword=(password)=>{
    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password) ? true : false;
}