const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');


// importing models
const Team = require('../models/Team');

// Secret key
const JWT_SECRET = 'GFGCCSCHKRETH';


// ROUTE 1 : get all team members = "/api/team/getteam" | Requires authentication

router.post('/getteam', fetchUser, async (req, res) => {
    try {
        const team = await Team.find({ user: req.user.id });
        res.json(team);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 2 : add member = "/api/team/addmember" | Requires authentication

router.post('/addmember', fetchUser, [
    body('name', 'Name length should be greater than 3').isLength({ min: 4 }),
    body('registrationnumber', 'Enter a valid Registration Number').isLength(15),
    body('email', 'Enter a valid Email').isEmail(),
    body('phone', 'Enter a valid phone number').isLength(10)
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    try {
        let team = await Team.findOne({ user: req.user.id });

        const member = {
            name: req.body.name,
            registrationnumber: req.body.registrationnumber,
            email: req.body.email,
            phone: req.body.phone
        }

        const findmem = await Team.find({ teammembers: { $elemMatch: { email: req.body.email } } })
        console.log(findmem);
        if (findmem.length !== 0) {
            return res.status(400).send({ error: "You can't add a member twice in a team!!" });
        }

        await team.teammembers.push(member);
        team.save()

        team = await Team.findOne({ user: req.user.id });
        res.json(team);

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 3 : delete member = "/api/team/deletemember/:id" | Requires authentication

router.delete('/deletemember/:id', fetchUser, async (req, res) => {
    try {
        let team = await Team.findOne({ user: req.user.id });
        if (!team) {
            return res.status(400).send('Couldnt find any team linked to current user');
        }

        await team.teammembers.pull({ _id: req.params.id });
        team.save();

        team = await Team.findOne({ user: req.user.id });
        res.json(team);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 4 : edit member = "/api/team/editmember/:id" | Requires authentication

router.put('/editmember/:id', fetchUser, async (req, res) => {
    try {
        const updateMember = {
            $set: {
                "teammembers.$.name": req.body.name,
                "teammembers.$.registrationnumber": req.body.registrationnumber,
                "teammembers.$.phone": req.body.phone,
                "teammembers.$.email": req.body.email
            }
        }
        await Team.updateOne({ user: req.user.id, 'teammembers._id': req.params.id }, updateMember);
        const team = await Team.find({ user: req.user.id });
        res.json(team);

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

module.exports = router;