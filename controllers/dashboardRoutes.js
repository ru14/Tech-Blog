const router = require('express').Router();
const sequelize = require('../config/connection');
const { blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');