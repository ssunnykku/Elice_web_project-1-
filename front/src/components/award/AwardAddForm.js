import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


// 학력 추가 컴포넌트
function AwardAddForm ({setIsAddingAward}) {
    const [award, setAward] = useState("");
    const [detail, setDetail] = useState("");
    const isEditing = false

    function handleSubmit (e) {
        e.preventDefault();
        
        //입력한 값 post 보내기
        Api.post (`award/add`, {
            award,
            detail,
            isEditing
        });

        setIsAddingAward(false)

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
            <Button variant="secondary" className="mb-3" onClick={() => setIsAddingAward(false)}>취소</Button>
        </Form>
    )
}

export default AwardAddForm