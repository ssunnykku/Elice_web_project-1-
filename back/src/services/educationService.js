import { Education } from "../db/models/Education";

class educationService {
  //postEducationInfo: 학력정보 등록할때. 정보 입력 받으면 DB에 추가하는 용도
  static async postEducationInfo({ user_id, school, major, degree }) {
    const newEducation = { user_id, school, major, degree };

    const createdEducation = await Education.create({ newEducation });

    return createdEducation;
  }
  //getEducations: 한 사용자의 전체 학력정보(여러개) 가지고 올때
  static async getEducations({ user_id }) {
    const educations = await Education.findAll({ user_id });

    if (!educations) {
      const errorMessage = "내용이 없습니다.";
      return { errorMessage };
    }
    return educations;
  }
  //유저 정보 수정할때: 사용자 한가지 학령정보 수정하기 위해 고유edu_id값, toUpdate위한값
  static async eduInfo({ edu_id, toUpdate }) {
    let education = await Education.findById({ edu_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!education) {
      const errorMessage = "등록한 정보가 없습니다.";
      return { errorMessage };
    }

    if (toUpdate.school) {
      const fieldToUpdate = "school";
      const newValue = toUpdate.school;
      education = await Education.update({ edu_id, fieldToUpdate, newValue });
    }

    if (toUpdate.major) {
      const fieldToUpdate = "major";
      const newValue = toUpdate.major;
      education = await Education.update({ edu_id, fieldToUpdate, newValue });
    }

    if (toUpdate.degree) {
      const fieldToUpdate = "degree";
      const newValue = toUpdate.degree;
      education = await Education.update({ edu_id, fieldToUpdate, newValue });
    }

    return education;
  }
}

export { educationService };
