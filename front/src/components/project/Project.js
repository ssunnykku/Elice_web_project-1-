import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"

function Project({ project }){

    const [isEditing, setIsEditing] = useState(false)

    return(
        <div>
            {isEditing===true
            ?    <ProjectEditForm 
                       setIsEditing={setIsEditing}/> 
           : 
             <Form style={{ textAlign: "left" }}>
               <Row>
               <Col xs={11} className="align-self-center col-xs-6">
                 <h6>{project.title}</h6>
                 <p className="mb-2 text-muted">{project.description}</p>
                 <p className="mb-2 text-muted">{project.from} ~ {project.to}</p>
                   </Col>
                   <Col xs={1} className="align-self-center col-xs-6">
                   <Button variant="outline-info" size="sm" onClick={()=>{
                       setIsEditing(true)
                   }}>편집</Button>
                   </Col>
                 </Row>
               </Form>}
        </div>
    )
}

export default Project;