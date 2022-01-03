const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


// importing models
const User = require('../models/User');
const Team = require('../models/Team');

// Secret key
const JWT_SECRET = 'GFGCCSCHKRETH';

// ROUTE 1 : Registring a user = "/api/register" | Doesn't require authentication