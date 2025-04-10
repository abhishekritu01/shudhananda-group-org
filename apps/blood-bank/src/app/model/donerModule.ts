import mongoose from 'mongoose';

const donarSchema = new mongoose.Schema({
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
    bloodGroup: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Donar = mongoose.models.Donar || mongoose.model('Donar', donarSchema);

export default Donar;