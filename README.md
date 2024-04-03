<h1>Desafío evaluado - Always Music</h1>
<h2>Paso a paso</h2>
<ol>
  <li><h3>Tabla hecha en postgres</h3></li>
<p>Primero creamos nuestra base de datos en DBeaver la cual llamaremos 'always-music'. Está contendrá nuestra tabla llamada 'estudiantes'</p>
<p>Tenemos nuestra tabla con 3 usuarios ya ingresados. Como notarás, no hay ningún comando escrito previamente, ya que no fueron ingresados directamente</p>
<img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/528bee29-8b8e-45e5-88cb-bebb9c1aca14'>
<figcaption>Tabla 'estudiantes' con 3 usuarios ingresados</figcaption>
<li><h3>Función para ingresar a un nuevo estudiante</h3></li>
<p>Para este ejercicio realizaremos una conexión de tipo Pool. En config/estudiantes.js importamos pkg, la constante {Pool} y 'dotenv' para proteger nuestros datos.</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/8a25f90d-a36c-4c6c-9740-7ca4a51dc550'>
  <figcaption>Datos protegidos con dotenv</figcaption>
  <p>En consultas.js ubicado en la carpeta 'Tabla' escribimos las funciones necesarias para modificar la base de datos. Importamos el archivo estudiantes.js</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/4867d983-30c0-4971-a6c3-0c841dfb80b2'>
  <figcaption>El llamado en la función está en la línea 51 y 52. La acción se reduce a la palabra add (Equivalente a la constante 'Opcion'))</figcaption>
  <p>Agregaremos a un nuevo estudiante a través de la terminal con el siguiente comando:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/01c10c88-2d75-43df-8a34-313997317771'>
  <figcaption>Comando escrito en la consola</figcaption>
  <p>Y si revisamos en nuestra base de dato podemos corroborar que fue ingresado sin problemas:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/3daee049-15dd-4208-89ee-8260b47b678f'>
  <li><h3>Función para mostrar en la consola a un estudiante sólo con su rut</h3></li>
  <p>A diferencia de la función add no es necesario colocar los valores dentro de la función porque response.rows es responsable de mostrar la fila completa con los datos correspondientes</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/e4e164bc-b06c-4ad0-a108-01176306eeea'>
    <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/ca6eecfd-8eeb-4e58-b031-4f95f777bb84'>
  <figcaption>Sólo con el rut podemos obtener los datos del estudiante</figcaption>
  <li><h3>Función para mostrar a todos los estudiantes en la consola</h3></li>
  <p>Parecido al requerimiento anterior, dejamos 'select * from estudiantes'. En este caso, lo llamamos por 'show' sin especificar rut:</p>
  <img src='https://github.com/PauliPuli/DE-Always_music/assets/156126623/d309af7f-4e3c-4dc2-a6c9-cde1111a7663'>
  <figcaption>Muestra un arreglo de objetos con los 4 estudiantes inscritos</figcaption>
  <li><h3>Función asíncrona para actualizar los datos de un estudiante</h3></li>
  <p></p>
</ol>
