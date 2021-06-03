const router = require('express').Router();
const sequelize = require('../config/connection');
const { blog, User, comment } = require('../models');
const withAuth = require('../utils/auth');