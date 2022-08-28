import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function AwardEditForm ({IsEditing, Award, Detail}) {
    const [award, setAward] = useState(Award);
    const [detail, setDetail] = useState(Detail);
    const [isEditing, setIsEditing] = useState(IsEditing);

    function handleSubmit (e) {
        e.preventDefault();
        
        //바뀐 값 put
        // Api.put('',{
        //     award,
        //     detail,
        //     isEditing
        // })


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
            <Button variant="secondary" className="mb-3" onClick={() => setIsEditing(false)}>취소</Button>
        </Form>
    )
}

export default AwardEditForm