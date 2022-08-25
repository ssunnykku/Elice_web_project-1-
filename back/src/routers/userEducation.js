import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userEducationService } from "../services/educationService";

const userEducation = Router();

userAuthRouter.post(
  "/usereducation",
  login_required,
  async function (req, res, next) {
    try {
      if (is.emptyObject(req.body)) {
        throw new Error("정보를 입력해 주세요");
      }

      // req (request) 에서 데이터 가져오기
      const school = req.body.school;
      const major = req.body.major;
      const edu = req.body.edu;

      // 위 데이터를 유저 db에 추가하기
      const newUserEducation = await userEducationService.postEducationInfo({
        school,
        major,
        edu,
      });

      if (newUserEducation.errorMessage) {
        throw new Error(newUserEducation.errorMessage);
      }

      res.status(200).json(newUserEducation);
    } catch (error) {
      next(error);
    }
  }
);

userEducation.get(
  "/usereducation",
  login_required,
  async function (req, res, next) {
    try {
      // 전체 사용자 목록을 얻음
      const users = await userEducationService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
);

userEducation.put(
  "/users/:id",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const user_id = req.params.id;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const name = req.body.name ?? null;
      const email = req.body.email ?? null;
      const password = req.body.password ?? null;
      const description = req.body.description ?? null;

      const toUpdate = { name, email, password, description };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

userEducation.get(
  "/users/:id",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.id;
      const currentUserInfo = await userAuthService.getUserInfo({ user_id });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).send(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

// jwt 토큰 기능 확인용, 삭제해도 되는 라우터임.
userEducation.get("/afterlogin", login_required, function (req, res, next) {
  res
    .status(200)
    .send(
      `안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`
    );
});

export { userEducation };
