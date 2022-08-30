import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function AwardEditForm ({awardData, setAwardData, isEditingList, setIsEditingList, awardId}) {

    //키값으로 해당 게시글 데이터 찾기
    const getData = awardData.find(edu => edu._id === awardId)

    const [award, setAward] = useState(getData.award);
    const [detail, setDetail] = useState(getData.detail);

    //편집창 닫는 함수
    function closeAward () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[awardId] = false
        setIsEditingList(newIsEditingList)
    }

    //폼 제출 했을 때
    async function handleSubmit (e) {
        e.preventDefault();
        
        //바뀐 값 put하기
        const res = await Api.put(`award/${awardId}`,{
            award,
            detail
        })

        //받은 데이터로 awardData 수정하기
        const newData = res.data

        const newAwardData = [...awardData]
        const findIndex = newAwardData.findIndex((awd) => awd._id === awardId);
        newAwardData[findIndex] = newData;
        setAwardData(newAwardData);
        
        //편집창 닫기
        closeAward();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="수상내역"
                    value={award}
                    onChange={(e) => setAward(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="major">
                <Form.Control 
                    type="text" 
                    placeholder="상세내역"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)} 
                />
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit">확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={closeAward}>취소</Button>
        </Form>
    )
}

export default AwardEditForm