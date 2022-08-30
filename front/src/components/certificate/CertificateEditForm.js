import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function CertificateEditForm ({IsEditing, School, Major, Degree}) {
    const [school, setSchool] = useState(School);
    const [major, setMajor] = useState(Major);
    const [degree, setDegree] = useState(Degree)
    const [isEditing, setIsEditing] = useState(IsEditing);

    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="자격증 이름"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="major">
                <Form.Control 
                    type="text" 
                    placeholder="상세내역"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)} 
                />
            </Form.Group>
            {/* map 필요없는 것 없애거나 map사용하는 방법으로 고쳐보기 */}
            <Form.Group>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                            
                </div>
            ))}
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit">확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={() => setIsEditing(false)}>취소</Button>
        </Form>
    )
}

export default CertificateEditForm