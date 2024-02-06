//practica 1 
class Animal {
            
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.vaccinelist= [];

    vaccine(){
        let vaccionem2 = {
            name:"m2"
        }
        if(this.vaccinelist.length>0){
            if(this.vaccinelist=="m2"){
                this.vaccinelist.push("m3");
            }
            
        }else{
            this.vaccinelist.push(vaccionem2)
        }
    }

    allvacine(){
        if(this.vaccinelist.length>0){
            this.vaccinelist.forEach((vacinei =>{
                console.log(vacinei);
            }))
        }else{
            console.log("no hay ninguna vacuna");
        }
    }
  }

  getName(){
    return this.name;
  }
  setName(name){
    return this.name=name;
  }

}

const animal1 = new Animal('Dog', 3);
const animal2 = new Animal('Cat', 5);
          
console.log(animal1.getName());
animal1.vaccine;

animal1.vaccine();
console.log(animal1.allvacine());
console.log(animal2.allvacine());