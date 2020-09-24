import Message from '../../../db/models/Message/Message';
import { TMessageQuery } from './messageResolver.type';

export default {
  ping: () => 'pong',
  messages: async () => await Message.find()
} as TMessageQuery;
