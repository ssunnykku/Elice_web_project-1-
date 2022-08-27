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
                        school: "ㅁㅁ대",
                        major: "미술",
                        degree: "재학중",
                        isEditing: true
                        }
                        ]
                        
    return educationlist.map((i) => (i.isEditing ? (
                                    <EducationEditForm 
                                        IsEditing={i.isEditing}
                                        School = {i.school}
                                        Major = {i.major}
                                        Degree = {i.degree}
                                    />
                                ) : (
                                    <EducationCard 
                                        IsEditing={i.isEditing}
                                        School = {i.school}
                                        Major = {i.major}
                                        Degree = {i.degree}
                                    />
    )))
    
}
    export default EducationCards