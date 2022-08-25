import { educationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createdNewEducation = await educationModel.create(newEducation);
    return createdNewEducation;
  }

  static async findById({ user_id }) {
    const user = await UserModel.findOne({ id: user_id });
    return user;
  }

  static async findAll() {
    const education = await educationModel.find({});
    return education;
  }

  static async update({ user_id, fieldToUpdate, newValue }) {
    const filter = { id: user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await educationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }
}

export { Education };
