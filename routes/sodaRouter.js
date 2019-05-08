const express = require('express');
const Soda = require('../models/soda');

const sodaRouter = express.Router();

sodaRouter.post('/', (req, res) => {
    let soda = new Soda()
    soda.name = req.body.name
    soda.rating = req.body.rating
    soda.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(`Saved your soda!\n${document}`);
        }
    });
});

sodaRouter.get('/', (req, res) => {
    Soda.find((err, documents) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(documents);
        }
    });
});

sodaRouter.get('/:soda_id', (req, res) => {
    Soda.findById(req.params.soda_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(document);
        } 
    });
});

sodaRouter.put('/:soda_id', (req, res) => {
    Soda.findById(req.params.soda_id, (err, document) => {
        if (err) {
            res.status(400).send(err);
        } else {
            document.name = req.body.name
            document.rating = req.body.rating

            document.save((savedErr, savedDoc) => {
                if (savedErr) {
                    res.status(400).send(savedErr);
                } else {
                    res.send(`Soda posted!\n${savedDoc}`);
                }
            });

        }
    });
});

sodaRouter.delete('/:soda_id', (req, res) => {
    Soda.deleteOne ({
        _id: req.params.soda_id
    }, (err) => {
       if (err) {
           res.status(400).send(err);
       } else {
           res.send(`You have successfully deleted soda: ${req.params.soda_id}`);
       }
    });
});

module.exports = sodaRouter;