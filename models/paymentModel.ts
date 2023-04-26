import { Document, Schema, Model, model, Types } from "mongoose";

export interface Payment extends Document {
    // el pago
  payment_id: Types.ObjectId;
  // detalles como de cuaando a cuando
  reservation_id: Types.ObjectId;
  //que usuario pago
  user_id: Types.ObjectId;
  // y que vehiculo quiere
  listing_id: Types.ObjectId;
  amount: number;
  payment_date: Date;
  payment_method: string;
  created_at: Date;
  updated_at: Date;
}

const paymentSchema: Schema = new Schema({
  reservation_id: { type: Schema.Types.ObjectId, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
  listing_id: { type: Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  payment_date: { type: Date, required: true },
  payment_method: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

export const PaymentModel: Model<Payment> = model<Payment>("Payment", paymentSchema);
