// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()


router.get('/', (req, res, next)=>{
    Resource.getResources()
    .then(resources=> {
        res.json(resources)
    })
    .catch(next)
})
router.post('/', (req, res) => {
    const resource = req.body;
  
    if (!resource.resource_name) {
      res.status(400).json({ message:  'RRESOURCE NAME is required' });
    } else {
      Resource.addResource(resource)
        .then(newResource => {
          res.status(201).json(newResource);
        })
        .catch(error => {
          res.status(500).json({ 
            message: 'Error adding resource',
            error: error.message });
        });
    }
  });
  
  router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
      message: 'Error something went wrong in resource router.',
      err: err.message,
      stack: err.stack,
    })
  })
  
module.exports = router