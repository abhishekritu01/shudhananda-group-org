import mongoose from 'mongoose';

const bloodStockSchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true,
    unique: true,
  },
  units: {
    type: Number,
    required: true,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

bloodStockSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const BloodStock = mongoose.models.BloodStock || mongoose.model('BloodStock', bloodStockSchema);
export default BloodStock;
