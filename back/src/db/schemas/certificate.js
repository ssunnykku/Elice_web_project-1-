import { Schema, model } from "mongoose";

const CertificateSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: "상세 내역",
        },
        date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CertificateModel = model("Certificate", CertificateSchema)

export { CertificateModel };