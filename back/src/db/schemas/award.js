import mongoose, { Schema, model } from "mongoose";

const AwardSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    award: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AwardModel = model("Award", AwardSchema);

export { AwardModel };
