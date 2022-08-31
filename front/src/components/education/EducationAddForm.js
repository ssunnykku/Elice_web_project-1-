import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";

// 학력 추가 컴포넌트
function EducationAddForm({educationData, setEducationData, setIsAddingEducation,}) {

  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("재학중");

  const radioList = ["재학중", "학사졸업", "석사졸업", "박사졸업"]; //라디오버튼 내역 관리

  //폼이 제출 됐을때
  async function handleSubmit(e) {
    e.preventDefault();

    //입력한 값 post 보내기
    const res = await Api.post(`education/add`, {
      school,
      major,
      degree,
    });

    //받은 데이터 educationData에 추가하기
    const updateEducation = res.data;
    const newEducationData = [...educationData, updateEducation];
    setEducationData(newEducationData);

    //추가창 닫기
    setIsAddingEducation(false);
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
                            defaultChecked={radio == "재학중"}
                            />;
                        })}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isFormValid}>
        확인
      </Button>{" "}
      <Button variant="secondary" onClick={() => setIsAddingEducation(false)}>
        취소
      </Button>
    </Form>
  );
}

export default EducationAddForm;
