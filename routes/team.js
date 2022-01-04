const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNDJjMjQ3MzMyZjA3ZDEzZWU3OTY4In0sImlhdCI6MTY0MTI5NDg4NH0.2u9r5PDSKbSiLNj3YhWgKbx0wAp8V1JyCdgXQivLtf8
*/

// importing models
const User = require('../models/User');
const Team = require('../models/Team');

// Secret key
const JWT_SECRET = 'GFGCCSCHKRETH';


// Route 1 : get all team members = "/api/team/getteam" | Requires authentication

router.post('/getteam', fetchUser, async (req, res) => {
    try {
        const team = await Team.find({ user: req.user.id });
        res.json(team);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// Route 2 : add member = "/api/team/addmember" | Requires authentication

router.post('/addmember', fetchUser, (req, res) => {

})

module.exports = router;