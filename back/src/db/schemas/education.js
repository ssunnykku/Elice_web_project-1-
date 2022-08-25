import { Schema, model } from "mongoose";

const EducationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    edu: {
      type: string, //?확실하지 않음. 버튼 클릭한 내용을 받아온다는거 어떻게
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const educationModel = model("Education", EducationSchema);

export { educationModel };
