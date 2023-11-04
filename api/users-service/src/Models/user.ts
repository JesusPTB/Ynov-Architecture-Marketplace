import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../database';
import {Role} from "./role";

export class User extends Model {
  declare id: string;
  declare firstname: string;
  declare lastname: string;
  declare email: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;

}
User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users'
});

User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'userRoles' });
