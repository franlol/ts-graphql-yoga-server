import { Document } from 'mongoose';

export type TMessageModel = {
  title: string;
  message: string;
}

export type TMessageDocument = Document & TMessageModel;
