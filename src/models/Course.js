import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, default: '🎓' },
  description: { type: String, required: true },
  highlight: { type: String },
  duration: { type: String, default: '3 Years' },
  eligibility: { type: String, default: '10+2 / Equivalent' },
  // school maps directly to the 6 MIU schools in the navbar
  school: {
    type: String,
    enum: [
      'School Of Commerce',
      'School Of Computer Application',
      'School Of Engineering',
      'School Of Management',
      'School Of Science',
      'School Of Vocational Studies',
    ],
    default: 'School Of Commerce',
  },
  category: { type: String }, // legacy field – kept for backwards compatibility
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', courseSchema);
