const express = require('express')
const bootcampModel = require('../models/BootcampsModels')
const router = express.Router()

//uris de bootcamps

    //traer todos los bootcamps
    router.get('/',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": "Mostrar todos los bootcamps"
                    })
        });

    //traer bootcamp por id
    router.get('/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `seleccionando bootcamp con id: ${request.params.id}`
                    })
        });

    //crear bootcamps
    router.post('/',
         (request, response)=> {
            //crear el nuevo bootcamp
            //const bootcamp = bootcampModel.
            //              create( request.body )
            
            response
                    .status(201)
                    .json({
                        "success": true,
                        "data":  request.body
                    })
        });

    //Actualizar bootcamps
    router.put('/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `bootcamp con id: ${request.params.id} actualizado`
                    })
        });

    //Eliminar bootcamps
    router.delete('/:id',
        (request, response)=> {
            response
                    .status(200)
                    .json({
                        "success": true,
                        "msg": `bootcamp con id: ${request.params.id} eliminado`
                    })
        });

module.exports = router