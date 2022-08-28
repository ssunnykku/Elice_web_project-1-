import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import ProjectAddForm from "./ProjectAddForm"

function Project() {
    const [isEditing, setIsEditing] = useState(false);

    const [openAddForm, setOpenAddForm] = useState(false);

    const [projectList, setProjectList] = useState(null);  

    console.log(projectList)

    return <>

     <Card style={{ width: '40rem' }}>
      <Card.Body>
        <h5>프로젝트</h5>
        {
          isEditing ? <ProjectEditForm 
                      setIsEditing={setIsEditing}
                      setProjectList={setProjectList}/> 
          : (
            (!projectList) ? null :  (projectList.map((x,i) => {

              return(
            <Form style={{ textAlign: "left" }} key={i}>
              <Row>
              <Col xs={11} className="align-self-center col-xs-6">
                <h6>{projectList[i].title}</h6>
                <p className="mb-2 text-muted">{projectList[i].description}</p>
                <p className="mb-2 text-muted">{projectList[i].from} ~ {projectList[i].to}</p>
                  </Col>
                  <Col xs={1} className="align-self-center col-xs-6">
                  <Button variant="outline-info" size="sm" onClick={()=>{
                      setIsEditing(true)
                  }}>편집</Button>
                  </Col>
                </Row>
              </Form>
                  )
            } ))
          )
           
          }

        {openAddForm == true ? 
        <ProjectAddForm 
              projectList={projectList}
              setProjectList={setProjectList}
              setOpenAddForm={setOpenAddForm} /> : null}
        <Form.Group className="mt-3 text-center">
        <Button variant="primary" className="mt-3" onClick={()=>{
          setOpenAddForm(true) 
        }}>+</Button>
        </Form.Group>
      </Card.Body>
    </Card>
    </>
}

export default Project;
