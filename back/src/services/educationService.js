import { Education } from "../db/models/Education";

class educationService {
  static async postEducationInfo({ user_id, school, major, degree }) {
    const newEducation = { user_id, school, major, degree };

    const createdEducation = await Education.create({ newEducation });

    return createdEducation;
  }

  static async getEducations({ user_id }) {
    const educations = await Education.findAll({ user_id });

    if (!educations) {
      const errorMessage = "내용이 없습니다.";
      return { errorMessage };
    }
    return educations;
  }

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
