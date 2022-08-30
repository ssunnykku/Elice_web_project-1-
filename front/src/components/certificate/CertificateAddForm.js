import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


// 학력 추가 컴포넌트
function CertificateAddForm ({setIsAddingCertificate}) {
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [degree, setDegree] = useState("재학중");
    const isEditing = false

    function handleSubmit (e) {
        e.preventDefault();
        
        setIsAddingCertificate(false)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="자격증 이름"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)
                    } 
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
            
            <Button variant="primary" type="submit" >확인</Button>{' '}
            <Button variant="secondary" onClick={() => setIsAddingCertificate(false) }>취소</Button>
        </Form>
    )
}

export default CertificateAddForm