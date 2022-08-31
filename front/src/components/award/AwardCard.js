import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";

//icon 
import Edit from '../icon/edit.png'
import Delete from '../icon/delete.png'

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
        <Form className="mb-4" style={{ textAlign: "left", paddingLeft: '20px' }}>
            <Row>
                <Col xs={10}>
                    <div>{getData.award}</div>
                    <div>{getData.detail}</div>
                </Col>
                <Col xs={2} sm={{ span: 20 }}>
                    {/* 편집 및 삭제버튼 */}
                <img 
                    src={Edit} 
                    type="button"
                    style={{marginRight: 5}} 
                    onClick={openEdit} />
                    <img src={Delete}
                   type="submit"  variant="outline-info" size="sm"
                    onClick={deleteForm}/>
                </Col>  
            </Row>
        </Form>
    )
}

export default AwardCard