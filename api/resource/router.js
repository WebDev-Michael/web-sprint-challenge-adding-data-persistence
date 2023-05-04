// build your `/api/resources` router here
const router = require('express').Router()

const Resource = require('./model')

router.get('/:resource_id', (req, res, next) => {
    Project.getProjectById(req.params.resource_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went horribly wrong inside the resource router',
        message: err.message,
        stack: err.stack
    })

    module.exports = router
})