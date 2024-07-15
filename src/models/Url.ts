import mongoose, {Document, Model, Schema} from "mongoose";

export interface IUrl extends Document {
    originalUrl: string;
    shortUrl: string
}

const UrlSchema: Schema<IUrl> = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true});


const UrlModel: Model<IUrl> = mongoose.models.Url as mongoose.Model<IUrl> || mongoose.model<IUrl>("Url", UrlSchema);

export default UrlModel;