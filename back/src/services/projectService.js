import { Project } from "../db/models/Project";
import mongoose from "mongoose";

class projectService {
  static async addProject({ user_id, title, description, from, to }) {
    
    // 세부의 id를 만들어 주어야함
        
        const newProject = { user_id, title, description, from, to };
        
        const createdProject = await Project.create({ newProject });
        
        return createdProject
    }
    
    static async getProjectInfo({ prj_id }) {
      const project = await Project.findById({ prj_id });
  
      if (!project) {
        const errorMessage = 
          "프로젝트 내역이 없습니다. 다시 확인해 주세요.";
        return { errorMessage }
      }
  
      return project;
  
    }
    //수정 필요
    static async getProjects({ user_id }) {
      const projects = await Project.find({ user_id });
      return projects;
    }

    static async setProject({ prj_id, toUpdate }) {
      // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
      let project = await Project.findById({ prj_id });
      
        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!project) {
          const errorMessage =
            "등록한 프로젝트가 없습니다. 다시 한 번 확인해 주세요.";
          return { errorMessage };
        }
    
        // 업데이트 대상에 title, desciption, from, to가 null이 아니라면 아래의 if 문을 실행
        if (toUpdate.title) {
          const fieldToUpdate = "title";
          const newValue = toUpdate.title;
          project = await Project.update({ prj_id, fieldToUpdate, newValue });
        }
    
        if (toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            project = await Project.update({ prj_id, fieldToUpdate, newValue });
        }
    
        if (toUpdate.from) {
          const fieldToUpdate = "from";
          const newValue = toUpdate.from;
          project = await Project.update({ prj_id, fieldToUpdate, newValue });
        }
    
        if (toUpdate.to) {
          const fieldToUpdate = "to";
          const newValue = toUpdate.to;
          project = await Project.update({ prj_id, fieldToUpdate, newValue });
        }
    
        return project;
      }

}

export { projectService };