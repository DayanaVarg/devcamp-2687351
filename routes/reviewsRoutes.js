const express = require('express')
const router = express.Router()

//evidencia: uris para reviews
    //traer todos los reviews
    router.get('/',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los reviews"
                    })
        });

    //traer reviews por id
    router.get('/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando review con id: ${request.params.id}`
                    })
        });

    //crear reviews
    router.post('/',
        (request, response)=> {
            response
                    .status(201)
                    .json({
                        "success": true,
                        "msg": "Crear review"
                    })
        });

      //Actualizar reviews
      router.put('/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `review con id: ${request.params.id} actualizado`
                  })
      });

  //Eliminar reviews
  router.delete('/:id',
      (request, response)=> {
          response
                  .status(200)
                  .json({
                      "success": true,
                      "msg": `review con id: ${request.params.id} eliminado`
                  })
      });

module.exports = router