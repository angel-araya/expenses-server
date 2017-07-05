const Sequelize = require('sequelize')
const path = require('path')
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

module.exports = db
