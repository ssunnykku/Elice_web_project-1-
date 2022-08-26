import { ProjectModel } from "../schemas/project";

class Project {
    static async create({ newProject }) {
        const createdProject = await ProjectModel.create(newProject);
        return createdProject;
    }

    // _id = prj_id 
    static async findById({ prj_id }) {
        const project = await ProjectModel.findOne({ _id: prj_id });
        return project
    }

    static async find({ user_id }) {
        const projects = await ProjectModel.find({ user_id: user_id});
        return projects;
    }

    static async update({ prj_id, fieldToUpdate, newValue }) {
        const filter = { _id: prj_id };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updatedProject = await ProjectModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedProject;
    }

}

export { Project };