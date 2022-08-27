import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function EducationEditForm ({IsEditing, School, Major, Degree}) {
    const [school, setSchool] = useState(School);
    const [major, setMajor] = useState(Major);
    const [degree, setDegree] = useState(Degree)
    const [isEditing, setIsEditing] = useState(IsEditing);

    function handleSubmit (e) {
        e.preventDefault();
        
        //바뀐 값 put
        // Api.put('',{
        //     school,
        //     major,
        //     degree,
        //     isEditing
        // })


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
            {/* map 필요없는 것 없애거나 map사용하는 방법으로 고쳐보기 */}
            <Form.Group>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="재학중"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    defaultChecked
                    value="재학중"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    label="학사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="학사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    label="석사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    value="석사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    label="박사졸업"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    value="박사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />                
                </div>
            ))}
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit">확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={() => setIsEditing(false)}>취소</Button>
        </Form>
    )
}

export default EducationEditForm