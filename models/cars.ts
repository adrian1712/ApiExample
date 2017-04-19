import * as mongoose from 'mongoose';

export interface Car extends mongoose.Document {
  name: string;
  type: string;
  price: number
}

let carsSchema = new mongoose.Schema ({
    name: String,
    type: String,
    price: Number
})

export default carsSchema;
