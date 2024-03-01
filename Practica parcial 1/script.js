class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Comida extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
}

class Bebida extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
}

class Pedido {
    constructor() {
        this._nombreCliente = '';
        this._productos = [];
        this._total = 0;
        this._estado = 'En cocina';
    }

    get nombreCliente() {
        return this._nombreCliente;
    }

    set nombreCliente(value) {
        this._nombreCliente = value;
    }

    get estado() {
        return this._estado;
    }

    agregarProducto(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this._productos.push(producto);
            this._total += producto.precio;
        }
    }

    enviarPedidoACocina() {
        this._estado = 'En cocina';
        this.mostrarEstado();
        this.mostrarPedidoActual();
        this.mostrarPedidosEnCocina();
    }

    marcarPedidoListo() {
        this._estado = 'Listo';
        this.mostrarEstado();
        this.mostrarPedidoActual();
        this.mostrarPedidosListos();
    }

    mostrarEstado() {
        document.getElementById("estado").textContent = `Estado del Pedido: ${this._estado}`;
    }

    mostrarPedidoActual() {
        const pedidoDiv = document.getElementById("pedido");
        pedidoDiv.innerHTML = `<p>Cliente: ${this._nombreCliente}</p>`;
        this._productos.forEach(producto => {
            pedidoDiv.innerHTML += `<p>${producto.nombre}: $${producto.precio}</p>`;
        });
        pedidoDiv.innerHTML += `<p>Total: $${this._total.toFixed(2)}</p>`;
    }

    mostrarPedidosEnCocina() {
        const pedidosEnCocinaTable = document.getElementById("pedidosEnCocina");
        const row = `<tr><td>${this._nombreCliente}</td><td>${this.formatPedido()}</td><td>$${this._total.toFixed(2)}</td><td><button onclick="marcarListo('${this._nombreCliente}')">Listo</button></td></tr>`;
        pedidosEnCocinaTable.innerHTML += row;
    }

    mostrarPedidosListos() {
        const pedidosListosTable = document.getElementById("pedidosListos");
        const row = `<tr><td>${this._nombreCliente}</td><td>${this.formatPedido()}</td><td>$${this._total.toFixed(2)}</td></tr>`;
        pedidosListosTable.innerHTML += row;
    }

    formatPedido() {
        return this._productos.map(producto => `${producto.nombre}`).join(', ');
    }
}

const menu = {
    comida: [
        new Comida("Hamburguesa con Papas", 3),
        new Comida("Tacos", 4),
        new Comida("Nachos", 6),
        new Comida("Burritos", 5),
        new Comida("Tortas", 4)
    ],
    bebidas: [
        new Bebida("Pepsi", 1),
        new Bebida("Coca-Cola", 1),
        new Bebida("Jugo de Naranja", 0.5),
        new Bebida("Fanta", 0.75),
        new Bebida("Salvacola", 0.35),
        new Bebida("Agua", 0.25)
    ]
};

let pedido = null;

function mostrarMenu() {
    // Mostrar comida
    const comidaDiv = document.getElementById("menu");
    comidaDiv.innerHTML += "<h3>Comida</h3>";
    menu.comida.forEach(comida => {
        const boton = `<div><span>${comida.nombre}: $${comida.precio}</span><input type="number" id="${comida.nombre}" value="0"><button onclick="agregarProducto('${comida.nombre}', ${comida.precio})">Agregar</button></div>`;
        comidaDiv.innerHTML += boton;
    });

    // Mostrar bebidas
    comidaDiv.innerHTML += "<h3>Bebidas</h3>";
    menu.bebidas.forEach(bebida => {
        const boton = `<div><span>${bebida.nombre}: $${bebida.precio}</span><input type="number" id="${bebida.nombre}" value="0"><button onclick="agregarProducto('${bebida.nombre}', ${bebida.precio})">Agregar</button></div>`;
        comidaDiv.innerHTML += boton;
    });
}

function agregarProducto(nombre, precio) {
    const cantidadInput = document.getElementById(nombre);
    const cantidad = parseInt(cantidadInput.value);

    if (cantidad > 0) {
        const producto = menu.comida.find(item => item.nombre === nombre) || menu.bebidas.find(item => item.nombre === nombre);
        if (!pedido || pedido.estado === 'Listo') {
            pedido = new Pedido();
        }
        pedido.agregarProducto(producto, cantidad);

        const pedidoDiv = document.getElementById("pedido");
        pedidoDiv.innerHTML = `<p>Cliente: ${pedido.nombreCliente}</p>`;
        pedido._productos.forEach(producto => {
            pedidoDiv.innerHTML += `<p>${producto.nombre}: $${producto.precio}</p>`;
        });
        pedidoDiv.innerHTML += `<p>Total: $${pedido._total.toFixed(2)}</p>`;
    } else {
        alert("Por favor, seleccione al menos una unidad del producto.");
    }
}

window.onload = mostrarMenu;

document.getElementById("realizarPedido").addEventListener("click", () => {
    if (!pedido || pedido.estado === 'Listo') {
        pedido = new Pedido();
    }
    pedido.nombreCliente = document.getElementById("nombre").value;
    pedido.enviarPedidoACocina();
});

function marcarListo(nombreCliente) {
    if (pedido && pedido.estado === 'En cocina' && pedido.nombreCliente === nombreCliente) {
        pedido.marcarPedidoListo();
    }
}
