import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import ProjectAddForm from "./ProjectAddForm"

function Project() {

    const [openAddForm, setOpenAddForm] = useState(true);

    const [projectList, setProjectList] = useState([
      {
      title : "웹프로젝트",
      description : "포트폴리오 웹사이트 제작",
      from : "2022-08-23",
      to : "2022-09-12",
      _id: 0,
      },
     {
      title : "웹프로젝트",
      description : "포트폴리오 웹사이트 제작",
      from : "2022-08-23",
      to : "2022-09-12",
      _id: 1,
      },
    
    ]
);  

    const [isEditing, setIsEditing] = useState(false);
      
    // let isEditList = projectList.map((a, i)=> { 
    //   return {id: projectList[i]._id}})

    //   console.log(isEditList)
      

    console.log(projectList)

    return <>

     <Card style={{ width: '40rem' }}>
      <Card.Body>
        <h5>프로젝트</h5>

        {/* 편집Form 설정 : isEditing이 False면 편집창이 닫힘 */}

        {
        (projectList.map((x,i) => {
          return(
          isEditing==true
           ?    <ProjectEditForm 
                      setIsEditing={setIsEditing}
                      setProjectList={setProjectList}/> 
          : 
            <Form style={{ textAlign: "left" }} key={projectList._id}>
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
          }

        {/* ProjectAddForm 설정 ( + 버튼 ) */}

        {openAddForm === true && 
        <ProjectAddForm 
              projectList={projectList}
              setProjectList={setProjectList}
              setOpenAddForm={setOpenAddForm} />}
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
