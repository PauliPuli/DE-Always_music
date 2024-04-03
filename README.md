<h1>Desafío evaluado - Always Music</h1>
<h2>Paso a paso</h2>
<ol>
  <li><h3>Tabla hecha en postgres</h3></li>
<p>Primero creamos nuestra base de datos en DBeaver la cual llamaremos 'always-music'. Está contendrá nuestra tabla llamada 'estudiantes'</p>
<p>Tenemos nuestra tabla con 3 usuarios ya ingresados. Como notarás, no hay ningún comando escrito previamente, ya que no fueron ingresados directamente</p>
<img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/528bee29-8b8e-45e5-88cb-bebb9c1aca14'>
<h6>Tabla 'estudiantes' con 3 usuarios ingresados</h6>
<li><h3>Función para ingresar a un nuevo estudiante</h3></li>
<p>Para este ejercicio realizaremos una conexión de tipo Pool. En config/estudiantes.js importamos pkg, la constante {Pool} y 'dotenv' para proteger nuestros datos.</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/8a25f90d-a36c-4c6c-9740-7ca4a51dc550'>
  <h6>Datos protegidos con dotenv</h6>
  <p>En consultas.js ubicado en la carpeta 'Tabla' escribimos las funciones necesarias para modificar la base de datos. Importamos el archivo estudiantes.js</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/4867d983-30c0-4971-a6c3-0c841dfb80b2'>
  <h6>El llamado en la función está en la línea 51 y 52. La acción se reduce a la palabra add (Equivalente a la constante 'Opcion'))</h6>
  <p>Agregaremos a un nuevo estudiante a través de la terminal con el siguiente comando:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/01c10c88-2d75-43df-8a34-313997317771'>
  <h6>Comando escrito en la consola</h6>
  <p>Y si revisamos en nuestra base de dato podemos corroborar que fue ingresado sin problemas:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/3daee049-15dd-4208-89ee-8260b47b678f'>
  <li><h3>Función para mostrar en la consola a un estudiante sólo con su rut</h3></li>
  <p>A diferencia de la función add no es necesario colocar los valores dentro de la función porque response.rows es responsable de mostrar la fila completa con los datos correspondientes</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/e4e164bc-b06c-4ad0-a108-01176306eeea'>
    <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/ca6eecfd-8eeb-4e58-b031-4f95f777bb84'>
  <h6>Sólo con el rut podemos obtener los datos del estudiante</h6>
  <li><h3>Función para mostrar a todos los estudiantes en la consola</h3></li>
  <p>Parecido al requerimiento anterior, dejamos 'select * from estudiantes'. En este caso, lo llamamos por 'show' sin especificar rut:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/d309af7f-4e3c-4dc2-a6c9-cde1111a7663'>
  <h6>Muestra un arreglo de objetos con los 4 estudiantes inscritos</h6>
  <li><h3>Función asíncrona para actualizar los datos de un estudiante</h3></li>
  <p>La función para actualizar requiere introducir todos los valores de la tabla. Pueden cambiar todos menos el rut (porque es un valor único)</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/877618df-ace1-4e0a-9c26-976e511cb6fe'>
  <p>Supongamos que Angélica se aburrió del piano y decidió cambiar de instrumento. Ahora quiere intentar con el violín.</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/6315005d-8c1e-4a68-bf67-76a4c1e48c9b'>
  <p>Consultamos a través del rut para corroborar el cambio:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/7ab8b5f5-a3d1-4123-8e47-0be408300079'>
  <li><h3>Función asíncrona para eliminar el registro de un estudiante</h3></li>
  <p>Desarrollamos la siguiente función:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/57238262-986c-49f7-ac50-95b5ce98c9ca'>
  <p>Ahora, eliminaremos a través del rut a Elisa Díaz:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/af6d99bc-9dc9-4a35-ab67-9e355b5a0afc'>
  <p>y corroboramos al consultar la tabla completa otra vez:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/8c882b05-f382-4df2-8211-4ecc0a4d8d2e'>
</ol>
<hr>
<h2>Conclusiones</h2>
<p>Si bien todo estos comandos se pueden realizar directamente en postgres esto es un acercamiento para conectar una base de datos a través de node express, lo que permitirá recopilar información a través de formularios en un servidor</p>
<p>En cuanto a la carpeta routes y el index.js, no los ocupamos para este desafío, mas es importante comenzar a familiarizarse con esta estructura de carpetas de aahora en adelante</p>
