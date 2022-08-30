import mongoose, { Schema, model } from "mongoose";

const AwardSchema = new Schema(
  {
    award_id: {
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

const AwardModel = model("Education", AwardSchema);

export { AwardModel };
//
