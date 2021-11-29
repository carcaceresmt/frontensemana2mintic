/**
 * autor carlos jose caceres ochoa
 */

/**enpoint api Rest */
const endpoint="http://localhost:8080/api/Producto/save"


/**
 * Capturar el DOM
 */

const bguardar = document.getElementById("guardar")
const alerta = document.getElementById("alerta")
const mensaje = document.getElementById("mensaje")
const id = document.getElementById("id")
const nomprod = document.getElementById("nomprod")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")
const stock = document.getElementById("stock")
const descripcion = document.getElementById("descripcion")
const errores = document.getElementsByClassName("err")

/**
 * Ocultar los errores de Validación
 */
for(let i=0;i<errores.length;i++){
    errores[i].style.display = "none";
}

/**
 * Ocultar El Alert
 */
alerta.style.display = "none";

/**
 * funcion guardar datos 
 */

const guardar = () => {
  
    //  peticionPost(data)
    validar()
    if(id.value != "" && nomprod.value != "" && precio.value != "" && categoria.value != "0" &&
    descripcion.value != "" && stock.valule!=""){       
      
        const resp=peticionPost(objetoProducto())
        let msj = ""        
        resp.then((result) => {
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

/**
 * peticion post asyncrona utilizando axios
 */

const peticionPost=async(producto)=>{
    return await axios.post(endpoint, producto);
}

/**
 * 
 * capturar de datos en el objeto producto
 */

const objetoProducto=()=>{
    const producto = {
        id: id.value,
        nomprod: nomprod.value,
        precio: precio.value,
        categoria: categoria.value,
        stock:stock.value,
        descripcion: descripcion.value
    }
    return producto
}

/**
 * validar entrada de datos
 */

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
    if (stock.value == "") {
        errores[3].style.display = "block";
      
    }
    if (categoria.value == "0") {
        errores[4].style.display = "block";
      
    }
    if (descripcion.value == "") {
        errores[5].style.display = "block";
      
    }

}

/**
 * eventos para ocultar errores
 */

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

/**
 * eventos click de componentes
 */

bguardar.addEventListener("click", guardar)
alerta.addEventListener("click", cerrarAlerta)
id.addEventListener("click", clickInputId)
nomprod.addEventListener("click", clickInputNombre)
precio.addEventListener("click", clickInputPrecio)
categoria.addEventListener("click", clickInputCategoria)
descripcion.addEventListener("click", clickInputDescripcion)