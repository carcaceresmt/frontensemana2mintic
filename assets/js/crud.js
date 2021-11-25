
const bguardar = document.getElementById("guardar")
const alerta = document.getElementById("alerta")
const mensaje = document.getElementById("mensaje")
const id = document.getElementById("id")
const nomprod = document.getElementById("nomprod")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")
const descripcion = document.getElementById("descripcion")
const errores = document.getElementsByClassName("err")
errores[0].style.display = "none";
errores[1].style.display = "none";
errores[2].style.display = "none";
errores[3].style.display = "none";
errores[4].style.display = "none";
var cont=0

alerta.style.display = "none";

const guardar = () => {

    const producto = {
        id: id.value,
        nomprod: nomprod.value,
        precio: precio.value,
        categoria: categoria.value,
        descripcion: descripcion.value
    }
    const data = JSON.stringify(producto)
    console.log(data)
    //  peticionPost(data)
    validar()
    if(id.value != "" && nomprod.value != "" && precio.value != "" && categoria.value != "0" &&
    descripcion.value != ""){

        let msj = ""
        axios.post("http://localhost:8080/api/Producto/save", producto).then((result) => {
            if (result.status == 201) {
                msj = "Registro Insertado con Exito!!"
            }
            else {
                msj = "Problemas al  Insertar !!"
            }
            mensaje.innerHTML = msj
            alerta.style.display = "block";
        });

    }
    


}

const validar = () => {

    if (id.value == "") {
        errores[0].style.display = "block";
      
    }
    if (nomprod.value == "") {
        errores[1].style.display = "block";
        
    }
    if (precio.value == "") {
        errores[2].style.display = "block";
      
    }
    if (categoria.value == "0") {
        errores[3].style.display = "block";
      
    }
    if (descripcion.value == "") {
        errores[4].style.display = "block";
      
    }

}



const cerrarAlerta = () => {
    alerta.style.display = "none";
}

const clickInputId = () => {
   
        errores[0].style.display = "none";
    
}
const clickInputNombre = () => {
        errores[1].style.display = "none";
   
   }
const clickInputPrecio = () => {
        errores[2].style.display = "none";
   
}
const clickInputCategoria = () => {
        errores[3].style.display = "none";
   }

const clickInputDescripcion = () => {
    
        errores[4].style.display = "none";
   }

bguardar.addEventListener("click", guardar)
alerta.addEventListener("click", cerrarAlerta)
id.addEventListener("click", clickInputId)
nomprod.addEventListener("click", clickInputNombre)
precio.addEventListener("click", clickInputPrecio)
categoria.addEventListener("click", clickInputCategoria)
descripcion.addEventListener("click", clickInputDescripcion)