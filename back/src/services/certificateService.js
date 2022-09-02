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

    static async updateCertificate({ cer_id, toUpdate }) {
        let certificate = await Certificate.findById({ cer_id })

        if (!certificate) {
            const errorMessage = "자격증 내역이 없습니다. 다시 확인해 주세요";
            return { errorMessage };
        }

        if (toUpdate.title) {
            const fieldToUpdate = "title"
            const newValue = toUpdate.title
            certificate = await Certificate.update({ cer_id, fieldToUpdate, newValue });
        }

        //description은 필수값이 아니므로 "" 값이 들어왔을때 "" 값으로 수정가능하게 바꿈
        const fieldToUpdate = "description"
        const newValue = toUpdate.description
        certificate = await Certificate.update({ cer_id, fieldToUpdate, newValue });
        

        if (toUpdate.date) {
            const fieldToUpdate = "date"
            const newValue = toUpdate.date
            certificate = await Certificate.update({ cer_id, fieldToUpdate, newValue });
        }

        return certificate;
    }

}

export { certificateService };