// build your `/api/tasks` router here
const router = require('express').Router()

const Task = require('./model')

router.get('/:task_id', (req, res, next) => {
    Project.getProjectById(req.params.task_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went horribly wrong inside the task router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router