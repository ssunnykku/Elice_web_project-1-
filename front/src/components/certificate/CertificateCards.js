import React,{useState} from "react"
import CertificateCard from "./CertificateCard"
import CertificateEditForm from ".CertificateEditForm"
import * as Api from "../../api";

function CertificateCards () {

    //get 불러오기
    //Api.get('', )
    const Certificatelist = [{
                        school: "ㅇㅇ대",
                        major: "컴공",
                        degree: "재학중",
                        isEditing: false
                        },
                        {    
                        school: "ㅁㅁ대",
                        major: "미술",
                        degree: "재학중",
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