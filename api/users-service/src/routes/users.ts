import express from 'express';
import {User} from "../Models/user";

const router = express.Router();


/* GET users listing.
* Needs to be authenticated and to have the role of admin
*/
router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  res.json(users);
});

/* GET user by id.
** Needs to be authenticated and to have the role of admin or the user id must match the id in the request
*/
router.get('/:id', async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});


module.exports = router;
