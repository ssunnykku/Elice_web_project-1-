import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function AwardCard ({awardData, setAwardData, isEditingList, setIsEditingList, awardId, isEditable}) {
    // _id(awardId) 키값으로 배열에서 해당 award 객체찾기
    const getData = awardData.find((awd) => awd._id === awardId)

    //편집창 여는 함수
    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[awardId] = true
        setIsEditingList(newIsEditingList)
    }

    // 삭제하는 함수
    async function deleteForm () {
        const comfirmDelete = window.confirm("정말로 삭제하시겠습니까?")
        if (comfirmDelete == true){
            const res = await Api.delete('award', awardId)


            if (res.data.message === "It's deleted!") {
                const newAwardData= awardData.filter((awd) => awd._id !== awardId)
                setAwardData(newAwardData)

                alert("삭제되었습니다")
            }
            
        }
    }

    

    return (
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
<<<<<<< HEAD
                <Col xs={10}>
=======
                <Col xs={11} className="d-flex flex-column mb-3">
>>>>>>> frontend_enterValid
                    <div>{getData.award}</div>
                    <div>{getData.detail}</div>
                </Col>
                <Col xs={1} className="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={openEdit}>편집</Button> 
                    <Button size="sm" variant="outline-info" onClick={deleteForm}>삭제</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default AwardCard