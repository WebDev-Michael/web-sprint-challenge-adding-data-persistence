exports.seed = function (knex, Promise) {
    return knex('resources').insert([
        {resource_name: 'W3Schools', resource_description: 'Coding reference and school'},
        {resource_name: 'MDN Web Docs', resource_description: 'Coding reference and school'},
        {resource_name: 'SQL', resource_description: 'Database query references'},
        {resource_name: 'GitHub', resource_description: 'Repository Platform'}
    ])
}