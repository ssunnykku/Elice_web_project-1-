import React,{useState} from "react";
import {Card, Button} from "react-bootstrap"
import EducationAddForm from "./EducationAddForm";
import EducationCards from "./EducationCards"



function Education () {
    
    const [isAddingEducation, setIsAddingEducation] = useState(false);
    
    //전체 Education 데이터 불러오기
    //Api.get('', )
    const educationList = [
        {
            school: "ㅇㅇ대",
            major: "컴공",
            degree: "재학중",
            _id: "1",
        },
        {
            school: "ㅁㅁ대",
            major: "미술",
            degree: "재학중",
            _id: "213123",
        },
        {
            school: "a대",
            major: "생명공학",
            degree: "박사졸업",
            _id: "1231",
        }
      ];

    const [educationData, setEducationData] = useState(educationList);

    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>학력</Card.Title>
            
                    <EducationCards
                            educationData={educationData}
                            setEducationData={setEducationData}/>
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingEducation(true)}>+</Button>
                    {isAddingEducation && (
                        <EducationAddForm
                            setIsAddingEducation={setIsAddingEducation}
                            educationData={educationData}
                            setEducationData={setEducationData}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Education