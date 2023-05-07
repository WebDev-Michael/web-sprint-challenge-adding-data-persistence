// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
    return db('resources')
}

function getByName(name) {
        return db('resources').where('resource_name', name)
}

function getById(id) {
    return db('resources').where('resource_id', id)
}

async function createResource(resource) {
    const res = await db ('resources').insert(resource)
    return res
}

module.exports = {getResources, getByName, getById, createResource}