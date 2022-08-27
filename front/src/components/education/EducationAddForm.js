import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


// 학력 추가 컴포넌트
function EducationAddForm ({setIsAddingEducation}) {
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [degree, setDegree] = useState("재학중");
    const isEditing = false

    function handleSubmit (e) {
        e.preventDefault();
        
        // post하기
        // const educationlist = []

   
        //입력한 값 post 보내기
        // Api.post (`education/add`, {
        //     school,
        //     major,
        //     degree,
        //     isEditing
        // });

        setIsAddingEducation(false)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="학교 이름"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)
                    } 
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
                    id={`inline-${type}-4`}
                    value="박사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />                
                </div>
            ))}
            </Form.Group>
            <Button variant="primary" type="submit" >확인</Button>{' '}
            <Button variant="secondary" onClick={() => setIsAddingEducation(false) }>취소</Button>
        </Form>
    )
}

export default EducationAddForm