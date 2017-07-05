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

db.sync()

module.exports = db
