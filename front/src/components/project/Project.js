import React, { useState } from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import * as Api from "../../api";

function Project({ project, setProjects, projects, portfolioOwnerId }){

    const [isEditing, setIsEditing] = useState(false)

    const deletePost = async(e) => {
      e.preventDefault()
      const confirmDelete = window.confirm("정말로 삭제하시겠습니까?")
      if (confirmDelete == true){
      const res = await Api.delete(`project`,project._id);
      
        if (res.data.message === "It's deleted!") {
          alert("삭제되었습니다")
      
        await Api.get(`project/projects`, portfolioOwnerId)
        .then((res) => setProjects(res.data)); 
        }  
      }

      }

    return(
        <div>
          {isEditing === true
            ?    <ProjectEditForm  
                       setIsEditing={setIsEditing}
                        projects={projects}
                        setProjects={setProjects}
                        project={project}
                        portfolioOwnerId={portfolioOwnerId}
                       /> 
           : 
             <Form style={{ textAlign: "left", padding: '0 20px' }}>
               <Row>
                <Col xs={11} >
                    <h6>{project.title}</h6>
                    <p className="mb-2 text-muted">{project.description}</p>
                    <p className="mb-2 text-muted">{project.from} ~ {project.to}</p>
                </Col>
                <Col xs={1} sm={{ span: 20 }} >
                  <img 
                    src="https://img.icons8.com/external-regular-kawalan-studio/20/000000/external-edit-user-interface-regular-kawalan-studio.png"
                    type="button"
                    style={{marginRight: 5}}
                    onClick={()=>{
                      setIsEditing(true)
                  }}
                    />
                   {/* <Button 
                   variant="outline-info" size="sm" 
                   style={{marginRight: 5}}
                   >편집</Button> */}
                   <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/20/000000/external-delete-basic-user-interface-anggara-outline-color-anggara-putra.png"
                   type="submit" variant="outline-info" size="sm"
                   onClick={deletePost}
                   />
                   {/* <Button 
                   type="submit" variant="outline-info" size="sm" 
                   onClick={deletePost}>삭제</Button> */}
                </Col>

            </Row>
        </Form>
        }
        </div>
    )
}

export default Project;