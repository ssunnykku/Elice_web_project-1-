import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";

//icon 
import Edit from '../icon/edit.png'
import Delete from '../icon/delete.png'

function CertificateCard ({certificateData, setCertificateData, isEditingList, setIsEditingList, certificateId, isEditable}) {
    // _id(certificateId) 키값으로 배열에서 해당 certificate 객체찾기
    const getData = certificateData.find(certif => certif._id === certificateId)

    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[certificateId] = true
        setIsEditingList(newIsEditingList)
    }

    async function deleteForm () {
        const comfirmDelete = window.confirm("정말로 삭제하시겠습니까?")
        if (comfirmDelete == true){
            const res = await Api.delete('certificate', certificateId)


            if (res.data.message === "It's deleted!") {
                const newCertificateData= certificateData.filter((ctf) => ctf._id !== certificateId)
                setCertificateData(newCertificateData)

                alert("삭제되었습니다")
            }
        }
    }        

        

    return (
        <Form className="mb-4" style={{ textAlign: "left", paddingLeft: '20px' }}>
            <Row>
                <Col xs={10} className="d-flex flex-column mb-3">
                    <div>{getData.title}</div>
                    <div>{getData.description}</div>
                    <div>{getData.date}</div>
                </Col> 

                {isEditable && 
                    {/* 편집 및 삭제버튼 */}
                    (<Col xs={2}>
                    <img 
                        src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/32/000000/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png" 
                        type="button"
                        style={{marginRight: '10px'}}  onClick={openEdit} />
                    <img 
                        src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/26/000000/external-delete-user-interface-anggara-outline-color-anggara-putra-3.png"
                         type="submit"   variant="outline-info" size="sm" onClick={deleteForm} />
                    </Col>)}  
            </Row>
        </Form>
    )
}

export default CertificateCard;