import is from "@sindresorhus/is";
import { Router } from "express";
import { ProjectModel } from "../db/schemas/project";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

//Create
projectRouter.post(
  "/add",
  login_required,
  async function (req, res, next) {
    
    try {

      if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }

      const user_id = req.currentUserId;

        // startDate가 endDate보다 클수없다 조건 넣어야함 (보류)
      const title = req.body.title;
      const description = req.body.description;
      const from = req.body.from;
      const to = req.body.to;

      const newProject = await projectService.addProject({
          user_id,
          title, 
          description,
          from,
          to,
      });

      

      if (newProject.errorMessage) {
          throw new Error(newProject.errorMessage)
      }

      res.status(201).json(newProject);
  
    } catch (error) {
        next(error);
    }
    
});



//Get
// :projectId => _id 값을 넣어주기
projectRouter.get(
  "/current/:projectId",
  login_required,
  async function (req, res, next) {
    try {
      const prj_id = req.params.projectId;
      const projectInfo = await projectService.getProjectInfo({ prj_id })

      if (projectInfo.errorMessage) {
        throw new Error(projectInfo.errorMessage);
      }

      res.status(200).send(projectInfo);

    } catch (error) {
      next(error);
    }
  }
);

//Get all projects
projectRouter.get(
  "/projects/:userId",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.params.userId;
      const projects = await projectService.getProjects({ user_id });

      if (!projects) {
        throw new Error(projects.errorMessage)
      }
      res.status(200).send(projects);
    } catch (error) {
      next(error);
    }
  }
)


//Update
// :projectId => _id 값을 넣어주기
projectRouter.put(
  "/:projectId",
  login_required,
  async function (req, res, next) {
    try {
      // URI로부터 사용자 id를 추출함.
      const prj_id = req.params.projectId;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const title = req.body.title ?? null;
      const description = req.body.description ?? null;
      const from = req.body.from ?? null;
      const to = req.body.to ?? null;
      
      const toUpdate = { title, description, from, to };

      // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
      const updatedProject = await projectService.setProject({ prj_id, toUpdate });

      if (updatedProject.errorMessage) {
        throw new Error(updatedProject.errorMessage);
      }

      res.status(200).json(updatedProject);
    } catch (error) {
      next(error);
    }
  }
  );  
  

  
//Delete
// :projectId => _id 값을 넣어주기
projectRouter.delete(
  "/:projectId",
  login_required,
  async function (req, res, next) {
    try {
      const deletedProject = await ProjectModel.remove({ _id : req.params.projectId })
    
      if (!deletedProject) {
        throw new Error(deletedProject.errorMessage)
      }  

      res.status(200).json({
        message: "It's deleted!"
      });  
  
    } catch (error) {
      next(error);
    }  
  }  
);  


export { projectRouter };


