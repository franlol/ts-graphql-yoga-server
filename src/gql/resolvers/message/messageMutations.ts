import Message from '../../../db/models/Message/Message';
import { TMessageModel } from '../../../db/models/Message/message.types';
import { TMessageMutation } from './messageResolver.type';

export default {
  createMessage: async (_: any, { title, message }: TMessageModel) => {
    const newMessage = new Message({ title, message });
    const createdMessage = await newMessage.save();

    return createdMessage;
  }
} as TMessageMutation;
