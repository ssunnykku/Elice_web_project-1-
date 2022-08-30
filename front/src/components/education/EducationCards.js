import React, { useState } from "react";
import EducationCard from "./EducationCard";
import EducationEditForm from "./EducationEditForm";
import * as Api from "../../api";

function EducationCards({educationData, setEducationData}) {


  //객체의 _id값을 이용해 편집 상태 관리할 배열 만들기 => ex) IsEditingList = {1: false, 213123: false, 1231: false}
  let IsEditingList = {};
  educationData.map((obj) => (IsEditingList[obj._id] = false));

  const [isEditingList, setIsEditingList] = useState(IsEditingList);

  return educationData.map((i) => isEditingList[i._id] ? ( 
                                    <EducationEditForm
                                            educationData={educationData}
                                            setEducationData={setEducationData}
                                            isEditingList={isEditingList}
                                            setIsEditingList={setIsEditingList}
                                            educationId = {i._id}
                                            key = {i._id} //키값 없으면 에러나서 추가해줌.
                                    />
                                    ) : (
                                    <EducationCard 
                                            educationData={educationData}
                                            setEducationData={setEducationData}
                                            isEditingList={isEditingList}
                                            setIsEditingList={setIsEditingList}
                                            educationId = {i._id} 
                                            key = {i._id}
                                    />
                                    )
  );
}
export default EducationCards;