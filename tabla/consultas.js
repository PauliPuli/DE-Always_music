import pool from '../config/estudiantes.js';

//Capturar datos
const estudiante = process.argv.slice(2);
const opcion=estudiante[0]; //¿Queremos agregar, eliminar o editar?
const nombre =estudiante[1];
let rut= estudiante[2];
const curso=estudiante[3];
const nivel= estudiante[4];

console.log(estudiante)


const addEstudiante= async(nombre,rut,curso,nivel)=>{
    let sql ='insert into estudiantes(nombre, rut , curso, nivel) values ($1,$2,$3,$4)';
    let valores=[nombre, rut, curso, nivel];

    const response= await pool.query(sql, valores);
    console.log('Estudiante agregado con éxito');
};


const showEstudiante= async()=>{
    let sql ='select * from estudiantes';

    const response= await pool.query(sql);
    console.log(response.rows);
}


const updateEstudiante= async(nombre,rut,curso,nivel)=>{
    let sql ='update estudiantes set nombre=$1, curso=$3, nivel=$4 where rut=$2';
const valores= [nombre, rut, curso, nivel];

    const response= await pool.query(sql, valores);
    console.log(response.rows);
}


const deleteEstudiante= async(rut)=>{
    let sql='delete from estudiantes where rut=$1'; //no es la ubicación, sino el parámetro
    const valores=[rut]
    const response= await pool.query(sql, valores);
    console.log('Eliminado');
} 

const selectEstudiante=async(rut)=>{
    let sql ='select * from estudiantes where rut=$1';
const valores=[rut];
    const response= await pool.query(sql, valores);
    console.log(response.rows);
}


if (opcion === 'add'){
    addEstudiante(nombre,rut,curso,nivel)
} else if (opcion === 'show'){
    showEstudiante()
} else if ( opcion === 'update'){
    updateEstudiante(nombre,rut,curso,nivel)
} else if ( opcion === 'delete'){
    rut=estudiante[1]; 
    deleteEstudiante(rut)
} else if (opcion == 'select'){
    rut=estudiante[1]; //
    selectEstudiante(rut)
} else {
    console.log('Función o acción no existente')
}
