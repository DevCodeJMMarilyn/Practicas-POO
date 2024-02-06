//Biblioteca
// Crear un sistema de gestión de biblioteca que permita administrar libros y socios. 
// Cada libro debe tener un título, un autor y un estado que indique si está disponible para préstamo o no. 
// Cada socio debe tener un nombre, un número de identificación y una lista de libros prestados.
class libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.estado ="Disponible";

        //listado
        verEstado() = {
            return this.estado
        }
    }

    class socio{
        constructor(titulo, autor){
            this.nombre = nombre;
            this.id = id;
            this.listaLibro =[];
    }
}