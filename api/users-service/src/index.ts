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

// Connect to the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
    // await User.create({
    //   firstname: 'John',
    //   lastname: 'Doe',
    //   email: 'johndoe@gmail.com',
    //   password: '123456',
    // });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
