const router = require('express').Router()
const db = require('./../db/index.js')

router.post('/insert', async (req, res) => {
  // TODO: validate the query
  try {
    t = await db.Transaction.create({
      amount: req.body.amount,
      date: req.body.date
    })

    res.json({
      inserted: t
    })
  } catch (e) {
    //TODO: Error handling
    res.json({ status: 'NOT OK' }).status(500)
  }
})

module.exports = router
