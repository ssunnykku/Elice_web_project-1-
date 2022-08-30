import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function CertificateCard ({certificateData, setCertificateData, isEditingList, setIsEditingList, certificateId}) {
    // _id(certificateId) 키값으로 배열에서 해당 certificate 객체찾기
    const getData = certificateData.find(certif => certif._id === certificateId)

    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[certificateId] = true
        setIsEditingList(newIsEditingList)
    }

    function deleteForm () {
        const comfirnDelete = window.confirm("정말로 삭제하시겠습니까?")
        if (comfirnDelete == true){
            // Api.delete('',)

            const resdata = {
                "message": "삭제되었습니다."
            }
            
            const newCertificateData= certificateData.filter((obj) => obj._id !== certificateId)
            setCertificateData(newCertificateData)

            alert(resdata.message)
        }
    }
        

        

    // }

    return (
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
                <Col xs={11} class="d-flex flex-column mb-3">
                    <div>{getData.title}</div>
                    <div>{getData.description}</div>
                    <div>{getData.date}</div>
                </Col> 
                <Col xs={1} class="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={openEdit}>편집</Button> 
                    <Button size="sm" variant="outline-info" onClick={deleteForm} >삭제</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default CertificateCard