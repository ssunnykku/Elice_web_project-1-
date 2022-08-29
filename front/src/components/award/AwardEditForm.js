import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function AwardEditForm ({awardData, setAwardData, isEditingList, setIsEditingList, awardId}) {

    //키값으로 해당 게시글 데이터 찾기
    const getData = awardData.find(edu => edu._id === awardId)

    const [award, setAward] = useState(getData.award);
    const [detail, setDetail] = useState(getData.detail);

    function closeAward () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[awardId] = false
        setIsEditingList(newIsEditingList)
    }

    async function handleSubmit (e) {
        e.preventDefault();
        
        //바뀐 값 put
        // const res = await Api.put('award/{awardId}',{
        //     award,
        //     detail
        // })
        // const newData = res.data

        const newData = {
                        award: "아차상",
                        detail: "요론거함",
                        _id: "1231"
                        }

        const newAwardData = [...awardData]
        const findIndex = newAwardData.findIndex((obj) => obj._id === awardId);
        newAwardData[findIndex] = newData;
        setAwardData(newAwardData);
        
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