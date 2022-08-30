import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function CertificateCard ({IsEditing, School, Major, Degree}) {
    
    const [isEditing, setIsEditing] = useState(IsEditing);

    return (
        <Form className="mb-4" style={{ textAlign: "left" }}>
            <Row>
                <Col xs={11} class="d-flex flex-column mb-3">
                    <div>{School}</div>
                    <div>{Major} ({Degree})</div>
                </Col>
                <Col xs={1} class="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={() => setIsEditing(true)}>편집</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default CertificateCard 