import * as mongoose from 'mongoose';
import CarModel from './cars';
import {Car} from './cars';

export interface Character extends mongoose.Document {
  name: string;
  cars: Car[]
}

let manufacturesSchema = new mongoose.Schema({
    name: String,
    popularity: String,
    cars: [CarModel]

})
