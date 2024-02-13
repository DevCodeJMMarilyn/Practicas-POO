class Empleado{
    constructor(nombre,id, fechaIngreso, salario){
        this.nombre=nombre;
        this.id=id;
        this.fechaIngreso= fechaIngreso;
        this.salario=salario;
    }
    //informacion personal del empleado
    calculartiempo(){
        let fechaActual = new Date();
        let fechaYear=fechaActual.getFullYear()
        let fechaSplit=this.fechaIngreso.split("-");
        return console.log(fechaYear - fechaSplit[2]);

    }

    setNombre(nombre){
        return this.nombre==nombre;
    }

    setSalario(salario){
        return this.salario=salario;
    }

    calcularBonificacion(){
        if(this.calculartiempo()>=1){
            let bonificacion= this.salario*0.05
            console.log("La bonificación es de: "+bonificacion)

        }else if(this.calculartiempo()==2){
            let bonificacion= this.salario*0.10
            console.log("La bonificación es de: "+bonificacion)
        }
    }
}

class Departamento{
    constructor(nombre){
        this.nombre=nombre;
        this.empleadoList=[];
        this.gerente
    }

    agregarEmpleadoList(){
        let empleadoExiste= this.empleadoList.indexOf(empleado)

        if(empleadoExiste!=-1){
            this.empleadoList.push(empleado)
        console.log("Se agrego el empleado correctamente")
        }else{
            console.log("no se puede agregar un mismo empleado")
        }
        
    }

    calcularSumaSalario(){
        let sumaSalario=0
        if (this.empleadoList.length>0){
            this.empleadoList.forEach((empleado=>{
                sumaSalario+=empleado.getSalario()
                console.log
            }))
        }
            
    }

    eliminarEmpleadoList(empleado){
        let posicionEmpleado=this.empleadoList.indexOf(empleado)

        if(posicionEmpleado!==-1){
            this.empleadoList.splice(posicionEmpleado,1);
            console.log("Se elimino correctamente");

        }else{
            console.log("No existe empleado a eliminar");
        }
    }
}

const empleado1=new Empleado(1, 'Michelle', '01-01-2019', 400)
empleado1.calculartiempo()
empleado1.setNombre('Michelle')

