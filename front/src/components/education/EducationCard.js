import React from "react"
import {Form, Button, Col, Row} from "react-bootstrap";
import * as Api from "../../api";


function EducationCard ({isEditing, school, major, degree}) {
    
    const [thisisEditing, setThisIsEditing] = useState(isEditing);

    //편집상태 isEditing 바꿔주기
    // Api.put('',{
    //     thisisEditing
    // })
    

    return (
        <Form style={{ textAlign: "left" }}>
            <Row>
                <Col xs={11} class="d-flex flex-column mb-3">
                    <div>{school}</div>
                    <div>{major} {degree}</div>
                </Col>
                <Col xs={1} class="align-self-center col-xs-6">
                    <Button size="sm" variant="outline-info" onClick={() => setThisIsEditing(true)}>편집</Button> 
                </Col>  
            </Row>
        </Form>
    )
}

export default EducationCard 