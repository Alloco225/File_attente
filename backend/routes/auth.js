const User = require('../models/User');
const userRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const utils = require('../utils');


userRouter.post(
    "/signin",
    async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    username: user.username,
                    email: user.email,

                    isAdmin: user.isAdmin,
                    token: utils.generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: "Invalid email or password" });
    }
);
userRouter.post(
    "/register",
    async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            prenom: req.body.prenom,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: utils.generateToken(createdUser),
        });
    }
);

userRouter.get('/info/:id',async (request, response)=>{
    const user= await User.findOne({id:request.params.id});
      response.json(user);

})


module.exports = userRouter;