import { Schema, model, } from "mongoose";
import { TMessageDocument } from "./message.types";

const messageSchema: Schema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  message: {
    type: 'string',
    required: true
  }
});

export default model<TMessageDocument>('Message', messageSchema);
