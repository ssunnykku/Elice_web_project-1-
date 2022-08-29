import is, { assert } from "@sindresorhus/is";
import { Router } from "express";
import { CertificateModel } from "../db/schemas/certificate";
import { login_required } from "../middlewares/login_required";
import { certificateService } from "../services/certificateService"

const certificateRouter = Router();

// Create
certificateRouter.post(
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
            const { title, description, date } = req.body;
            
            const certificate = { user_id, title, description, date }
            const newCertificate = await certificateService.addCertificate(certificate)
        
            if (newCertificate.errorMessage) {
                throw new Error(newCertificate.errorMessage)
            }

            res.status(201).json(newCertificate)
        } catch (err) {
            next(err);
        }
    }
);

// Get all certificates by user_id
certificateRouter.get(
    "/certificates/:userId",
    login_required,
    async function (req, res, next) {

        try {
            const user_id = req.params.userId;

            const certificates = await certificateService.getCertificates({ user_id })
    
            if (certificates.errorMessage) {
                throw new Error(certificates.errorMessage)
            }
    
            res.status(200).json(certificates)
        } catch (err) {
            next(err);
        }
    } 
)

// Update
// certificateRouter.put(
//     "/:certificateId",
//     login_required,
//     async function (req, res, next) {
//         const cer_id = req.params.certificateId;
        
        
//     }
// )

certificateRouter.delete(
    "/:certificateId",
    login_required,
    async function (req, res, next) {

       try {
        const deletedCertificate = await CertificateModel.remove({ _id: req.params.certificateId})

        if (!deletedCertificate) {
         throw new Error(deletedCertificate.errorMessage)
        }
 
        res.status(200).json({
         message: "It's deleted!"
        });
 
       } catch (err) {
        next(err)        
       }
    }

)

export { certificateRouter };