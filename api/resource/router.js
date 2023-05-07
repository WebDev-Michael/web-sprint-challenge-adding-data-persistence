const router = require('express').Router();
const Resources = require('./model');
const db = require('../../data/dbConfig');

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    Resources.getByName(req.body.resource_name)
    .then(resp => {
        if (resp.length !== 0) {
            res.status(500).json({message:"Resource name must be unique"})
        } else {
            Resources.createResource(req.body)
            .then(response => {
                Resources.getById(response)
                .then(newResource => {
                    res.status(201).json(newResource[0])
                })
            }).catch(err => {
                res.json({message: "error creating resource",
            stack: err.stack})
            })
        }
    })
})



router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the resource router",
        stack: err.stack
    })
})


module.exports = router