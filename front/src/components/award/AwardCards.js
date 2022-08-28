import React from "react"
import AwardCard from "./AwardCard"
import AwardEditForm from "./AwardEditForm"
import * as Api from "../../api";

function AwardCards () {

    //get 불러오기
    //Api.get('', )
    const awardList = [{
                        award: "ㅇㅇ상",
                        detail: "블라블라 나잘함",
                        isEditing: false
                        },
                        {    
                        award: "ㅁㅁ상",
                        detail: "나는 짱임",
                        isEditing: true
                        }
                        ]
                        
    return awardList.map((i) => (i.isEditing ? (
                                    <AwardEditForm 
                                        IsEditing={i.isEditing}
                                        Award = {i.award}
                                        Detail = {i.detail}
                                    />
                                ) : (
                                    <AwardCard 
                                        IsEditing={i.isEditing}
                                        Award = {i.award}
                                        Detail = {i.detail}
                                    />
    )))
    
}
    export default AwardCards