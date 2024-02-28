class Pedido {
    constructor(item, cantidad) {
        this._item = item;
        this._cantidad = cantidad;
        this._estado = "En cocina";
    }

    get item() {
        return this._item;
    }

    set item(item) {
        this._item = item;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }

    get estado() {
        return this._estado;
    }

    set estado(estado) {
        this._estado = estado;
    }
}

let pedidosEnCocina = [];
let pedidosListos = [];

function agregarPedido() {
    const item = document.getElementById("item").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    const pedido = new Pedido(item, cantidad);
    pedidosEnCocina.push(pedido);
    mostrarPedidos();
}

function moverPedido(index, listaOrigen, listaDestino) {
    const pedido = listaOrigen.splice(index, 1)[0];
    pedido.estado = "Listo";
    listaDestino.push(pedido);
    mostrarPedidos();
}

function mostrarPedidos() {
    const tablaCocina = document.getElementById("pedidosEnCocina").getElementsByTagName('tbody')[0];
    const tablaListos = document.getElementById("pedidosListos").getElementsByTagName('tbody')[0];

    tablaCocina.innerHTML = '';
    tablaListos.innerHTML = '';

    pedidosEnCocina.forEach((pedido, index) => {
        const row = tablaCocina.insertRow();
        row.innerHTML = `<td>${pedido.item}</td><td>${pedido.cantidad}</td><td>${pedido.estado}</td>`;
        const botonListo = document.createElement("button");
        botonListo.textContent = "Listo";
        botonListo.onclick = () => moverPedido(index, pedidosEnCocina, pedidosListos);
        row.appendChild(botonListo);
    });

    pedidosListos.forEach((pedido, index) => {
        const row = tablaListos.insertRow();
        row.innerHTML = `<td>${pedido.item}</td><td>${pedido.cantidad}</td><td>${pedido.estado}</td>`;
    });
}
