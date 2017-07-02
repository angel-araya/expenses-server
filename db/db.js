
const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'node', 'node', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    iddle: 10000
  }
})

const Transaction = sequelize.define('transaction', {
  amount: Sequelize.FLOAT,
  date: Sequelize.DATE
})

module.exports = {
  async newTransaction(transaction) {
    // TODO: Initialize DB with app, this is not needed in every call
    await Transaction.sync()
    // TODO: Data validation
    return Transaction.create({
      amount: transaction.amount,
      date: transaction.date
    })
  },

  async retrieveAll() {
    return Transaction.findAll({
      attributes: ['amount', 'date']
    })
  },

  async retrieveRange(from, to) {
    return Transaction.findAll({
      attributes: ['amount', 'date'],
      where: {
        date: {
          $between: [from, to]
        }
      }
    })
  },

  async resetDB() {
    return Transaction.sync({
      force: true
    })
  }
}
