import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    pageOwner: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = model("Comment", CommentSchema);

export { CommentModel };
