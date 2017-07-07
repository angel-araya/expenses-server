const db = require('./../db/index.js')
const router = require('express').Router()

router.post('/new', async (req, res) => {
  try {
    t = await db.Account.create({
      name: req.body.name,
      balance: req.body.initialAmount,
      currency: req.body.currency
    })

    res.json(t)
  } catch (e) {
    res.json('').status(500)
  }
})

module.exports = router
