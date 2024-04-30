<?php

$nombre = isset($_POST['nombre']) ? $_POST['nombre']:"";
$telefono = isset($_POST['telefono']) ? $_POST['telefono']:"";
$genero = isset($_POST['genero'])? $_POST['genero']:"";
$banderaE = isset($_GET['banderaE']) ? $_GET['banderaE']: "";
$ids = isset($_POST['id']) ? $_POST['id']: "";
$idd= isset($_GET['iddelete']) ? $_GET['iddelete']: "";
include_once('conexion/conexion.php');

class registro{
    public $conexion ;
    public function __construct($conexion){
    $this->conexion = $conexion;
}
//metodo seleccion
public function select(){
    $consultaSelect= "SELECT * FROM tbl_mascota";
    $ejecutar_consulta = $this->conexion->conexion->query($consultaSelect);
    return $ejecutar_consulta->fetch_all(MYSQLI_ASSOC);

}

public function insert($datos){
    $campos = implode(',', array_keys($datos));
    
    $valores = "'".implode("','", array_values($datos))."'";
    
    $consulta_insertar =" INSERT INTO tbl_mascota ($campos) VALUES ($valores)";
    
    $resultado = $this->conexion->conexion->query($consulta_insertar);

        if ($resultado){
            return true;
        }else{
            $this->conexion->conexion->error;
        }
    }
//selectupdate
    public function selectupdate($id){
        $consultaSelect= "SELECT * FROM tbl_mascota WHERE id_mascota=$id";
        $ejecutar_consulta = $this->conexion->conexion->query($consultaSelect);
        return $ejecutar_consulta->fetch_all(MYSQLI_ASSOC);
    }
//update fuction
    public function update($id, $datos){
        $set = [];
        foreach ($datos as $campo => $valor){
            $set[] = "$campo = '$valor'";
        }
        $set = implode (',', $set);
      
        $consulta_actualizar = "UPDATE tbl_mascota SET $set WHERE id_mascota = $id";
        $resultado = $this->conexion->conexion->query($consulta_actualizar);
        if($resultado){
            return true;
        }else{
            return $this->conexion->conexion->error;
        }
    }

    //metodod de eliminacion
    public function delete($id){
        $consultadelete = "DELETE FROM tbl_mascota WHERE id_mascota = $id";
        $ejecutar_delete = $this->conexion->conexion->query($consultadelete);
        return $ejecutar_delete;
    }
}

$gestion = new tbl_mascota($conexion);
//identificacion de banderas para el proceso
//bandera 1
if ($accion == "Insertar"){
$datosInsert = array('nombre' => $nombre, 'raza' => $raza, 'edad' => $edad);
$conexion -> conectar();
$prueba = $gestion->insert($datosInsert);

if ($prueba){
    echo json_encode(array("mensaje" => "Mascota agregada correctamente"));
    }
//bandera 2
}
else if($accion == "Modificar"){
    $id = $ids;
    $datosUpdate = array('nombre' => $nombre, 'telefono' => $telefono, 'genero' => $genero);
    var_dump($datosUpdate);
    $conexion -> conectar();
    $prueba = $gestion->update($id, $datosUpdate);

    if ($prueba){
        header("Location: index.php");
    }
}
else if($accion == "Eliminar"){
    $conexion -> conectar();
    $prueba = $gestion->delete($idd);
    if ($prueba){
        header("Location: index.php");
    }
}else if($accion=="Mostrar"){
    $conexion -> conectar();
    $prueba = $gestion->select($idd);
    if ($prueba){
        echo json_encode($prueba);
    }
}elseif($accion=="SelectId"){
    $conexion -> conectar();
    $prueba = $gestion->selectupdate($idd);
    if ($prueba){
        echo json_encode($prueba);
    }
}
?>