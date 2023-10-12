//Dependecia commonJS
const express = require('express')

//Crear el objeto app
const app = express()

//primera prueba de URL del servidor
app.get('/prueba', 
    function(request, response){
        response.send("Holaaaaa");    
});

//uris de bootcamps

    //traer todos los bootcamps
    app.get('/api/v1/devcamp-2687351/bootcamps',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los bootcamps"
                    })
        });

    //traer bootcamp por id
        app.get('/api/v1/devcamp-2687351/bootcamps/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando bootcamp con id: ${request.params.id}`
                    })
        });

    //crear bootcamps
    app.post('/api/v1/devcamp-2687351/bootcamps',
        (request, response)=> {
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg": "Crear bootcamp"
                    })
        });

    //Actualizar bootcamps
    app.put('/api/v1/devcamp-2687351/bootcamps/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `bootcamp con id: ${request.params.id} actualizado`
                    })
        });

    //Eliminar bootcamps
    app.delete('/api/v1/devcamp-2687351/bootcamps/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `bootcamp con id: ${request.params.id} eliminado`
                    })
        });

//-----------------------------------------------------------------------------------------------------------------------------------


//evidencia: uris de cursos

    //traer todos los cursos
    app.get('/api/v1/devcamp-2687351/cursos',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los cursos"
                    })
        });

    //traer cursos por id
        app.get('/api/v1/devcamp-2687351/cursos/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando curso con id: ${request.params.id}`
                    })
        });

    //crear cursos
    app.post('/api/v1/devcamp-2687351/cursos',
        (request, response)=> {
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg": "Crear curso"
                    })
        });

      //Actualizar cursos
      app.put('/api/v1/devcamp-2687351/cursos/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `curso con id: ${request.params.id} actualizado`
                  })
      });

  //Eliminar cursos
  app.delete('/api/v1/devcamp-2687351/cursos/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `curso con id: ${request.params.id} eliminado`
                  })
      });

//-----------------------------------------------------------------------------------------------------------------------------------

//evidencia: uris para reviews
    //traer todos los reviews
    app.get('/api/v1/devcamp-2687351/reviews',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los reviews"
                    })
        });

    //traer reviews por id
        app.get('/api/v1/devcamp-2687351/reviews/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando review con id: ${request.params.id}`
                    })
        });

    //crear reviews
    app.post('/api/v1/devcamp-2687351/reviews',
        (request, response)=> {
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg": "Crear review"
                    })
        });

      //Actualizar reviews
      app.put('/api/v1/devcamp-2687351/reviews/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `review con id: ${request.params.id} actualizado`
                  })
      });

  //Eliminar reviews
  app.delete('/api/v1/devcamp-2687351/reviews/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `review con id: ${request.params.id} eliminado`
                  })
      });

//-----------------------------------------------------------------------------------------------------------------------------------

//evidencia: uris para users

    //traer todos los users
    app.get('/api/v1/devcamp-2687351/users',
    (request, response)=> {
        response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los users"
                })
    });

    //traer user por id
    app.get('/api/v1/devcamp-2687351/users/:id',
    (request, response)=> {
        response
                .status(200)
                .json({
                    "success": true,
                    "msg": `seleccionando user con id: ${request.params.id}`
                })
    });

    //crear users
    app.post('/api/v1/devcamp-2687351/users',
    (request, response)=> {
        response
                .status(201)
                .json({
                    "success": true,
                    "msg": "Crear user"
                })
    });

    //Actualizar users
    app.put('/api/v1/devcamp-2687351/users/:id',
    (request, response)=> {
    response
            .status(200)
            .json({
                "success": true,
                "msg": `user con id: ${request.params.id} actualizado`
            })
    });

    //Eliminar users
    app.delete('/api/v1/devcamp-2687351/users/:id',
    (request, response)=> {
    response
            .status(200)
            .json({
                "success": true,
                "msg": `user con id: ${request.params.id} eliminado`
            })
    });

//Establecer servidor
const PUERTO = 4500

app.listen(PUERTO, 
    console.log("Servidor escuchado en el puerto: "+PUERTO))
