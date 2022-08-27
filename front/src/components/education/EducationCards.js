import React,{useState} from "react"
import EducationCard from "./EducationCard"
import EducationEditForm from "./EducationEditForm"
import * as Api from "../../api";

function EducationCards () {

    //get 불러오기
    //Api.get('', )
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
                                        school = {i.school}
                                        major = {i.major}
                                        degree = {i.degree}
                                    />
                                ) : (
                                    <EducationCard
                                        isEditing={i.isEditing}    
                                        school = {i.school}
                                        major = {i.major}
                                        degree = {i.degree}
                                    />
    )))
    
}
    export default EducationCards