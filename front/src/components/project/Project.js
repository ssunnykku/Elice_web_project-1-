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
             <Form style={{ textAlign: "left" }}>
               <Row>
                <Col xs={10}>
                    <h6>{project.title}</h6>
                    <p className="mb-2 text-muted">{project.description}</p>
                    <p className="mb-2 text-muted">{project.from} ~ {project.to}</p>
                </Col>
{/* 
                {isEditable && (<Col xs={2} sm={{ span: 20 }} >
                   <Button variant="outline-info" size="sm" onClick={()=>{ */}

                <Col xs={2} sm={{ span: 20 }} >
                   <Button 
                   variant="outline-info" size="sm" 
                   onClick={()=>{
                       setIsEditing(true)
                   }}>편집</Button>
                   <Button 
                   type="submit" variant="outline-info" size="sm" 
                   onClick={deletePost}>삭제</Button>
                </Col>
                {/* )} */}

            </Row>
        </Form>
        }

                {/* <Col>
                   <Button size="sm" variant="primary" onClick={()=>{setIsEditing(true)}} 
                   className="btn btn-primary ms-5">편집</Button>
                   <Button size="sm" variant="danger" onClick={deletePost}
                   className="btn btn-danger ms-1">삭제</Button>
                </Col>
              </Row>
            </Form>
          } */}
        </div>
    )
}

export default Project;