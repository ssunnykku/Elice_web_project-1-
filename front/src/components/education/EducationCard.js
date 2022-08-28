import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function EducationCard ({educationData, isEditingList, setIsEditingList, educationId}) {
    // _id(educationId) 키값으로 배열에서 해당 education 객체찾기
    const getData = educationData.find(edu => edu._id === educationId)

    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[educationId] = true
        setIsEditingList(newIsEditingList)
    }

    return (
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
                <Col xs={11} class="d-flex flex-column mb-3">
                    <div>{getData.school}</div>
                    <div>{getData.major} ({getData.degree})</div>
                </Col>
                <Col xs={1} class="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={openEdit}>편집</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default EducationCard 