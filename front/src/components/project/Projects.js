import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectAddForm from "./ProjectAddForm"
import Project from "./Project"
import * as Api from "../../api";

function Projects({ portfolioOwnerId }) {

    const [isEditing, setIsEditing] = useState(false);

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.get(`project/projects`, portfolioOwnerId).then((res) => setProjects(res.data));
  }, [portfolioOwnerId]);


    return <>

     <Card className="mb-2 ms-3 mr-5">
      <Card.Body>
        <h5>프로젝트</h5>

        {/* 편집Form 설정 : isEditing이 False면 편집창이 닫힘 */}

        {
        (projects.map((project) => {
          return(
         
          <Project project={project}
                   key={project._id}
                   projects={projects}
                   setProjects={setProjects}
                   portfolioOwnerId={portfolioOwnerId}
                   />    
            )} 
          ))
        }

        {/* ProjectAddForm 설정 ( + 버튼 ) */}
        {/* <img src="https://img.icons8.com/windows/32/000000/plus.png"/> */}

        <Button variant="Secondary" className="mb-3" onClick={()=>{
          setIsEditing(true) 
        }}>+</Button>

        {isEditing && 
        <ProjectAddForm 
              projects={projects}
              setProjects={setProjects}
              setIsEditing={setIsEditing}
              portfolioOwnerId={portfolioOwnerId} 
              />}
        
      </Card.Body>
    </Card>
    </>
}

export default Projects;
