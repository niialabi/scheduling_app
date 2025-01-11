import Meeting from './meeting.js';
import sequelize from '../config/sequelizer.js';



const db = {
    Meeting
}

db.sequelize = sequelize;

export default db;