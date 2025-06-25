import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Testimonial = mongoose.models.Testimonials || mongoose.model('Testimonials', testimonialSchema);

export default Testimonial;