import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizer.js';

class Meeting extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        startTime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endTime: {
          type: DataTypes.DATE,
          allowNull: false,
        }
      },
      {
        sequelize,
        modelName: 'Meeting',
        tableName: 'meetings'
      }
    );
  }
}

Meeting.init(sequelize);


export default Meeting;