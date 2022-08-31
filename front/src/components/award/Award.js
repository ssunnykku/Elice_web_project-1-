import React,{useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap"
import AwardAddForm from "./AwardAddForm";
import AwardCards from "./AwardCards"
import * as Api from "../../api";



function Award ({portfolioOwnerId, isEditable}) {
    
    const [awardData, setAwardData] = useState([])
    const [isAddingAward, setIsAddingAward] = useState(false);
    
    //전체 데이터 불러오기
    useEffect(() => {
        // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
        Api.get("award/info", portfolioOwnerId).then((res) => setAwardData(res.data));
      }, [portfolioOwnerId]);

    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>수상이력</Card.Title>
            
                    <AwardCards
                        awardData={awardData}
                        setAwardData={setAwardData}
                        isEditable={isEditable}
                        />
                    
                    {isEditable && (
                        <Button className="mb-3" variant="primary" onClick={() => setIsAddingAward(true)}>+</Button>
                    )}
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