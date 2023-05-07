// build your `Project` model here
const db = require('../../data/dbConfig')


async function getProjects() {
  const projects = await db('projects')
  const result = [];
  projects.forEach(project => {
      console.log(project);
      if(project.project_completed === 1) {
          result.push({...project, project_completed: true});
      } else {
          result.push({...project, project_completed: false});
      }
  })
  return result
}

async function createProject(project) {
  const [result] = await db('projects')
      .insert(project)
  const newProject = await findProjectById(result)
  if(
      newProject.project_completed > 0
      || newProject.project_completed === true) {
          return {...newProject, project_completed: true}
  } else {
      return {...newProject, project_completed: false}
  }
}

function findProjectById(project_id) {
  return db('projects')
      .where({project_id})
      .first()
}

module.exports = {
  getProjects,
  createProject,
  findProjectById
}