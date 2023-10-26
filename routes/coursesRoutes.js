const express = require('express')
const router = express.Router()

//evidencia: uris de cursos

    //traer todos los cursos
    router.get('/',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los cursos"
                    })
        });

    //traer cursos por id
    router.get('/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando curso con id: ${request.params.id}`
                    })
        });

    //crear cursos
    router.post('/',
        (request, response)=> {
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg": "Crear curso"
                    })
        });

      //Actualizar cursos
      router.put('/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `curso con id: ${request.params.id} actualizado`
                  })
      });

  //Eliminar cursos
  router.delete('/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `curso con id: ${request.params.id} eliminado`
                  })
      });

module.exports = router