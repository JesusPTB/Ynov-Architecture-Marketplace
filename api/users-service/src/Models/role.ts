import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../database';

export class Role extends Model {
  declare name: string;
}

Role.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Role', // We need to choose the model name
  tableName: 'roles'
});
