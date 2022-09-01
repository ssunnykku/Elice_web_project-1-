import React, { useState } from 'react';
import { Button, Form, Row, Col } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm"
import * as Api from "../../api";

//icon 
import Edit from '../icon/edit.png'
import Delete from '../icon/delete.png'

function Project({ project, setProjects, projects, portfolioOwnerId, isEditable }){

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
                <Col xs={10} >
                    <h6>{project.title}</h6>
                    <p className="mb-2 text-muted">{project.description}</p>
                    <p className="mb-2 text-muted">{project.from} ~ {project.to}</p>
                </Col>
        
          {/* 수정, 삭제버튼 */}
            { isEditable && 
                (<Col xs={2} sm={{ span: 20 }} >
                  <img 
                    src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/32/000000/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
                    type="button"
                    style={{marginRight: '10px'}}
                    onClick={()=>{
                      setIsEditing(true)
                  }}
                    />
                   <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/26/000000/external-delete-user-interface-anggara-outline-color-anggara-putra-3.png"
                   type="submit" variant="outline-info" size="sm"
                   onClick={deletePost}
                   />
                </Col>) }

            </Row>
        </Form>}
       
        </div>)
        }


export default Project;