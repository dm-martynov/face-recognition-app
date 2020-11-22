const Clarifai = require('clarifai')

const app = new Clarifai.App({
  apiKey: '7ce7664ce50044fd8afa34592eb44d45',
})

const handleApiCall = (req, res) => {
  app.models
    .predict('53e1df302c079b3db8a0a36033ed2d15', req.body.url)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => res.status(400).json('unable to work with API'))
}

const updateEntries = (req, res, db) => {
  const { userId } = req.body
  db('users')
    .where('id', '=', userId)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => res.json(entries[0]))
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
}

module.exports = {
  updateEntries,
  handleApiCall,
}
