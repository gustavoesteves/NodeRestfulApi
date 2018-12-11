/**
 * Documentation reference
 * https://github.com/davidbanham/express-async-errors
 */
import * as express from "express";
import 'express-async-errors';
import { UserModel } from "../models/userModel";
const router = express.Router();

router.get('/', async (req, res) => {
    throw new Error('Could not get users'); 
  const users = await UserModel.find();
  res.send(users);
});

export default router;