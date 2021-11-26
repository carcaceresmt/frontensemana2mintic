const tbody = document.getElementById("tbody")
const endpoint = "http://localhost:8080/api/Producto"
const mostrarProducto = () => {
    axios.get(endpoint + "/all").then((result) => {
        const productos = result.data
        console.log(productos)
        renderizarTabla(productos)

    });
}

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