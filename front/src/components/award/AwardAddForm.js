import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


// 학력 추가 컴포넌트
function AwardAddForm ({setIsAddingAward, awardData, setAwardData}) {
    const [award, setAward] = useState("");
    const [detail, setDetail] = useState("");

    async function handleSubmit (e) {
        e.preventDefault();
        
        // 입력한 값 post 보내기
        const res = await Api.post (`award/add`, {
            award,
            detail
        });

        const newAwardData = [...awardData, res.data]
        setAwardData(newAwardData)
        
        //award 추가하는 창닫기
        setIsAddingAward(false)
    }
        // 필수값 입력 확인
        const isAwardValid = award.length > 0;
        const isDetailValid = detail.length > 0;
    
        //필수값 조건 동시에 만족되는지 확인
        const isFormValid = isAwardValid && isDetailValid;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="수상내역"
                    value={award}
                    onChange={(e) => setAward(e.target.value)} 
                />
                {!isAwardValid && (
                    <Form.Text className="text-success">
                        필수 입력값입니다.
                    </Form.Text>)}

            </Form.Group>
            <Form.Group className="mb-3" controlId="major">
                <Form.Control 
                    type="text" 
                    placeholder="상세내역"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)} 
                />
                {!isDetailValid && (
                    <Form.Text className="text-success">
                        필수 입력값입니다.
                    </Form.Text>)}
            </Form.Group>
            <Button variant="primary" className="mb-3" 
            type="submit"
            disabled={!isFormValid}>확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={() => setIsAddingAward(false)}>취소</Button>
        </Form>
    )
}

export default AwardAddForm