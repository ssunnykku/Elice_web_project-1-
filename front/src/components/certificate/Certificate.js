import React,{useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap"
import CertificateAddForm from "./CertificateAddForm";
import CertificateCards from "./CertificateCards"
import * as Api from "../../api";


function Certificate ({portfolioOwnerId}) {
    
    const [isAddingCertificate, setIsAddingCertificate] = useState(false);
    const [certificateData, setCertificateData] = useState([]);
    
    //전체 Education 데이터 불러오기
    useEffect(() => {
        // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
        Api.get("certificate/certificates", portfolioOwnerId).then((res) => setCertificateData(res.data));
      }, [portfolioOwnerId]);
    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>자격증</Card.Title>
            
                    <CertificateCards
                    certificateData={certificateData}
                    setCertificateData={setCertificateData}
                    />
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingCertificate(true)}>+</Button>
                    {isAddingCertificate && (
                        <CertificateAddForm
                            setIsAddingCertificate={setIsAddingCertificate}
                            certificateData={certificateData}
                            setCertificateData={setCertificateData}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Certificate