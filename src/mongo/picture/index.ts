import * as mongoose from 'mongoose';

export const PictureSchema = new mongoose.Schema({
  url: String,
  user: mongoose.Types.ObjectId,
  mapId: mongoose.Types.ObjectId,
  coordinates: Array,
}, {
  timestamps: true,
});
