import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


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
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
                <Col xs={10} >
                    <div>{getData.title}</div>
                    <div>{getData.description}</div>
                    <div>{getData.date}</div>
                </Col> 
<<<<<<< HEAD
                {isEditable &&(
                    <Col xs={1} class="align-self-center col-xs-6">
                        <Button size="sm" variant="outline-info" onClick={openEdit}>편집</Button> 
                        <Button size="sm" variant="outline-info" onClick={deleteForm} >삭제</Button> 
                    </Col>  
                )}
=======
                <Col>
                    <Button size="sm" variant="primary" onClick={openEdit}
                    className="btn btn-primary ms-5">편집</Button>
                    <Button size="sm" variant="danger" onClick={deleteForm}
                    className="btn btn-danger ms-1">삭제</Button> 
                </Col>  
>>>>>>> button_fr
            </Row>
        </Form>
    )
}

export default CertificateCard;