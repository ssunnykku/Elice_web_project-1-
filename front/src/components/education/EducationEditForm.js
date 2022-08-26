import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";


// 학력 추가탭
function EducationEditForm ({setIsEditing, isEditing}) {
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [degree, setDegree]
    const [thisisEditing, setThisIsEditing] = useState(isEditing);

    function handleSubmit (e) {
        e.preventDefault();
        
        //데이터 post


    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="학교 이름"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="major">
                <Form.Control 
                    type="text" 
                    placeholder="전공"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)} 
                />
            </Form.Group>
            <Form.Group>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="재학중"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    checked
                />
                <Form.Check
                    inline
                    label="학사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="석사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    label="박사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                />                
                </div>
            ))}
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit">확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={() => setThisIsEditing(false)}>취소</Button>
        </Form>
    )
}

export default EducationEditForm