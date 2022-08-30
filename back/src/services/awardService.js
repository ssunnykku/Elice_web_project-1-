import { Award } from "../db/models/Award";

class awardService {
  //addAward: 어워드정보 등록할때. 정보 입력 받으면 DB에 추가하는 용도
  static async addAward({ user_id, award, detail }) {
    const newAward = { user_id, award, detail };

    const createdAward = await Award.create({ newAward });

    return createdAward;
  }
  //showAllAwards: 한 사용자의 전체 어워드들(여러개) 가지고 올때
  static async showAllAwards({ user_id }) {
    const awards = await Award.findAll({ user_id });

    if (!awards) {
      const errorMessage = "내용이 없습니다.";
      return { errorMessage };
    }
    return awards;
  }
  //어워드 정보 수정할때: 사용자 한가지 학력정보 수정하기 위해 고유award_id값, toUpdate위한값
  static async awardInfo({ award_id, toUpdate }) {
    let award = await Award.findById({ award_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!award) {
      const errorMessage = "등록한 정보가 없습니다.";
      return { errorMessage };
    }

    if (toUpdate.award) {
      const fieldToUpdate = "award";
      const newValue = toUpdate.award;
      award = await Award.update({ award_id, fieldToUpdate, newValue });
    }

    if (toUpdate.detail) {
      const fieldToUpdate = "detail";
      const newValue = toUpdate.detail;
      award = await Award.update({ award_id, fieldToUpdate, newValue });
    }

    return award;
  }
}

export { awardService };
