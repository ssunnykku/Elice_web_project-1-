import { AwardModel } from "../schemas/award";

class Award {
  //유저의 학력을 새로 추가할때 씀.
  static async create({ newAward }) {
    const createdAward = await AwardModel.create(newAward);
    return createdAward;
  }

  static async findById({ award_id }) {
    const award = await AwardModel.findOne({ _id: award_id });
    return award;
  }
  //한 유저(user_id)의 award을 전부다 가지고 올때 씀
  static async findAll({ user_id }) {
    const awards = await AwardModel.find({ user_id: user_id });
    return awards;
  }

  static async update({ award_id, fieldToUpdate, newValue }) {
    const filter = { _id: award_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedAward = await AwardModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedAward;
  }
}

export { Award };
