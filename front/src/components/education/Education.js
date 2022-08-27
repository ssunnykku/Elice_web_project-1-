import React,{useState} from "react";
import {Card, Button} from "react-bootstrap"
import EducationAddForm from "./EducationAddForm";
import EducationCards from "./EducationCards"



function Education () {
    
    const [isAddingEducation, setIsAddingEducation] = useState(false);
    
    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>학력</Card.Title>
            
                    <EducationCards/>
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingEducation(true)}>+</Button>
                    {isAddingEducation && (
                        <EducationAddForm
                            setIsAddingEducation={setIsAddingEducation}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Education