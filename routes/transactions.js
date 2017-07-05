const router = require('express').Router()
const db = require('./../db/index.js')

router.post('/insert', async (req, res) => {
  // TODO: validate the query
  transaction = {
    amount: req.body.amount,
    date: req.body.date
  }
  try {
    t = await db.newTransaction(transaction)
    res.json({
      inserted: t.dataValues
    })
  } catch (e) {
    //TODO: Error handling
    res.json({ status: 'NOT OK' }).status(500)
  }
})

router.get('/all', async (req, res) => {
  //TODO: validate the query
  try {
    ts = await db.retrieveAll()
    res.json(ts)
  } catch (e) {
    res.status(500).end()
  }
})

router.get('/inrange', async (req, res) => {
  if (!req.query.from || !req.query.to) {
    res.status(400).json({ error: 'Invalid query parameters' })
  }
  try {
    ts = await db.retrieveRange(
      new Date(req.query.from),
      new Date(req.query.to)
    )
    res.json(ts)
  } catch (e) {
    res.status(500).end()
  }
})

router.delete('/reset', async (req, res) => {
  try {
    await db.resetDB()
    res.json({ status: 'OK' })
  } catch (e) {
    //TODO: Error handling
    res.status(500).end()
  }
})

module.exports = router
