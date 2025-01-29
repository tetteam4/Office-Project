import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Attendance extends Model {}

Attendance.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY, // Ensures only the date part is stored (not the time)
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Attendance',
    tableName: 'Attendance',
    timestamps: true, // Adds createdAt and updatedAt
    indexes: [
      {
        unique: true,
        fields: ['name', 'date'], // Composite unique constraint
      },
    ],
  }
);

export default Attendance;
