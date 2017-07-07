const router = require('express').Router()
const db = require('./../db/index.js')

router.post('/insert', async (req, res) => {
  // TODO: validate the query

  try {
    account = await db.Account.find({
      where: { name: req.body.accountName }
    })

    if (account == null) {
      res.json({ error: 'Unexisting account' }).status(400)
    }
  } catch (e) {
    res.json({ error: 'Internal error' }).status(500)
  }
  try {
    t = await db.Transaction.create({
      amount: req.body.amount,
      date: req.body.date,
      accountId: account.id
    })
    res.json(t)
  } catch (e) {
    //TODO: Error handling
    res.json({ status: 'NOT OK' }).status(500)
  }
})

module.exports = router
