class Producto {
    constructor(nombre, precio, cantidad, categoria, color) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.color = color;
    }

    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        return this.nombre = nombre;
    }

    get Precio() {
        return this.precio;
    }
    set Precio(precio) {
        return this.precio = precio;
    }

    get Cantidad() {
        return this.cantidad;
    }
    set Cantidad(cantidad) {
        return this.cantidad = cantidad;
    }

    get Categoria() {
        return this.categoria;
    }
    set Categoria(categoria) {
        return this.categoria = categoria;
    }

    get Color() {
        return this.color;
    }
    set Color(color) {
        return this.color = color;
    }
}

const productos = [
    new Producto('Apple MacBook Pro 17"', 2999, 40, 'Laptop', 'Silver'),
    new Producto('Microsoft Surface Pro', 1999, 52, 'Laptop PC', 'White'),
    new Producto('Magic Mouse 2', 99, 19, 'Accessories', 'Black'),
    new Producto('iPhone 13 Pro', 999, 15, 'Smartphone', 'Graphite'),
    new Producto('Samsung Galaxy S21 Ultra', 1199, 12, 'Smartphone', 'Phantom Black'),
    new Producto('Bose QC35 II', 299, 20, 'Accessories', 'Black'),
    new Producto('Panasonic LCD 4K UHD Smart 65" ', 2499, 6, 'TV', 'Black'),
    new Producto('TCL Smart TV 55" QLED 4K UHD 55C645', 1899, 7, 'TV', 'Black')
];

document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('product-table');
    const tbody = tabla.getElementsByTagName('tbody')[0];

    productos.forEach((producto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${producto.Nombre}</th>
            <td class="px-6 py-4">${producto.Color}</td>
            <td class="px-6 py-4">${producto.Categoria}</td>
            <td class="px-6 py-4">$${producto.Precio}</td>
            <td class="px-6 py-4"><button onclick="agregarAlCarrito(${index})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button></td>
        `;
        tbody.appendChild(fila);
    });
});

let carrito = [];

function agregarAlCarrito(index) {
    const cantidad = prompt(`¿Cuántos ${productos[index].Nombre} desea comprar?`);
    if (cantidad !== null && cantidad !== '' && !isNaN(cantidad) && parseInt(cantidad) > 0) {
        const cantidadSeleccionada = parseInt(cantidad);
        if (cantidadSeleccionada <= productos[index].Cantidad) {
            carrito.push({ producto: productos[index], cantidad: cantidadSeleccionada });
            mostrarCarrito();
        } else {
            alert('Lo sentimos, no hay suficiente stock disponible.');
        }
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}

function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    let total = 0;

    carrito.forEach((item) => {
        const li = document.createElement('li');
        const subtotal = item.producto.Precio * item.cantidad;
        li.textContent = `${item.producto.Nombre} x ${item.cantidad} - $${subtotal}`;
        carritoLista.appendChild(li);
        total += subtotal;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total}`;
}
