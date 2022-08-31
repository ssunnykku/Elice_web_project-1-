import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateEditForm from "./CertificateEditForm";
import * as Api from "../../api";

function CertificateCards({ certificateData, setCertificateData, isEditable }) {
  //객체의 _id값을 이용해 편집 상태 관리할 배열 만들기 => ex) IsEditingList = {1: false, 213123: false, 1231: false}
  let IsEditingList = {};
  certificateData.map((certif) => (IsEditingList[certif._id] = false));

  const [isEditingList, setIsEditingList] = useState(IsEditingList);

  return certificateData.map((certif) =>
                              isEditingList[certif._id] ? (
                                <CertificateEditForm
                                  certificateData={certificateData}
                                  setCertificateData={setCertificateData}
                                  isEditingList={isEditingList}
                                  setIsEditingList={setIsEditingList}
                                  certificateId={certif._id}
                                  key={certif._id} //키값 없으면 에러나서 추가해줌.
                                />
                              ) : (
                                <CertificateCard
                                  certificateData={certificateData}
                                  setCertificateData={setCertificateData}
                                  isEditingList={isEditingList}
                                  setIsEditingList={setIsEditingList}
                                  certificateId={certif._id}
                                  key={certif._id}
                                  isEditable={isEditable}
                                />
                              )
                            );
}

export default CertificateCards;