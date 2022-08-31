import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function EducationEditForm ({educationData, setEducationData, isEditingList, setIsEditingList, educationId}) {

    // _id(educationId) 키값으로 배열에서 해당 education 객체찾기
    const getData = educationData.find(edu => edu._id === educationId)
    
    const [school, setSchool] = useState(getData.school);
    const [major, setMajor] = useState(getData.major);
    const [degree, setDegree] = useState(getData.degree);

    const radioList = ["재학중", "학사졸업", "석사졸업", "박사졸업"]; //라디오버튼 내역 관리

    //편집창 닫는 함수
    function closeEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[educationId] = false
        setIsEditingList(newIsEditingList)
    }
    
    //폼이 제출 됐을 때
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //바뀐 값 put하기
        const res = await Api.put((`education/${educationId}`), {
            school,
            major,
            degree
        });

        // 받은 데이터로 educationData 수정하기
        const editData = res.data;

        const newEducationData = [...educationData]
        const findobj = newEducationData.findIndex((obj) => obj._id == educationId); //_id로 해당 객체 위치 찾기
        newEducationData[findobj] = editData //해당 객체 데이터 바꿔주기
        setEducationData(newEducationData); //전체 데이터 바꿔주기
        
                        
        closeEdit();

    }

    // 필수값 입력 확인
    const isSchoolValid = school.length > 0;
    const isMajorValid = major.length > 0;

    //필수값 조건 동시에 만족되는지 확인
    const isFormValid = isSchoolValid && isMajorValid;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="schoolName">
                <Form.Control 
                    type="text" 
                    placeholder="학교 이름"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)} 
                />
                { !isSchoolValid && (
                <Form.Text className="text-success">
                필수 입력값입니다.
                </Form.Text>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="major">
                <Form.Control 
                    type="text" 
                    placeholder="전공"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)} 
                />
                { !isMajorValid && (
                <Form.Text className="text-success">
                필수 입력값입니다.
                </Form.Text>)}
            </Form.Group>
            <Form.Group className="mb-3">
                {radioList.map((radio) => {
                    return <Form.Check
                                inline
                                name="major"
                                label={radio}
                                type="radio"
                                value={radio}
                                onChange={(e) => setDegree(e.target.value)}
                                defaultChecked={radio == degree} //작성할 때 선택했던 값 기본체크하기
                                />;
                            })}
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit" disabled={!isFormValid}>확인</Button>{' '}
            <Button variant="secondary" className="mb-3" onClick={closeEdit}>취소</Button>
        </Form>
    )
}

export default EducationEditForm