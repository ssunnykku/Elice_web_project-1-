import { CertificateModel } from "../schemas/certificate";

class Certificate {
    static async create({ newCertificate }) {
        const createdCertificate = await CertificateModel.create(newCertificate);
        return createdCertificate;
    }
    
    // _id = cer_id 
    static async findById({ cer_id }) {
        const certificate = await CertificateModel.findOne({ _id: cer_id });
        return certificate
    }

    static async findAll({ user_id }) {
        const certificates = await CertificateModel.find({ user_id: user_id });
        return certificates;
    }

    static async update({ cer_id, fieldToUpdate, newValue }) {
        const filter = { _id: cer_id };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updatedProject = await CertificateModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedProject;
    }
}

export { Certificate };