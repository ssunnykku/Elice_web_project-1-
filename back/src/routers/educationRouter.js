import is from "@sindresorhus/is";
import { Router } from "express";
import { EducationModel } from "../db/schemas/education";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();

educationRouter.post("/add", login_required, async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("정보를 입력해 주세요");
    }

    const user_id = req.currentUserId;
    // req (request) 에서 데이터 가져오기
    const school = req.body.school;
    const major = req.body.major;
    const degree = req.body.degree;

    // 위 데이터를 유저 db에 추가하기
    const newEducation = await educationService.postEducationInfo({
      user_id,
      school,
      major,
      degree,
    });

    if (newEducation.errorMessage) {
      throw new Error(newEducation.errorMessage);
    }

    res.status(201).json(newEducation);
  } catch (error) {
    next(error);
  }
});

educationRouter.get(
  "/info/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.userId;
      const information = await educationService.getEducations({ user_id });

      if (information.errorMessage) {
        throw new Error(information.errorMessage);
      }
      res.status(200).send(information);
    } catch (error) {
      next(error);
    }
  }
);

educationRouter.put("/:eduId", login_required, async function (req, res, next) {
  try {
    // URI로부터 사용자 id를 추출함.
    const edu_id = req.params.eduId;
    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const school = req.body.school ?? null;
    const major = req.body.major ?? null;
    const degree = req.body.degree ?? null;

    const toUpdate = { school, major, degree };
    // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
    const updatedEducation = await educationService.eduInfo({
      edu_id,
      toUpdate,
    });

    if (updatedEducation.errorMessage) {
      throw new Error(updatedEducation.errorMessage);
    }

    res.status(200).json(updatedEducation);
  } catch (error) {
    next(error);
  }
});

educationRouter.get(
  "/info/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.userId;
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

educationRouter.delete(
  "/:eduId",
  login_required,
  async function (req, res, next) {
    try {
      const deletedEducation = await EducationModel.remove({
        _id: req.params.eduId,
      });

      if (!deletedEducation) {
        throw new Error(deletedEducation.errorMessage);
      }

      res.status(200).json({
        message: "It's deleted!",
      });
    } catch (error) {
      next(error);
    }
  }
);

// jwt 토큰 기능 확인용, 삭제해도 되는 라우터임.
educationRouter.get("/afterlogin", login_required, function (req, res, next) {
  res
    .status(200)
    .send(
      `안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`
    );
});

export { educationRouter };
