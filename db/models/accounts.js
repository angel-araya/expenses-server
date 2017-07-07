module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    name: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    currency: DataTypes.STRING
  })
}
