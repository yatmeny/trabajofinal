$(document).ready(function () { // Espera que cargue el DOM
    $.ajax({
        url: "../data/data_json/iestp.json", // Ruta del archivo JSON de institución
        method: "GET", // Método HTTP para obtener datos
        datatype: "json", // Tipo de datos esperado
        success: function (data) { // Función que ejecuta cuando la petición es exitosa
            $("#institucion").text(data.institucion); // Inserta texto de institución en elemento con ID "institucion"
            $("#nombre").text(data.nombre); // Inserta texto de nombre en elemento con ID "nombre"
            $("#unidad").text(data.unidad); // Inserta texto de unidad en elemento con ID "unidad"
            $("#trabajo").text(data.trabajo); // Inserta texto de trabajo en elemento con ID "trabajo"
           
        } 
    })
    })

        
    $(document).ready(function () { // Espera que cargue el DOM
    $.ajax({
        url: "../data/data_json/alumno.json", // Ruta del archivo JSON de alumnos
        method: "GET", 
        datatype: "json", 
        success: function (data) { // Función ejecutada al recibir los datos
        
            const estudiantes = data.estudiantes; // Extrae el array de estudiantes del JSON
            estudiantes.forEach(function (estudiante) { // Itera sobre cada estudiante
                 const fila = // Crea template de fila HTML
                `<tr>
                    <td>${estudiante.dni}</td>
                    <td>${estudiante.nombre}</td>
                    <td>${estudiante.apellido}</td>
                    <td>${estudiante.edad}</td>
                 </tr>`;
                $("#alumnos tbody").append(fila); // Añade la fila a la tabla de alumnos
            });
            
        } 
    })
    })
    
    
    
    $(document).ready(function () { // Espera que cargue el DOM
    $.ajax({
        url: "../data/data_json/cursos.json", // Ruta del archivo JSON de cursos
        method: "GET", 
        datatype: "json", 
        success: function (data) { // Función ejecutada al recibir los datos
            const cursos = data.cursos; // Extrae el array de cursos del JSON
            cursos.forEach(function (curso) { // Itera sobre cada curso
                 const fila = // Crea template de fila HTML
                `<tr>
                    <td>${curso.id_curso}</td>
                    <td>${curso.nombre_curso}</td>
                    <td>${curso.n_horas}</td>
                 </tr>`;
                $("#cursos tbody").append(fila); // Añade la fila a la tabla de cursos
            });
    
        } 
    })
    })
    
    
    $(document).ready(function () { // Espera que cargue el DOM
    $.ajax({
        url: "../data/data_json/docente.json", // Ruta del archivo JSON de docentes
        method: "GET", 
        datatype: "json", 
        success: function (data) { // Función ejecutada al recibir los datos   
            const docentes = data.docentes; // Extrae el array de docentes del JSON
            docentes.forEach(function (docente) { // Itera sobre cada docente
                 const fila = // Crea template de fila HTML
                `<tr>
                    <td>${docente.dni}</td>
                    <td>${docente.nombre}</td>
                    <td>${docente.apellido}</td>
                    <td>${docente.curso}</td>
                 </tr>`;
                $("#docentes tbody").append(fila); // Añade la fila a la tabla de docentes
            });
        } 
    })
    })