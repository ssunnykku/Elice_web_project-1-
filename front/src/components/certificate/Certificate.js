import React,{useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap"
import CertificateAddForm from "./CertificateAddForm";
import CertificateCards from "./CertificateCards"
import * as Api from "../../api";

//icon
import Plus from '../icon/plus.png'

function Certificate ({portfolioOwnerId, isEditable}) {
    
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
                    <Card.Title
                        style={{padding: '35px', fontWeight: "bolder"}}>자격증</Card.Title>
            
                    <CertificateCards
                    certificateData={certificateData}
                    setCertificateData={setCertificateData}
                    isEditable={isEditable}
                    />
                    {/* +버튼 */}
                    {isEditable && (
                        <img 
                            src={Plus}
                            type="button" onClick={() => setIsAddingCertificate(true)}
                            style={{margin: '0 0 35px 10px' }}/>
                    )}
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