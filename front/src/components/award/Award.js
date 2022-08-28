import React,{useState} from "react";
import {Card, Button} from "react-bootstrap"
import AwardAddForm from "./AwardAddForm";
import AwardCards from "./AwardCards"



function Award () {
    
    const [isAddingAward, setIsAddingAward] = useState(false);
    
    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>수상이력</Card.Title>
            
                    <AwardCards/>
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingAward(true)}>+</Button>
                    {isAddingAward && (
                        <AwardAddForm
                            setIsAddingAward={setIsAddingAward}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Award