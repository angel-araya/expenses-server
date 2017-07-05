module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    name: DataTypes.STRING,
    balance: DataTypes.FLOAT
  })
}
