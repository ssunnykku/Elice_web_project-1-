import { EducationModel } from "../schemas/education";

class Education {
  //유저의 학력을 새로 추가할때 씀.
  static async create({ newEducation }) {
    const createdEducation = await EducationModel.create(newEducation);
    return createdEducation;
  }

  static async findById({ edu_id }) {
    const education = await EducationModel.findOne({ _id: edu_id });
    return education;
  }
  //한 유저(user_id)의 학력을 전부다 가지고 올때 씀
  static async findAll({ user_id }) {
    const educations = await EducationModel.find({ user_id: user_id });
    return educations;
  }

  static async update({ edu_id, fieldToUpdate, newValue }) {
    const filter = { _id: edu_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedEducation;
  }
}

export { Education };
