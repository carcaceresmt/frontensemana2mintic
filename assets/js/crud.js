/**
 * autor carlos jose caceres ochoa
 */


/**
 * Capturar el DOM
 */
const tbody = document.getElementById("tbody")

/**enpoint api Rest */
const endpoint = "http://localhost:8080/api/Producto"

/**funcion mostrar producto */

const mostrarProducto = () => {

        const resp=consumirGet();
        resp.then(result=>{
            console.log(result)
            productos=result.data
            console.log(productos)
            renderizarTabla(productos)
        })
        .catch(e=>{
            console.log(e)
        })  
}

/**
 * peticion get asyncrona utilizando axios
 */
const consumirGet=async()=>{
    return await axios.get(endpoint + "/all");
}
/**
 * 
 * construir la tabla
 */
const renderizarTabla = (productos) => {
    let registro = ""
    let index = 1
    productos.forEach(producto => {
        registro += "<tr>" +
                       "<td>" + index + "</td>"+
                       "<td>" + producto.id + "</td>"+
                       "<td>" + producto.nomprod + "</td>"+
                       "<td>" + producto.precio + "</td>"+
                       "<td>" + producto.categoria + "</td>"+
                       "<td>" + producto.stock + "</td>"+
                       "<td>" + producto.descripcion + "</td>"+
                    "</tr>"
        index++            
    });
    tbody.innerHTML = registro
}

mostrarProducto()