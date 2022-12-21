const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');

router.post("/", (req, res) => {
    if (!req.session.user_id) {
        return res.status(403).json({ msg: "Please login" })
    }
    Comment.create({
        content: req.body.comment,
        PostId: req.body.postid,
        UserId: req.session.user_id
    }).then(commentData => {
        res.json(commentData)
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
})

router.delete('/:id', (req, res) => {
    if (!req.session.logged_in) {
        return res.status(401).json({ msg: "Please login" })
    }
    Comment.destroy({
        where: {
            id: req.params.id,
            UserId: req.session.user_id,
        },
    }).then(deldata => {
        res.status(200).json(deldata)
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })

});

router.put('/:id', (req, res) => {
    if (!req.session.logged_in) {
        return res.status(401).json({ msg: "Please login" })
    }
    Comment.update(
        {
            content: req.body.comment,
        },
        {
            where: {
                id: req.params.id,
                UserId: req.session.user_id,
            }
        })
        .then(updateddata => {
            res.status(200).json(updateddata)
        }).catch(err => {
            res.status(500).json({ msg: "an error occurred", err })
        })

});
module.exports = router;