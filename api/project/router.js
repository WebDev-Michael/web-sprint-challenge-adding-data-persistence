// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next)=>{
    try{
        const projects = await Project.getProjects()
        res.status(200).json(projects)
    }catch(err){
        next(err);
    }
})

router.post('/',async (req, res, next)=>{
    try{ 
        const { project_name }=req.body
        if(!project_name){
            next({ status:400, message: 'Project name is required'})
        } else{
            const createdProject = await Project.createProject(req.body);
            res.status(201).json(createdProject)
        }
    }catch (err){
        next(err);
    }
})

router.use((err, req, res, next)=>{
    res.status(500).json({
        message: 'Something wrong with project router',
        err: err.message,
        stack: err.stack
    })
})

module.exports= router