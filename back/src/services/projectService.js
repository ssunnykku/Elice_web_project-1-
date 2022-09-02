import { Project } from "../db/models/Project";


class projectService {
  static async addProject({ user_id, title, description, from, to }) {
      const newProject = { user_id, title, description, from, to };
      const createdProject = await Project.create({ newProject });
      return createdProject
    }
    
    //project 세부 내용 불러오기 (API 사용안함)
    static async getProjectInfo({ prj_id }) {
      const project = await Project.findById({ prj_id });
  
      if (!project) {
        const errorMessage = 
          "프로젝트 내역이 없습니다. 다시 확인해 주세요.";
        return { errorMessage }
      }
  
      return project;
    }
    
    //해당 유저가 생성한 project 모두 보여주기
    static async getProjects({ user_id }) {
      const projects = await Project.find({ user_id });
      return projects;
    }

    static async setProject({ prj_id, toUpdate }) {
      let project = await Project.findById({ prj_id });
      
        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!project) {
          const errorMessage =
            "등록한 프로젝트가 없습니다. 다시 한 번 확인해 주세요.";
          return { errorMessage };
        }
    
        // 업데이트 대상에 title, description, from, to가 null이 아니라면 아래의 if 문을 실행
        if (toUpdate.title) {
          const fieldToUpdate = "title";
          const newValue = toUpdate.title;
          project = await Project.update({ prj_id, fieldToUpdate, newValue });
        }
    
        //description 값은 필수가 아니기 때문에 ""으로 아무값이 들어오지 않아도 수정될수있게 null값이어도 실행
        const fieldToUpdate = "description";
        const newValue = toUpdate.description;
        project = await Project.update({ prj_id, fieldToUpdate, newValue });
    
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