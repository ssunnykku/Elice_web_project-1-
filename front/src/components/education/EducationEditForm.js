import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function EducationEditForm ({educationData, setEducationData, isEditingList, setIsEditingList, educationId}) {

    

    // _id(educationId) 키값으로 배열에서 해당 education 객체찾기
    const getData = educationData.find(edu => edu._id === educationId)
    
    
    // const [formData, setFormData] = useState({
    //                                             school: getData.school,
    //                                             major: getData.major,
    //                                             degree: getData.degree
    //                                         });
    
    const [school, setSchool] = useState(getData.school);
    const [major, setMajor] = useState(getData.major);
    const [degree, setDegree] = useState(getData.degree);

    //편집창 닫는 함수
    function closeEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[educationId] = false
        setIsEditingList(newIsEditingList)
    }
    
    //school값 바꾸는 함수
    // function changeSchool (e) {
    //     const {school, value} = e.target
    //     const newFormData = {...formData}
    //     newFormData[school] = value;
    //     setFormData(newFormData)
    //     console.log(formData)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //바뀐 값 put
        const res = await Api.put((`education/${educationId}`), {
            school,
            major,
            degree
        });

        // 받은 데이터로 educationData 수정하기
        const editData = res.data;
        // const resdata = { school: "ㅁㅁ대",
        //                   major: "아동",
        //                   degree: "학사졸업",
        //                   id: 1231
        //                 }

        const newEducationData = [...educationData]
        const findobj = newEducationData.findIndex((obj) => obj._id == educationId); //_id로 해당 객체 위치 찾기
        newEducationData[findobj] = editData //해당 객체 데이터 바꿔주기
        setEducationData(newEducationData); //전체 데이터 바꿔주기

                        
        closeEdit();

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
            <Button variant="primary" className="mb-3" type="submit">확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={closeEdit}>취소</Button>
        </Form>
    )
}

export default EducationEditForm