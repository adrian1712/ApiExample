import * as express from 'express';
import Manufacture from '../models/manufactures';

let router = express.Router();

router.get('/', (req, res) => {
    Manufacture.find().then((foundManufactures) => res.json(foundManufactures));
});

router.post('/', (req, res) => {
    let manufacture = new Manufacture();
    manufacture.name = req.body.name;
    manufacture.country = req.body.country;
    manufacture.cars = req.body.car;
    manufacture.save().then((savedManufactures) => res.json(savedManufactures));
})

export default router;
