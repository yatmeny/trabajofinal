$(document).ready(()=>{     // Espera que cargue el DOM
    $.ajax({  //enlazar  data          
        type: "GET", // Define el método HTTP como GET para obtener datos   
        url: "../data/data_xml/docen.xml", //de donde         
        dataType:"xml" //tipo de dato     
    }).done((data)=>{         // Cuando termine la petición
        $(data).find('docente').each(             // Busca cada elemento 'docente'
            function(){                 
                let fila = $('<tr>')                 // Crea nueva fila
                fila.append($(`<td>${$(this).find('dni').text()}</td>`));// Añade celda DNI
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));// Añade celda nombre
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`)); // Añade celda apellido
                fila.append($(`<td>${$(this).find('edad').text()}</td>`)); // Añade celda edad
                $('#docentes tbody').append(fila);// Inserta fila en tabla docentes
                             })               
        })     
    $.ajax({  //enlazar  data          
        type: "GET",         
        url: "../data/data_xml/alum.xml", //de donde         
        dataType:"xml" //tipo de dato     
    }).done((data)=>{         
        $(data).find('alumno').each(   // Busca cada elemento 'alumno'
            function(){                 
                let fila = $('<tr>')                 
                fila.append($(`<td>${$(this).find('dni').text()}</td>`));                 
                fila.append($(`<td>${$(this).find('nombre').text()}</td>`));                 
                fila.append($(`<td>${$(this).find('apellido').text()}</td>`));                 
                fila.append($(`<td>${$(this).find('edad').text()}</td>`));                 
                $('#alumnos tbody').append(fila); // Inserta fila en tabla alumnos
                             })               
        })     
    $.ajax({  //enlazar  data          
        type: "GET",         
        url: "../data/data_xml/cur.xml", //de donde         
        dataType:"xml" //tipo de dato     
    }).done((data)=>{         
        $(data).find('curso').each(             
            function(){                 
                let fila = $('<tr>')                 
                fila.append($(`<td>${$(this).find('id_curso').text()}</td>`)); // Añade ID curso
                fila.append($(`<td>${$(this).find('id_nombre').text()}</td>`)); // Añade ID nombre
                fila.append($(`<td>${$(this).find('n_horas').text()}</td>`));  // Añade número de horas
                $('#curso tbody').append(fila);                 // Inserta fila en tabla curso
                             })               
        }) 
})