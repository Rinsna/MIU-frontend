import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true }, // e.g., 'general', 'seo', 'hero'
  content: { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true });

export default mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
