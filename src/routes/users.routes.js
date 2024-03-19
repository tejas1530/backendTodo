import express from 'express';
import controller from '../controller/index.js';

const user = express.Router();

user.get("/all",controller.GetAllUsers)


export default user;