class Espada{
    constructor(tipo, ataque){
        this.tipo=tipo
        this.ataque=ataque
    }

    get Tipo (){
        return this.tipo
    }
    set Tipo(tipo){
        this.tipo=tipo
    }

    get Ataque(){
        return this.ataque
    }
    set Ataque(ataque){
        this.ataque=ataque
    }

    atacar(){
        return `La ${this.tipo} tiene un ataque de ${this.ataque} daño`
    }
}

class EspadaDiamante extends Espada{
    constructor(){
        super('Espada de diamante', 10000)
        
    }
    atacar(){
        return this.ataque
    }
}

class EspadaHierro extends Espada{
    constructor(){
        super('Espada de hierro', 1000)
        
    }
    atacar(){
        return this.ataque
    }

}

class EspadaPiedra extends Espada{
    constructor(){
        super('Espada de pierda', 100)
        
    }
    atacar(){
        return this.ataque
    }

}

class Zombie{
    constructor(vida){
        this.vida=vida
    }
    get Vida(){
        return this.vida
    }
    set Vida(vida){
        this.vida=vida
    }
    life(golpe){
        return this.vida= this.vida - golpe
    }
}


let espada = new EspadaDiamante()
let zombie=new Zombie(100000)

document.getElementById('attackButton').addEventListener('click', function() {
    document.querySelector('.sword').style.transform = 'rotate(-45deg)';


    let golpesito = espada.atacar()
    zombie.life(golpesito)

    let respuesta = document.getElementById('resultado')
    respuesta.innerText=`La ${espada.Tipo} da un golpe de ${golpesito} y el zombie le queda ${zombie.life(golpesito)}`

    //dont touch
    setTimeout(function() {
      document.querySelector('.sword').style.transform = 'rotate(0deg)';
    }, 500);
});


