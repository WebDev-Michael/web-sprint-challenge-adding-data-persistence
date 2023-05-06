// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getAllResources() {
    const resources = await db('resources')
    return resources
}

async function getResourceById(resource_id) {
    const [resource] = await db ('resources').where('resource_id', id)
    return resource
}

async function postNewResource() {
    const [id] = await db('resources').insert(resource)

    const createdResource = await getResourceById(id)
    return createdResource
}


module.exports = { postNewResource, getResourceById, getAllResources}