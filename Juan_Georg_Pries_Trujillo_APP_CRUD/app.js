"use strict"

// Tabla con los datos de los productos

const tabla_productos = document.querySelector("#listaProductos");

// Para el boton de borrar
const borrarProducto = (clave_producto) => {
	return () => {
		const fila_a_borrar = document.querySelector("#" + clave_producto)
		fila_a_borrar.remove();
		sessionStorage.removeItem(clave_producto);
	}
}

// Ajustes para el form de editar productos
const boton_editar = document.querySelector("#bt_editar");

// formulario editar
const form_editar = document.querySelector("#editar_producto");

// inputs del formulario editar
const editar_nombre = document.querySelector("#editarNombre");
const editar_descripcion = document.querySelector("#editarDescripcion");
const editar_precio = document.querySelector("#editarPrecio");
const editar_categoria = document.querySelector("#editarCategoria");
const editar_imagen = document.querySelector("#editarImagen");
const editar_comprar = document.querySelector("#editarComprar");
const editar_fecha = document.querySelector("#editarFecha");
const editar_clave_producto = document.querySelector("#claveProducto")
const b_editar = document.querySelector("#editado");

// Editar producto
b_editar.addEventListener("click",
    (evento) => {
        evento.preventDefault();
        const nueva_clave_producto = "ID_" + editar_nombre.
            value.
            trim().
            toUpperCase().
            replaceAll(" ", "");

        if (editar_nombre.value.trim().length < 4) {
            mensajeError("Nombre incorrecto");
        } else if (editar_descripcion.value.trim().length < 4) {
            mensajeError("Descripción incorrecto");
        } else if (editar_precio.value.trim() === "" || isNaN(precio.value.trim()) || parseInt(precio.value.trim()) <= 0) {
            mensajeError("Precio incorrecto");
        } else if (editar_categoria.value.trim() === "") {
            mensajeError("Categoria incorrecta");
        } else if (editar_imagen.value.trim() === "") {
            mensajeError("Imagen incorrecta");
        } else if (editar_comprar.value.trim() === "") {
            mensajeError("Enlace para comprar incorrecto");
        } else if (editar_fecha.value.trim() === "") {
            mensajeError("Fecha incorrecta");
        } else if (editar_clave_producto.value !== nueva_clave_producto
            && sessionStorage.getItem(nueva_clave_producto)
            !== null) {
            mensajeError("El producto ya existe");
        } else {

			const datos_producto = {
				"nombre": editar_nombre.value.trim(),
                "descripcion": editar_descripcion.value.trim(),
                "precio": editar_precio.value.trim(),
                "categoria": editar_categoria.value.trim(),
                "imagen": editar_imagen.value.trim(),
                "comprar": editar_comprar.value.trim(),
                "fecha": editar_fecha.value.trim()
			};
			const edita = nuevoProducto(datos_producto);
            const fila_a_editar = document.querySelector("#" + editar_clave_producto.value);
			fila_a_editar.replaceWith(edita);
			sessionStorage.setItem(nueva_clave_producto,
                JSON.stringify(datos_producto));
            if (nueva_clave_producto !== editar_clave_producto.value) {
                sessionStorage.removeItem(editar_clave_producto.value);
            }

            form_editar.reset();
            form_editar.classList.remove("d-flex")
            form_editar.classList.add("d-none")
            mensajeOk("Editado correctamente");

		}
	}
);


// Inputs editar
const editarProducto=(galeria)=>{
    return ()=>{

        const prod = JSON.parse(sessionStorage.getItem(galeria));

        editarNombre.value=prod["nombre"];
        editarDescripcion.value=prod["descripcion"];
        editarPrecio.value=prod["precio"];
        editarCategoria.value=prod["categoria"];
        editarImagen.value=prod["imagen"];
        editarComprar.value=prod["comprar"];
        editarFecha.value=prod["fecha"];

        editar_clave_producto.value=galeria;

    }
}


// creacion de la tabla

const nuevoProducto = (json)=>{

    const nueva_fila=document.createElement("tr");
    nueva_fila.id="ID_"+json["nombre"].toUpperCase().replaceAll(" ", "");
    nueva_fila.style.height="200px";
    // crear celda con el nombre
    const td_nombre=document.createElement("td");
    td_nombre.innerText=json["nombre"];
    td_nombre.classList.add("text-center"); 
    nueva_fila.appendChild(td_nombre);

    // Crea la celda descripcion
    const td_descripcion=document.createElement("td");
    td_descripcion.innerText=json["descripcion"];
    td_descripcion.classList.add("text-center"); 
    nueva_fila.appendChild(td_descripcion);

    // celda del precio
    const td_precio=document.createElement("td");
    td_precio.innerText=json["precio"] + "€";
    td_precio.classList.add("text-center"); 
    nueva_fila.appendChild(td_precio);

    // celda de la categoria
    const td_categoria=document.createElement("td");
    td_categoria.innerText=json["categoria"];
    td_categoria.classList.add("text-center"); 
    nueva_fila.appendChild(td_categoria);

    // celda con la imagen
    const imagen = document.createElement("img");
    imagen.src=json["imagen"];
    imagen.classList.add("w-50");
    const td_imagen=document.createElement("td");
    imagen.classList.add("w-50");
    td_imagen.appendChild(imagen);
    td_imagen.classList.add("text-center");
    nueva_fila.appendChild(td_imagen);

    // celda de comprar
    const enlace_compra=document.createElement("a");
    enlace_compra.innerText="comprar";
    enlace_compra.href=json["comprar"];
    enlace_compra.classList.add("btn", "btn-success");
    const td_compra=document.createElement("td");
    td_compra.classList.add("text-center");
    td_compra.appendChild(enlace_compra);
    nueva_fila.appendChild(td_compra);

    // celda de la fecha
    const td_fecha=document.createElement("td");
    td_fecha.innerText=json["fecha"];
    td_fecha.classList.add("text-center");
    nueva_fila.appendChild(td_fecha);

    //CREA EL BOTON DE EDITAR
	const editar = document.createElement("a");
	editar.innerText = "Editar";
	editar.href = "#";
    editar.classList.add("btn", "btn-primary");
    editar.addEventListener("click",
        () => {
                if (form_editar.classList.contains("d-none")) {
                    form_editar.classList.remove("d-none");
                    
                    
                } else {
                    form_editar.classList.add("d-none");
                    
                }
            }
    );
    // -----
    editar.addEventListener("click", editarProducto(nueva_fila.id,nueva_fila))
    const td_editar=document.createElement("td");
    td_editar.appendChild(editar);
    td_editar.classList.add("text-center");
    nueva_fila.appendChild(td_editar);

    //CREA EL BOTON DE BORRADO
	const borrar = document.createElement("a");
	borrar.innerText = "Eliminar";
	borrar.href = "#";
	borrar.classList.add("btn", "btn-danger");

    //MANEJAR EVENTO DE CLICK SOBRE EL BOTON
	borrar.addEventListener("click", borrarProducto(nueva_fila.id))
	const td_borrar = document.createElement("td");
	td_borrar.appendChild(borrar);
	td_borrar.classList.add("text-center");
	nueva_fila.appendChild(td_borrar);

    return nueva_fila;

}

//AÑADIR DATOS INICIALES DE LA BASE DE DATOS AL STORAGE (POR AHORA FICHERO JSON)
//LA PRIMERA VEZ QUE SE INICIE INVENTAR CLAVE PARA RECORDAR QUE HEMOS INICIADO SESION
if(sessionStorage.length===0){
    total.forEach(
        (producto)=>{
            sessionStorage.setItem("ID_"+producto["nombre"].
            toUpperCase()
            .replaceAll(" ",""),
            JSON.stringify(producto))
        }
    );
}

//AÑADIR LOS DATOS DEL STORAGE PARA MANEJAR LA APLICACION A TRAVES DE ELLOS Y NO TENER QUE USAR SIEMPRE LA BASE DE DATOS
Object.values(sessionStorage).forEach(
    (producto)=>{
        tabla_productos.appendChild(nuevoProducto(JSON.parse(producto)));
    }
)


// Ajustes para el form de añadir productos
const boton_añadir = document.querySelector("#op_añadir");

// formulario añadir
const form_añadir = document.querySelector("#nuevo_producto");

// inputs del formulario añadir
const nombre = document.querySelector("#nombre");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const categoria = document.querySelector("#categoria");
const imagen = document.querySelector("#imagen");
const comprar = document.querySelector("#comprar");
const fecha = document.querySelector("#fecha");
const b_nuevo = document.querySelector("#nuevo");

// Añadir nuevo producto
b_nuevo.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		if (nombre.value.trim().length < 4) {
			mensajeError("Nombre incorrecto");
		} else if (descripcion.value.trim().length < 4) {
			mensajeError("descripcion incorrecto");
		} else if (precio.value.trim() === "" || isNaN(precio.value.trim()) || parseInt(precio.value.trim()) <= 0) {
			mensajeError("Precio incorrecto");
		} else if (categoria.value.trim() === "") {
			mensajeError("categoria incorrecta");
		} else if (imagen.value.trim() === "") {
			mensajeError("imagen incorrecta");
		} else if (comprar.value.trim() === "") {
			mensajeError("Enlace para comprar incorrecto");
		} else if (fecha.value.trim() === "") {
			mensajeError("Fecha incorrecta");
		} else if (sessionStorage.getItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", "")) !== null) {
			mensajeError("El producto ya existe");
		} else {

			const datos_producto = {
				"nombre": nombre.value.trim(),
				"descripcion": descripcion.value.trim(),
				"precio": precio.value.trim(),
				"categoria": categoria.value.trim(),
                "imagen": imagen.value.trim(),
				"comprar": comprar.value.trim(),
                "fecha": fecha.value.trim()
			};
			const nuevo = nuevoProducto(datos_producto);
			tabla_productos.appendChild(nuevo);
			sessionStorage.setItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", ""), JSON.stringify(datos_producto));
			form_añadir.reset();
			document.documentElement.scrollTop = document.documentElement.scrollHeight;
			mensajeOk("Añadido correctamente");
		}
	}
);


// Ajustes para la busqueda

const b_buscar = document.querySelector("#b_buscar");

const busqueda = document.querySelector("#busqueda");

b_buscar.addEventListener("click",
    (evento)=>{
        evento.preventDefault();

        const productos=Object.values(sessionStorage).map(
            (producto)=>{
                return JSON.parse(producto);
            }
        );

        const filtro_prod=productos.filter(
            (producto)=>{
                return producto["descripcion"].includes(busqueda.value.trim());
            }
        );

        tabla_productos.innerHTML="";
        filtro_prod.forEach(
            (producto)=>{
                tabla_productos.appendChild(nuevoProducto(producto));
            }
        );

    }
)



//CONTROL DE FORMULARIOS
boton_añadir.addEventListener("click",
	() => {
		if (form_añadir.classList.contains("d-none")) {
			form_añadir.classList.remove("d-none");
			b_buscar.disabled = "disabled";
			boton_añadir.value = "Quitar formulario";
		} else {
			form_añadir.classList.add("d-none");
			b_buscar.disabled = "";
			boton_añadir.value = "Añadir producto";
		}
	}
);



// Ordenar por la fecha

const ord_asc_fecha = document.querySelector("#ordenar_asc");

ord_asc_fecha.addEventListener("click",
    (evento)=>{
        evento.preventDefault();

        const productos=Object.values(sessionStorage).map(
            (producto)=>{
                return JSON.parse(producto);
            }
        );

        const productos_ordenados=productos.sort(
            (a,b)=>{
                return a["fecha"].localeCompare(b["fecha"]);
            }
        );

        tabla_productos.innerHTML="";
        productos_ordenados.forEach(
            (producto)=>{
                tabla_productos.appendChild(nuevoProducto(producto));
            }
        );
    }
);

// Ordenar por el precio
const ord_desc_precio = document.querySelector("#ordenar_desc");

ord_desc_precio.addEventListener("click",
    (evento)=>{
        evento.preventDefault();

        const productos=Object.values(sessionStorage).map(
            (producto)=>{
                return JSON.parse(producto);
            }
        );

        const productos_ordenados=productos.sort(
            (a,b)=>{
                return b["precio"] - a["precio"];
            }
        );

        tabla_productos.innerHTML="";
        productos_ordenados.forEach(
            (producto)=>{
                tabla_productos.appendChild(nuevoProducto(producto));
            }
        );
    }
);



