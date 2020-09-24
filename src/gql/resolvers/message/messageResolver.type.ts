import { TMessageModel } from "../../../db/models/Message/message.types";

export type TMessageQuery = {
  ping: () => string;
  messages: () => Promise<TMessageModel[]>;
}

export type TMessageMutation = {
  createMessage: (_: any, { title, message }: TMessageModel) => Promise<TMessageModel>;
}
