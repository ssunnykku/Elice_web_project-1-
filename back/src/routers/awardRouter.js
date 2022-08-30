import is from "@sindresorhus/is";
import { Router } from "express";
import { AwardModel } from "../db/schemas/award";
import { login_required } from "../middlewares/login_required";
import { awardService } from "../services/awardService";

const awardRouter = Router();

// award정보 등록: award/add로 들어왔을때
awardRouter.post("/add", login_required, async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("정보를 입력해 주세요");
    }
    //user_id=사용자가 로그인할때 쓰는 그 id?
    const user_id = req.currentUserId;
    // req (request) 에서 데이터 가져오기: award, detail
    const award = req.body.award;
    const detail = req.body.detail;

    // 위 데이터를 유저 db에 추가하기
    const newAward = await awardService.addAward({
      user_id,
      award,
      detail,
    });

    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage);
    }

    res.status(201).json(newAward);
  } catch (error) {
    next(error);
  }
});
//유저의 모든 학력 정보를 가지고 올때.
awardRouter.get(
  "/info/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.userId;
      const information = await awardService.showAllAwards({ user_id });

      if (information.errorMessage) {
        throw new Error(information.errorMessage);
      }
      res.status(200).send(information);
    } catch (error) {
      next(error);
    }
  }
);
//유저가 한가지 award 정보를 수정하려고 할때(한개의 학력정보 고유값을 awardId라고 지칭)
awardRouter.put("/:awardId", login_required, async function (req, res, next) {
  try {
    // URI로부터 사용자 id를 추출함.
    const award_id = req.params.awardId;
    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const award = req.body.award ?? null;
    const detail = req.body.detail ?? null;

    const toUpdate = { award, detail };
    // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
    const updatedAward = await awardService.awardInfo({
      award_id,
      toUpdate,
    });

    if (updatedAward.errorMessage) {
      throw new Error(updatedAward.errorMessage);
    }

    res.status(200).json(updatedAward);
  } catch (error) {
    next(error);
  }
});

awardRouter.delete(
  "/:awardId",
  login_required,
  async function (req, res, next) {
    try {
      const deletedAward = await AwardModel.remove({
        _id: req.params.awardId,
      });

      if (!deletedAward) {
        throw new Error(deletedAward.errorMessage);
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
awardRouter.get("/afterlogin", login_required, function (req, res, next) {
  res
    .status(200)
    .send(
      `안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`
    );
});

export { awardRouter };
