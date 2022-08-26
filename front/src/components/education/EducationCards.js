import React,{useState} from "react"
import EducationCard from "./EducationCard"
import EducationEditForm from "./EducationEditForm"

function EducationCards () {

    //불러오기
    const educationlist = [{
                        school: "ㅇㅇ대",
                        major: "컴공",
                        degree: "재학중",
                        isEditing: false
                        },
                        {    
                        school: "ㅇㅇ대",
                        major: "미술",
                        degree: "재학중",
                        isEditing: false
                        }
                        ]
                        
    return educationlist.map((i) => (i.isEditing ? (
                                    <EducationEditForm
                                        isEditing={i.isEditing}
                                    />
                                ) : (
                                    <EducationCard
                                        school = {i.school}
                                        major = {i.major}
                                        degree = {i.degree}
                                        isEditing={i.isEditing}      
                                    />
    )))
    
}
    export default EducationCards