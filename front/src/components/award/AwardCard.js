import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";


function AwardCard ({awardData, isEditingList, setIsEditingList, awardId}) {
    
    const getData = awardData.find((obj) => obj._id === awardId)

    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[awardId] = true
        setIsEditingList(newIsEditingList)
    }
    

    return (
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
                <Col xs={11} class="d-flex flex-column mb-3">
                    <div>{getData.award}</div>
                    <div>{getData.detail}</div>
                </Col>
                <Col xs={1} class="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={openEdit}>편집</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default AwardCard