//contructor nombre, textura, nombreImagen, dimension
class Bloque{
    constructor(nombre, textura, nombreImagen, dimension){
        this.nombre= nombre
        this.textura=textura
        this.nombreImagen=nombreImagen
        this.dimension=dimension
    }

    mostrarDatos(){
        return `El bloque ${this.nombre}, con la textura ${this.textura} con la dimensión de ${this.dimension}`
    }

    img(){
        return imgCubo.setAttribute('src', "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png")
    }
    get NameImagen(){
        return this.nombreImagen
    }
}

class Tierra extends Bloque{
    get NameImagen(){
        return this.nombreImagen
    }
    mostrarDatos(){
        return "El bloque de tierra da uno de tierra"
    }
}
class Diamante extends Bloque{
    get NameImagen(){
        return this.nombreImagen
    }
    mostrarDatos(){
        return "El bloque de diamante da 4 diamantes"
    }
}
class Carbon extends Bloque{
   
    mostrarDatos(){
        return "El bloque de Carbon da 9 de carbon"
    }
}
class Madera extends Bloque{
    get NameImagen(){
        return this.nombreImagen
    }
    mostrarDatos(){
        return "El bloque de madera da un palo de madera"
    }
}
const BloqueTierra = document.getElementById("BloqueTierra")
BloqueTierra.addEventListener("click", ()=> {
    const BtnTierra =new  Tierra('BloqueTierra','','https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png', '')
    document.getElementById('mensaje').innerHTML=BtnTierra.mostrarDatos()
    

    const imgCubo=document.getElementById("imgCubo")
    console.log(BtnTierra.NameImagen)
    imgCubo.setAttribute('src', BtnTierra.NameImagen)
})

//imgCubo.setAttribute('src', "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png")
