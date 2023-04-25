import { Document, Schema, Model, model, Types } from "mongoose";

export interface Listing extends Document {
  user_id: Types.ObjectId;
  make: string;
  model: string;
  year: number;
  description: string;
  location: string;
  primary_image_url: string;
  price_per_day: number;
  is_available: boolean;
  created_at: Date;
  updated_at: Date;
}

const listingSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  primary_image_url: { type: String, required: true },
  price_per_day: { type: Number, required: true },
  is_available: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

export const ListingModel: Model<Listing> = model<Listing>("Listing", listingSchema);
