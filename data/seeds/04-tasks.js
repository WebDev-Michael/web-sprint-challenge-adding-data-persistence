exports.seed = function (knex, Promise) {
    return knex('tasks').insert([
        {task_description: 'Write middleware functions', task_notes: 'test each function for happy and sad paths', task_completed: true, project_id: 3},
        {task_description: 'Flesh out model.js', task_notes: 'remember to use SQL formatting', task_completed: false, project_id: 2},
        {task_description: 'Create mock server', task_notes: 'operate on localhost://9000', task_completed: true, project_id: 1}
    ])
}