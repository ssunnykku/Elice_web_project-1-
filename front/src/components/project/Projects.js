import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import ProjectAddForm from "./ProjectAddForm"
import Project from "./Project"

function Projects() {

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

    console.log(projectList)

    return <>

     <Card style={{ width: '40rem' }}>
      <Card.Body>
        <h5>프로젝트</h5>

        {/* 편집Form 설정 : isEditing이 False면 편집창이 닫힘 */}

        {
        (projectList.map((project) => {
          return(
         
          <Project project={project} key={project._id}/>
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

export default Projects;
