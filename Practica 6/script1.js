//clase abstracta
class SerVivo{
    constructor(){

    }

    alimentarse(){
        console.log('Ser vivo se alimenta')
    }
    
}

class Planta extends SerVivo{
    constructor(){
        super()
    }

    alimentarse(){
        console.log("La planta se alimenta de fotosíntesis")
    }
}

class Animal extends SerVivo{

}

class AnimalCarnivoro extends Animal{
    constructor(){
        super()
    }
    alimentarse(){
        console.log("El animal carnivo se alimenta de carne")
    }
}


const plantita = new Planta()
plantita.alimentarse()
const leon = new AnimalCarnivoro()
leon.alimentarse()





//polimorfismo
class Vehiculo{
    constructor(placa, marca, modelo){
        this.placa= placa
        this.marca=marca
        this.modelo=modelo
    }
    mostrarDatos(){
        return `El vehiculo ${this.marca} ${this.modelo} con placa ${this.placa}`

    }

}

class Sedan extends Vehiculo{
    constructor(placa, marca,modelo, puertas){
        super(placa, marca,modelo)
        this.puertas=puertas
    }

    mostrarDatos(){
        return console.log (`El vehiculo ${this.marca} ${this.modelo} con placa ${this.placa} y cuenta con ${this.puertas} puertas`)
    }
}

const toyotaC= new Sedan("P-345320", "Toyota", "corola", 4)
toyotaC.mostrarDatos()