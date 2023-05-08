import { object } from "joi";
import { Document, Schema, Model, model, Types } from "mongoose";
import mongoose from "mongoose";


export interface Listing extends Document {
  user_id: Types.ObjectId;
  make: string;
  model: string;
  year: number;
  description: string;
  type: string;
  location: string;
  image_urls: string[]; // new field for multiple image URLs
  price_per_day: number;
  is_available: boolean;
  
}



const listingSchema = new Schema<Listing>({
  user_id: { type: Schema.Types.ObjectId, /*required: true */},
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  type: {type: String, requiered: true},
  location: { type: String, required: true },
 // primary_image_url: { type: String, required: true },
  image_urls: { type: [String], required: true }, // new field for multiple image URLs
  price_per_day: { type: Number, required: true },
  is_available: { type: Boolean, required: true },
  
}, { timestamps: true });


//export default (mongoose.Model.Listing as mongoose.Model<Listing>  model<Listing>)
export default (mongoose.models.Listing as mongoose.Model<Listing>) || mongoose.model('Listing', listingSchema);












