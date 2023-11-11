const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const UsersModel = require('../models/UsersModel');


router.post('/register', 
            async(req, res) =>{
                try {
                    const user = 
                        await UsersModel.create(req.body)
        
                    res
                        .status(201)
                        .json({
                            success : true, 
                            data: user
                        })
            
                } catch (error) {
                     res
                        .status(400)
                        .json({
                            success: false, 
                            msg: error.message
                        })
                }  
               
            })

module.exports = router