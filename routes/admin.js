const router = require('express').Router()
const db = require('./../db/index.js')

router.delete('/delete/all', (req, res) => {
  db.sequelize.sync({ force: true })
  res.json()
})

module.exports = router
