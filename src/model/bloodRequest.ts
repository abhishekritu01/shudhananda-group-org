import { Schema, Document, model, models } from 'mongoose';


export interface IBloodGroupEntry {
    group: string;
    units: number;
}

export interface IBloodRequest extends Document {
    name: string;
    phone: string;
    bloodGroup: IBloodGroupEntry[]; // ✅ CORRECT: Array of objects
    units: number;
    state: string;
    city: string;
    description: string;
    seen?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const BloodRequestSchema = new Schema<IBloodRequest>(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        bloodGroup: {
            type: [
                {
                    group: { type: String, required: true },
                    units: { type: Number, required: true },
                },
            ],
            required: true,
        },
        units: { type: Number, required: true },
        state: { type: String },
        city: { type: String },
        description: { type: String, required: true },
        seen: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const BloodRequest =
    models.BloodRequest || model<IBloodRequest>('BloodRequest', BloodRequestSchema);

export default BloodRequest;
