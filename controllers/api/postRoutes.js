const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');

router.get("/", (req, res) => {
    Post.findAll({
        include: [User]
    }).then(postData => {
        res.json(postData)
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
})

router.post("/", (req, res) => {
    if (!req.session.user_id) {
        return res.status(403).json({ msg: "Please login" })
    }
    Post.create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.session.user_id
    }).then(postData => {
        res.json(postData)
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
})

router.put('/', (req, res) => {
    if (!req.session.user_id) {
        return res.status(403).json({ msg: "Please login" })
    }
    Post.update(
        {
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.body.id
            },
        }
    ).then(postData => {
        res.json(postData)
    }).catch(err => {
        res.status(500).json({ msg: "an error occurred", err })
    })
});

router.delete('/:id', (req, res) => {
    if (!req.session.logged_in) {
        return res.status(401).json({ msg: "Please login" })
    }
    Post.destroy({
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

module.exports = router;