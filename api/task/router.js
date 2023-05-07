//build your '/api/tasks'
const express = require('express')
const Task = require('./model')

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.getTasks();
    res.status(200).json(tasks.map(task => {
      return {
        task_id: task.task_id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: Boolean(task.task_completed),
        project_name: task.project_name,
        project_description: task.project_description,
      };
    }));
  } catch (err) {
    res.status(500).json({ 
      message: 'Could not retrieve tasks',
      err: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const task = await Task.addTask(req.body);
    res.status(201).json({
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: Boolean(task.task_completed),
      project_id: task.project_id,
    });
  } catch (err) {
    res.status(500).json({ 
      message: 'Could not add task',
      err: err.message,
   });
  }
});


router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: 'Sorry, something went wrong in task router.',
    err: err.message,
    stack: err.stack,
  })
})

module.exports = router