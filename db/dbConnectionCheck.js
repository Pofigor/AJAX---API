const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database Connected!');
  } catch (error) {
    console.log('Database is not Connected!', error);
  }
};
