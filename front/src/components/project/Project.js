import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import ProjectAddForm from "./ProjectAddForm"

function ProjectCard() {
    const [isEditing, setIsEditing] = useState(false);

    const [isEditing2, setIsEditing2] = useState(false);

    const [projectList, setProjectList] = useState([
      {
      title : "웹프로젝트",
      description : "포트폴리오 웹사이트 제작",
      from : "2022-08-23",
      to : "2022-09-12",
      },
     {
      title : "웹프로젝트",
      description : "포트폴리오 웹사이트 제작",
      from : "2022-08-23",
      to : "2022-09-12",
      },
    
    ]);  
    // let a = useSelector((state) => state.user ) 
    // console.log(a)
    console.log(projectList)
    return <>

     <Card style={{ width: '40rem' }}>
      <Card.Body>
        <h5>프로젝트</h5>
        {
          isEditing ? <ProjectEditForm 
                      setIsEditing={setIsEditing}
                      setProjectList={setProjectList}/> 
          : 
            (projectList.map((x,i) => {

              return(
            <Form style={{ textAlign: "left" }}>
              <Row>
              <Col xs={11} class="align-self-center col-xs-6">
                <h6>{projectList[i].title}</h6>
                <p className="mb-2 text-muted">{projectList[i].description}</p>
                <p className="mb-2 text-muted">{projectList[i].from} ~ {projectList[i].to}</p>
                  </Col>
                  <Col xs={1} class="align-self-center col-xs-6">
                  <Button variant="outline-info" size="sm" onClick={()=>{
                      setIsEditing(true)
                  }}>편집</Button>
                  </Col>
                </Row>
              </Form>
                  )
            } ))
          }

        {isEditing2 == true ? 
        <ProjectAddForm 
              setProjectList={setProjectList}
              setIsEditing={setIsEditing2} /> : null}
        <Form.Group className="mt-3 text-center">
        <Button variant="primary" className="mt-3" onClick={()=>{
          setIsEditing2(true) 
        }}>+</Button>
        </Form.Group>
      </Card.Body>
    </Card>
    </>
}

export default ProjectCard;
