import React,{useState} from "react";
import {Card, Button} from "react-bootstrap"
import CertificateAddForm from "./CertificateAddForm";
import CertificateCards from "./CertificateCards"



function Certificate () {
    
    const [isAddingCertificate, setIsAddingCertificate] = useState(false);
    
    
    return (
        <>
            <Card className="mb-2 ms-3 mr-5">
                <Card.Body>
                    <Card.Title>학?????력</Card.Title>
            
                    <CertificateCards/>
                    
                    <Button className="mb-3" variant="primary" onClick={() => setIsAddingCertificate(true)}>+</Button>
                    {isAddingCertificate && (
                        <CertificateAddForm
                            setIsAddingCertificate={setIsAddingCertificate}
                        />
                    )}
                </Card.Body>
            </Card>
                        
        </>
    )
}

export default Certificate