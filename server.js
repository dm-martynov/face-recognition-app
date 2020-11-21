const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const db = require('./database')
const { response } = require('express')
const app = express()
const port = process.env.PORT || 5000

bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash('B4c0//', salt, function (err, hash) {
    // Store hash in your password DB.
  })
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/api/', (req, res) => {
  res.send(database.users)
})

app.post('/api/signin', (req, res) => {
  db.select('email', 'hash')
    .from('login')
    .where('email', '=', req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash)
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', req.body.email)
          .then((user) => {
            res.json(user[0])
          })
          .catch((err) => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials')
      }
    })
    .catch((err) => res.status(400).json('wrong credentials'))
})

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  db.transaction((trx) => {
    trx
      .insert({
        hash,
        email,
      })
      .into('login')
      .returning('email')
      .then((logEmail) => {
        return trx('users')
          .returning('*')
          .insert({
            email: logEmail[0],
            name: name,
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0])
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  }).catch((err) => res.status(400).json('Unable to register'))
})

app.get('/api/profile/:id', (req, res) => {
  const { id } = req.params
  db.select('*')
    .from('users')
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0])
      } else res.status(400).json('Not found')
    })
    .catch((err) => res.status(400).json('Error getting user'))
})

app.put('/api/image', (req, res) => {
  const { userId } = req.body
  db('users')
    .where('id', '=', userId)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => res.json(entries[0]))
    .catch((err) => {
      console.log(err)
      res.status(400).json('Unable to get entries')
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
