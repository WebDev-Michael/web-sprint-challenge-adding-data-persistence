// build your `/api/projects` router here
const router = require('express').Router()

const Project = require('./model')

router.get('/', async (req, res, next) => {
    try{
        const projects = await Project.getAllProjects()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.get('/:project_id', (req, res, next) => {
    Project.getProjectById(req.params.project_id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.postNewProject(req.body)
        res.status(201).json(newProject)
    } catch (err) { 
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went horribly wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router