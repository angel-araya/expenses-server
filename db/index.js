const Sequelize = require('sequelize')
const sequelizeConnection = new Sequelize('node', 'node', 'node', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    iddle: 10000
  }
})

const db = {
  Sequelize: Sequelize,
  sequelize: sequelizeConnection
}

db.Transaction = db.sequelize.import('./models/transactions.js')
db.Account = db.sequelize.import('./models/accounts.js')

<<<<<<< HEAD:db/index.js
db.sequelize.sync()
=======
db.sync()
>>>>>>> dd859c47b49be16a46f11cf945d1a8ba4c302feb:db/index.js

module.exports = db
