import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";

//icon 
import Edit from '../icon/edit.png'
import Delete from '../icon/delete.png'

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
                    <h6>{getData.school}</h6>
                    <p>{getData.major} ({getData.degree})</p>
                </Col>
 
                {isEditable && 
                <Col xs={2} sm={{ span: 20 }} >
              
                <img 
                    src={Edit} 
                    type="button"
                    style={{marginRight: '10px'}} onClick={openEdit} />
                <img 
                    src={Delete}
                    type="submit"   variant="outline-info" size="sm"  onClick={deleteForm} /> 
                </Col>  }

            </Row>
        </Form>
    )
}

export default EducationCard