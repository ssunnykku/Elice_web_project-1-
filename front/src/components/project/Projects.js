import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import ProjectAddForm from "./ProjectAddForm"
import Project from "./Project"
import * as Api from "../../api";

function Projects({ portfolioOwnerId, isEditable }) {

    const [isEditing, setIsEditing] = useState(false);
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.get(`project/projects`, portfolioOwnerId).then((res) => setProjects(res.data));
  }, [portfolioOwnerId]);


    return <>

     <Card className="mb-2 ms-3 mr-5" style={{padding: '35px 0'}}>
      <Card.Body>
      <Card.Title style={{paddingBottom: '35px', fontWeight: "bolder"}}>프로젝트</Card.Title>

        {/* 편집Form 설정 : isEditing이 False면 편집창이 닫힘 */}

        {
        (projects.map((project) => {
          return(
            
          <Project project={project}
                   key={project._id}
                   projects={projects}
                   setProjects={setProjects}
                   isEditable={isEditable}
                   portfolioOwnerId={portfolioOwnerId}
                   />    
            )} 
          ))
        }

        {/* ProjectAddForm 설정 ( + 버튼 ) */}
        {isEditable && (<Form.Group className="mt-3 text-center">
        <img 
           src="https://img.icons8.com/ios-glyphs/40/000000/macos-maximize.png"
           type="button"
           onClick={()=>{
            setIsEditing(true) 
          }}
           />
        </Form.Group>
        )}

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
