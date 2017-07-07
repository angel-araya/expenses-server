const server = require('express')()
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const transactions = require('./routes/transactions.js')
const accounts = require('./routes/accounts.js')
const admin = require('./routes/admin')

server.use(basicAuth({ users: { admin: 'admin' } }))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use('/transactions', transactions)
server.use('/accounts', accounts)
server.use('/admin', admin)

server.listen(process.env.PORT || 2345, () => {
  console.log(`Server listening on port ${process.env.PORT || 2345}`)
})
