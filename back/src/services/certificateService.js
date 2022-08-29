import { Certificate } from "../db/models/Certificate";

class certificateService {
    static async addCertificate({ user_id, title, description, date}) {
        const newCertificate = { user_id, title, description, date};
        const certificate = await Certificate.create({ newCertificate });
        return certificate
    }

    static async getCertificates({ user_id }) {
        const certificates = await Certificate.findAll({ user_id });
        return certificates
    }

}

export { certificateService };