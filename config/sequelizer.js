import 'dotenv/config';
import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   process.env.MYSQL_DBNAME,
//   process.env.MYSQL_USERNAME,
//   process.env.MYSQL_PASSWORD,
//   {
//     host: process.env.MYSQL_HOST,
//     dialect: 'mysql'
//   },
// );

const sequelize = new Sequelize(
  process.env.POSTGRES_URL,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: false
  },
);



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;