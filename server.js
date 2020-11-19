const express = require('express')
const bcrypt = require('bcryptjs')

const app = express()
const port = process.env.PORT || 5000

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'abra',
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

app.get('/', (req, res) => {
  res.send(database.users)
})

app.post('/signin', (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json('success')
  } else {
    res.status(400).json('error logging in')
  }
  res.json('signin')
})

app.post('/register', (req, res) => {
  const { name, email, password } = req.body
  database.users.push({
    id: '125',
    name: name,
    email: email,
    password: 'cookies',
    entries: 0,
    joined: new Date(),
  })
  res.json(database.users[database.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
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

app.put('/image', (res, req) => {
  const { id } = req.body
  let found = false
  database.users.forEach((user) => {
    if (user.id === id) {
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