import * as mongoose from 'mongoose';
import CarModel from './cars';
import {Car} from './cars';

export interface Manufacture extends mongoose.Document {
  name: string;
  cars: Car[]
}

let manufactureSchema = new mongoose.Schema({
    name: String,
    popularity: String,
    cars: [CarModel]

})

export default mongoose.model<Manufacture>('Manufacture', manufactureSchema);
