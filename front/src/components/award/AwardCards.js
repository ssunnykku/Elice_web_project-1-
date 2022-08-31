import React, {useState} from "react"
import AwardCard from "./AwardCard"
import AwardEditForm from "./AwardEditForm"

function AwardCards ({awardData, setAwardData, isEditable}) {


    //편집상태관리
    let IsEditingList = {}
    awardData.map((awd) => (IsEditingList[awd._id] = false))

    const [isEditingList, setIsEditingList] = useState(IsEditingList);

    return awardData.map((awd) => (isEditingList[awd._id] ? (
                                    <AwardEditForm 
                                        awardData ={awardData}
                                        setAwardData = {setAwardData}
                                        isEditingList = {isEditingList}
                                        setIsEditingList = {setIsEditingList}
                                        awardId = {awd._id}
                                        key = {awd._id}
                                    />
                                ) : (
                                    <AwardCard 
                                        awardData ={awardData}
                                        setAwardData = {setAwardData}
                                        isEditingList = {isEditingList}
                                        setIsEditingList = {setIsEditingList}
                                        awardId = {awd._id}
                                        key = {awd._id}
                                        isEditable={isEditable}
                                    />
    )))
    
}
    export default AwardCards