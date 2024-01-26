require("dotenv").config();

const Sequelize = require("sequelize");


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // Use DB_PW instead of DB_PASSWORD
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306, // Specify the port number
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

module.exports = sequelize;
