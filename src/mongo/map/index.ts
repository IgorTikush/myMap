import * as mongoose from 'mongoose';

export const MapSchema = new mongoose.Schema({
  visitedCountries: {
    type: Array,
  },
  user: mongoose.Types.ObjectId,
}, {
  timestamps: true,
});
