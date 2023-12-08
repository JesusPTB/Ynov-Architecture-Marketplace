import express from 'express';
import {User} from "../Models/user";

const router = express.Router();


/* GET users listing.
* Needs to be authenticated and to have the role of admin
*
* /!\ Currently, the role is not checked // TODO
*/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  }
  catch (error) {
    res.status(500).send('Internal server error');
  }
});

/* GET user by id.
** Needs to be authenticated and to have the role of admin or the user id must match the id in the request
*
* /!\ Currently, the user id is not checked // TODO
*/
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  }
  catch (error) {
    res.status(404).send('User not found');
  }
});


module.exports = router;
