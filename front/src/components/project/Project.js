import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import * as Api from "../../api";

function Project({ project, setProjects, projects, isEditable }){

    const [isEditing, setIsEditing] = useState(false)

    const deletePost = async () => {
        await Api.delete(`project/${project._id}`);
        setProjects(
          projects.filter((obj) => {
             obj._id !== project._id;
          })
        )
      }

    return(
        <div>
            {isEditing === true
            ?    <ProjectEditForm  
                       setIsEditing={setIsEditing}
                        projects={projects}
                        setProjects={setProjects}
                        project={project}
                       /> 
           : 
             <Form style={{ textAlign: "left" }}>
               <Row>
                <Col xs={10} className="align-self-center col-xs-6">
                    <h6>{project.title}</h6>
                    <p className="mb-2 text-muted">{project.description}</p>
                    <p className="mb-2 text-muted">{project.from} ~ {project.to}</p>
                </Col>

                {isEditable && (<Col xs={2} sm={{ span: 20 }} >
                   <Button variant="outline-info" size="sm" onClick={()=>{
                       setIsEditing(true)
                   }}>편집</Button>
                   <Button type="submit" variant="outline-info" size="sm" onClick={deletePost}>삭제</Button>
                </Col>
                )}

            </Row>
        </Form>
        }
        </div>
    )
}

export default Project;