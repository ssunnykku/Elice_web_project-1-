import React,{useState} from "react"
import CertificateCard from "./CertificateCard"
import CertificateEditForm from "./CertificateEditForm"
import * as Api from "../../api";

function CertificateCards () {

    //get 불러오기
    //Api.get('', )
    const Certificatelist = [{
                        school: "정보처리기사",
                        major: "컴퓨터",
                        degree: "국가자격증",
                        isEditing: true
                        },
                        {    
                        school: "",
                        major: "",
                        degree: "",
                        isEditing: true
                        }
                        ]
                        
    return Certificatelist.map((i) => (i.isEditing ? (
                                    <CertificateEditForm 
                                        IsEditing={i.isEditing}
                                        School = {i.school}
                                        Major = {i.major}
                                        Degree = {i.degree}
                                    />
                                ) : (
                                    <CertificateCard 
                                        IsEditing={i.isEditing}
                                        School = {i.school}
                                        Major = {i.major}
                                        Degree = {i.degree}
                                    />
    )))
    
}
    export default CertificateCards