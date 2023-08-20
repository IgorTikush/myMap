import * as mongoose from 'mongoose';

export const PictureSchema = new mongoose.Schema({
  url: String,
  user: mongoose.Types.ObjectId,
  map: mongoose.Types.ObjectId,
}, {
  timestamps: true,
});
