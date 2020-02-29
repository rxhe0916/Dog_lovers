const router = require('express').Router();
let Image = require('../models/image.model');

router.route('/list').get((req, res) => {
    Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Image.findByIdAndDelete(req.params.id)
    .then(() => res.json('Image deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const imagelink = req.body.imagelink;
    const newImage = new Image({imagelink});

    newImage.save()
    .then(() => res.json('Image added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;