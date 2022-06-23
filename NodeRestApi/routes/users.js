const router = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
//updateUser
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, genSalt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body, //this automatically sets all inputs inside the body
            });
            res.status(200).json("Account Updated");
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("Cannot be updated");
    }
});
//deleteUser
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete({ _id: req.params.id });
            res.status(200).json("Account Deleted");
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("Cannot be deleted");
    }
});
//getAUser
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, createdAt, isAdmin, ...other } = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
});
//followUser
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id); //user to be followed
            const currentUser = await User.findById(req.body.userId); //user which is following
            if (!user.followers.includes(req.body.userId)) {
                //if the user is already following the user
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json(" Following");
            } else {
                res.status(403).json("Already Followed");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You Can't Follow Yourself");
    }
});
//unfollowUser
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id); //user to be unfollowed
            const currentUser = await User.findById(req.body.userId); //user which is unfollowing
            if (user.followers.includes(req.body.userId)) {
                //if the user is already following the user
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json(" Unfollowed");
            } else {
                res.status(403).json("You don't follow the user.");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You Can't unfollow yourself");
    }
});
module.exports = router;
