const handleRegister = (req, res, db, bcrypt) => {
  const { name, email, password } = req.body

  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission')
  }

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
}

module.exports = {
  handleRegister: handleRegister,
}
