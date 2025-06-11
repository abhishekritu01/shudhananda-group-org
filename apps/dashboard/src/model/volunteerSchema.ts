import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Volunteer = mongoose.models['Volunteer'] || mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
