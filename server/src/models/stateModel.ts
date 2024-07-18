import mongoose, { Document, Model, Schema } from 'mongoose';

import { IState } from "../domain/state";


const stateSchema: Schema<IState & Document> = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
        createdBy: { type: String, required: true }
    },
    { 
        timestamps: true
    }
);
 
const StateModel: Model<IState & Document> = mongoose.model<IState & Document>(
    'State',
    stateSchema
);

export default StateModel;