import mongoose from 'mongoose';

const upcomingEventSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const UpcomingEvent = mongoose.models.UpcomingEvent || mongoose.model('UpcomingEvent', upcomingEventSchema);

export default UpcomingEvent;

