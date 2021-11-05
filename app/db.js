const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    },
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});

module.exports = sequelize;