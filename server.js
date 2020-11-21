const express = require('express')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const db = require('./database')
const { response } = require('express')
const app = express()
const port = process.env.PORT || 5000

const database = {
  users: [
    {
      id: '123456',
      name: 'John',
      email: '123@1.com',
      password: '123456',
      entries: 0,
      joined: new Date(),
    },
    {
      id: '124',
      name: 'Dima',
      email: 'dima@gmail.com',
      password: 'abraasd',
      entries: 0,
      joined: new Date(),
    },
  ],
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/api/', (req, res) => {
  res.send(database.users)
})

app.post('/api/signin', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success')
  } else {
    res.status(400).json('error logging in')
  }
})

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body
  db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((user) => {
      res.json(user[0])
    })
    .catch((err) => res.status(400).json('unable to register'))
})

app.get('/api/profile/:id', (req, res) => {
  const { id } = req.params
  let found = false
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true
      return res.json(user)
    }
  })
  if (!found) {
    res.status(400).json('not found')
  }
})

app.put('/api/image', (res, req) => {
  const { userId } = req.body
  let found = false
  database.users.forEach((user) => {
    if (user.id === userId) {
      found = true
      user.entries++
      return res.json(user.entries)
    }
  })
  if (!found) {
    res.status(400).json('not found')
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
