// build your `/api/resources` router here
const router = require('express').Router()

const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try{
        const resources = await Resource.getAllResources()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.get('/:resource_id', (req, res, next) => {
    Project.getProjectById(req.params.resource_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.postNewResource(req.body)
        res.status(201).json(newResource)
    } catch (err) { 
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went horribly wrong inside the resource router',
        message: err.message,
        stack: err.stack
    })

    module.exports = router
})