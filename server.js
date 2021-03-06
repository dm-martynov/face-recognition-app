const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const db = require('./database')
const app = express()
const port = process.env.PORT || 5000
const register = require('./controllers/register')
const signIn = require('./controllers/signIn')
const getProfile = require('./controllers/getProfile')
const handleImage = require('./controllers/handleImage')
const path = require('path')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.post('/api/signin', (req, res) => signIn.handleSignIn(req, res, db, bcrypt))

app.post('/api/register', (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
)

app.get('/api/profile/:id', (req, res) => getProfile.getProfile(req, res, db))

app.put('/api/image', (req, res) => handleImage.updateEntries(req, res, db))
app.post('/api/imageurl', (req, res) => handleImage.handleApiCall(req, res))

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
