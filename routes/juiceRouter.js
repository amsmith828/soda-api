const express = require('express');
const Juice = require('../models/juice');

const juiceRouter = express.Router();

juiceRouter.post('/', (req, res) => {
    let juice = new Juice()
    juice.fruit = req.body.fruit
    juice.rating = req.body.rating
    juice.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`Saved your juice!\n${document}`);
        }
    });
});

juiceRouter.get('/', (req, res) => {
    Juice.find((err, documents) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(documents);
        }
    });
});

juiceRouter.get('/:juice_id', (req, res) => {
    Juice.findById(req.params.juice_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(document);
        } 
    });
});

juiceRouter.put('/:juice_id', (req, res) => {
    Juice.findById(req.params.juice_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            document.name = req.body.name
            document.rating = req.body.rating

            document.save((savedErr, savedDoc) => {
                if (savedErr) {
                    res.status(400).send(savedErr);
                } else {
                    res.send(`Juice posted!\n${savedDoc}`);
                }
            });

        }
    });
});

juiceRouter.delete('/:juice_id', (req, res) => {
    Juice.deleteOne ({
        _id: req.params.juice_id
    }, (err) => {
       if (err) {
           res.status(400).send(err);
       } else {
           res.send(`You have successfully deleted juice: ${req.params.juice_id}`);
       }
    });
});

module.exports = juiceRouter;