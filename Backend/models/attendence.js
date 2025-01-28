import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js'; // Make sure to have a database configuration file

class Attendance extends Model { }

Attendance.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, status: {
        type: DataTypes.STRING,
        allowNull: false,
    }, date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Attendance',
    tableName: 'Attendance',
    timestamps: true, // Adds createdAt and updatedAt
});

export default Attendance;
