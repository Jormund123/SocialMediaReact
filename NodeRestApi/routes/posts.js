const router = require("express").Router();
const Post = require("../models/Post.js");
const User = require("../models/user.js");

//Create
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save(); //saving the post just created
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Update
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        //verifying the user
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body }); //saving the changes made in the post
            res.status(200).json("Post Updated");
        } else {
            res.status(403).json("You only update your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//Delete
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); //here every property of the Post Model is stored inside the "post" variable
        //verifying the user
        if (post.userId === req.body.userId) {
            await post.deleteOne(); //deleting the post
            res.status(200).json("Post Deleted");
        } else {
            res.status(403).json("You only update your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//Like
router.put("/:id/like", async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        //first we check if the user has liked the post already or not.
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("Post Liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("Post Disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//Get
router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Get Timeline Posts
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
