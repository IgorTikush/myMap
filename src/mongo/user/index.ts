import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: String,
}, {
  timestamps: true,
});
