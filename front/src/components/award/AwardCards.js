import React, {useState} from "react"
import AwardCard from "./AwardCard"
import AwardEditForm from "./AwardEditForm"

function AwardCards ({awardData, setAwardData}) {


    //편집상태관리
    let IsEditingList = {}
    awardData.map((obj) => (IsEditingList[obj._id] = false))

    const [isEditingList, setIsEditingList] = useState(IsEditingList);

    return awardData.map((i) => (isEditingList[i._id] ? (
                                    <AwardEditForm 
                                        awardData ={awardData}
                                        setAwardData = {setAwardData}
                                        isEditingList = {isEditingList}
                                        setIsEditingList = {setIsEditingList}
                                        awardId = {i._id}
                                    />
                                ) : (
                                    <AwardCard 
                                        awardData ={awardData}
                                        isEditingList = {isEditingList}
                                        setIsEditingList = {setIsEditingList}
                                        awardId = {i._id}
                                    />
    )))
    
}
    export default AwardCards