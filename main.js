const server = require('express')()
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const router = require('./routes/transactions.js')

server.use(
  basicAuth({
    users: {
      admin: 'admin'
    }
  })
)

server.use(
  bodyParser.urlencoded({
    extended: false
  })
)
server.use(bodyParser.json())
server.use('/transactions', router)

server.listen(process.env.PORT || 2345, () => {
  console.log(`Server listening on port ${process.env.PORT || 2345}`)
})
