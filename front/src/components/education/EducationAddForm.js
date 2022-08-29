import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


// 학력 추가 컴포넌트
function EducationAddForm ({educationData, setEducationData, setIsAddingEducation}) {

    // const [formData, setFormData] = useState({
    //     school: "",
    //     major: "",
    //     degree: "재학중"
    //    });

       
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [degree, setDegree] = useState("재학중");

    function handleSubmit (e) {
        e.preventDefault();
        
        //입력한 값 post 보내기
        // Api.post (`education/add`, {
        //     school,
        //     major,
        //     degree,
        // });

        //받은 데이터 educationData에 추가하기
        const resdata={
                        school: "tt대",
                        major: "사회복지",
                        degree: "석사졸업",
                        _id: "12232123342",
        }
        const newEducationData = [...educationData, resdata]
        setEducationData(newEducationData)
        
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
            {/* 반복되는 내용은 배열을 사용해서 리팩토링하기 */}
            <Form.Group className="mb-3">
                <Form.Check
                    defaultChecked
                    inline
                    name="major"
                    label="재학중"
                    type='radio'
                    value="재학중"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    name="major"
                    label="학사졸업"
                    type='radio'
                    value="학사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    name="major"
                    label="석사졸업"
                    type='radio'
                    value="석사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />
                <Form.Check
                    inline
                    name="major"
                    label="박사졸업"
                    type='radio'
                    value="박사졸업"
                    onChange={(e)=>(setDegree(e.target.value))}
                />      
            </Form.Group>
            <Button variant="primary" type="submit" >확인</Button>{' '}
            <Button variant="secondary" onClick={() => setIsAddingEducation(false) }>취소</Button>
        </Form>
    )
}

export default EducationAddForm