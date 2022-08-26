import { Education } from "../db/models/Education";
import mongoose from "mongoose";

class educationService {
  static async postEducationInfo({ user_id, school, major, degree }) {
    
    
    const newEducation = { user_id, school, major, degree };

    const createdEducation = await Education.create({ newEducation });

    return createdEducation;
  }

  static async getEducations({ edu_id }) {
    const educations = await Education.findAll({ edu_id });

    if (!educations) {
      const errorMessage = "내용이 없습니다.";
      return { errorMessage };
    }
    return educations;
  }

  static async getUserInfo({ user_id }) {
    const user = await Education.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return user;
  }
}

export { educationService };
