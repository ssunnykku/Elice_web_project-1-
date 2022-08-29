import React,{useState} from "react";
import {Card, Button} from "react-bootstrap"
import AwardAddForm from "./AwardAddForm";
import AwardCards from "./AwardCards"
import * as Api from "../../api";



function Award () {
    
    
    //전체 데이터 불러오기
    Api.get('',)
    const awardList = [
        {
            award: "ㅇㅇ상",
            detail: "이런거함",
            _id: "1",
        },
        {
            award: "ㅁㅁ상",
            detail: "이런이런거함",
            _id: "213123",
        },
        {
            award: "ㅎㅎ상",
            detail: "이런이런이런거함",
            _id: "1231",
        }
    ];

    const [awardData, setAwardData] = useState(awardList)
    const [isAddingAward, setIsAddingAward] = useState(false);
    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>수상이력</Card.Title>
            
                    <AwardCards
                        awardData={awardData}
                        setAwardData={setAwardData}
                        />
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingAward(true)}>+</Button>
                    {isAddingAward && (
                        <AwardAddForm
                            setIsAddingAward={setIsAddingAward}
                            awardData={awardData}
                            setAwardData={setAwardData}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Award