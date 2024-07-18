import mongoose, { Document, Model, Schema } from 'mongoose';

import { IUser } from '../domain/user';

const userSchema: Schema<IUser & Document> = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

  },
  {
    timestamps: true
  }
);

const UserModel: Model<IUser & Document> = mongoose.model<IUser & Document>(
  'User',
  userSchema
);

export default UserModel;