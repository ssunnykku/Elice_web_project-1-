import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
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
<<<<<<< HEAD
                   isEditable={isEditable}
=======
                   portfolioOwnerId={portfolioOwnerId}
>>>>>>> frontend_enterValid
                   />    
            )} 
          ))
        }

        {/* ProjectAddForm 설정 ( + 버튼 ) */}
<<<<<<< HEAD
        {isEditable && (<Form.Group className="mt-3 text-center">
        <Button variant="primary" className="mt-3" onClick={()=>{
          setIsEditing(true) 
        }}>+</Button>
        </Form.Group>
        )}
=======

        <Button 
          variant="Secondary" 
          className="mb-3" 
          style={{
            fontSize: '25px', 
            fontWeight: 'bolder',
            padding: '1px 8px 5px 8px'}}
          onClick={()=>{
          setIsEditing(true) 
        }}
           >+</Button>

>>>>>>> frontend_enterValid
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
