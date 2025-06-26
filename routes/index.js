const express = require('express');
const Router = express.Router();

const UserCtrl = require('../controllers/user.controller.js');

const { verifyUser } = require('../middlewares/jwttoken.js');

Router.post('/user/register', UserCtrl.RegisterUser)
Router.post('/user/login', UserCtrl.LoginUser)
Router.get('/user/my-profile', verifyUser, UserCtrl.GetProfile)
Router.patch('/user/edit-profile', verifyUser, UserCtrl.EditProfile)

module.exports = Router;