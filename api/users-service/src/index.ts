import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { sequelize } from './database';
import {User} from "./Models/user";
import {Role} from "./Models/role"; // Adjust the path as necessary
const app: Express = express();
const port = process.env.PORT;
dotenv.config();

var authRouter = require('./routes/auth');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req: Request, res: Response) => {
  res.json({info: 'User service'})
});
app.use('/', authRouter);
app.use('/users', require('./routes/users'));

// Connect to the database
(async () => {
  try {

    console.log('Connecting to the database...')
    console.log('DB host : ' + process.env.DB_HOST);

    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    }).catch((err: any) => {
      throw new Error('Unable to connect to the database:' + err);
    });
    // console.log('Connection has been established successfully.');

    // Create the tables if they do not exist
    // User.sync({force: true}).then(() => {
    //   console.log(`User table created!`);
    // }).catch((err: any) => {
    //   console.error('Unable to create User table:', err);
    // });
    // Role.sync({force: true}).then(() => {
    //   console.log(`Role table created!`);
    // }).catch((err: any) => {
    //   console.error('Unable to create Role table:', err);
    // });

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
