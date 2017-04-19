import * as mongoose from 'mongoose';
import CarModel from './cars';
import {Car} from './cars';

export interface Manufacture extends mongoose.Document {
  name: string;
  country: string;
  cars: Car[]
}

let manufactureSchema = new mongoose.Schema({
    name: String,
    country: String,
    cars: [CarModel]

})

export default mongoose.model<Manufacture>('Manufacture', manufactureSchema);
