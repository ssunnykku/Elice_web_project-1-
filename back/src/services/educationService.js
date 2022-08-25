import { User } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class userEducationService {
  static async postEducationInfo({ school, major, edu }) {
    const newEducationinfo = { school, major, edu };

    const createNewEducationInfo = await User.create({ newEducationinfo });
    createNewEducationInfo.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.
    return createNewEducationInfo;
  }

  static async getUsers() {
    const users = await User.findAll();
    return users;
  }

  static async getUserInfo({ user_id }) {
    const user = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return user;
  }
}

export { userEducationService };
