// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('tasks.task_id', 
            'tasks.task_description', 
            'tasks.task_notes', 
            'tasks.task_completed', 
            'projects.project_name', 
            'projects.project_description');
}

function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return db('tasks').where({ task_id: ids[0] }).first();
    });
}

module.exports = {
  addTask,
  getTasks,
};