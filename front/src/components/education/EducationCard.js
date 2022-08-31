import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function EducationCard ({educationData, setEducationData, isEditingList, setIsEditingList, educationId, isEditable}) {
    
    // _id(educationId) 키값으로 배열에서 해당 education 객체찾기
    const getData = educationData.find(edu => edu._id === educationId)

    // 편집 창 여는 함수
    function openEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[educationId] = true
        setIsEditingList(newIsEditingList)
    }

    // 삭제하는 함수
    async function deleteForm () {
        const comfirmDelete = window.confirm("정말로 삭제하시겠습니까?")
        if (comfirmDelete == true){
            const res = await Api.delete('education',educationId)


            if (res.data.message === "It's deleted!") {
                const newEducationData= educationData.filter((obj) => obj._id !== educationId)
                setEducationData(newEducationData)

                alert("삭제되었습니다")
            }
            
        }
    }
        
    return (
        <Form className="mb-4" style={{ textAlign: "left", paddingLeft: '20px' }}>
            <Row>
                <Col xs={10} >
                    <div>{getData.school}</div>
                    <div>{getData.major} ({getData.degree})</div>
                </Col>
                <Col xs={2} sm={{ span: 20 }} >
                <Button 
                   variant="outline-info" size="sm" 
                   style={{marginRight: 5}} onClick={openEdit}>
                    편집</Button> 
                    <Button 
                   type="submit" variant="outline-info" size="sm"  onClick={deleteForm}>삭제</Button> 
                </Col>  

            </Row>
        </Form>
    )
}

export default EducationCard