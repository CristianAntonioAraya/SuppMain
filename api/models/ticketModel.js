import { Schema, model } from 'mongoose';

const ticketSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            default: 'active',
        },
        assignTo: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            default: 'null',
        },
        ownerId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model('ticket', ticketSchema);
