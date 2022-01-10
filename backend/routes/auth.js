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

// ROUTE 1 : Registring a user = "/api/auth/register" | Doesn't require authentication

router.post('/register', [
    body('name', 'Name length must be greater than 3').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password length must be more than 6').isLength({ min: 6 }),
    body('teamname', 'Team name length must be greater than 2').isLength({ min: 2 }),
    body('phone', 'Enter a valid phone number').isLength({ min: 10 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry E-mail with this name already exists" });
        }

        let teamname = await Team.findOne({ teamname: req.body.teamname })
        if (teamname) {
            return res.status(400).json({ error: "Sorry Team with this name already exists" })
        }

        const salt = await bycrypt.genSalt(10);
        const secPass = await bycrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            registrationnumber: req.body.registrationnumber,
            phone: req.body.phone,
            password: secPass,
            teamname: req.body.teamname
        })

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        await Team.create({
            teamname: req.body.teamname,
            user: user._id
        })

        const admin = {
            name: req.body.name,
            registrationnumber: req.body.registrationnumber,
            email: req.body.email,
            phone: req.body.phone,
            admin: true
        }

        const team = await Team.findOne({ teamname: req.body.teamname });
        // console.log(team);
        await team.teammembers.push(admin);
        team.save();

        return res.json({ authToken });

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 2 : Logging In a user = "/api/auth/login" | Doesn't require authentication

router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password length must be greater than 0').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct email" });
        }
        const passComp = await bycrypt.compare(password, user.password);
        if (!passComp) {
            return res.status(400).json({ error: "Try to Log in with correct password" });
        }

        const payload = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        return res.send({ authToken });
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 3 : Getting a user = "/api/auth/getuser" | Requires authentication | auth-token in header

router.post('/getuser', fetchUser, async (req, res) => {
    try {
        let userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

module.exports = router;