// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAllProjects() {
    const projects = await db('projects')
    projects.forEach(
        (project) => (project.project_completed = !!project.project_completed)
    )
}

async function getProjectById(project_id) {
    const [project] = await db('projects').where('project_id', id)
    if(project) {
        project.project_completed = project.project_completed
    }
    return project
}

async function postNewProject(project) {
    const[id] = await db('prjects').insert(project)

    const createdProject = await getProjectById(id)
    return createdProject
}
module.exports = { postNewProject, getProjectById, getAllProjects}