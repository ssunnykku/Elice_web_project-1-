import React, { useEffect, useState } from "react";
import { Card, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";

function ProjectEditForm({ setIsEditing, setProjects, projects, project }) {

    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        from: '',
        to: '',

      });
  
      const { title, description, from, to } = inputs;
  

      const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      await Api.put(`project/${project._id}`, 
        {
          title,
          description,
          from,
          to
        }).then((res) => {
          const newProjects = [...projects]
          const findIndex = newProjects.findIndex((newProject)=>{
            newProject._id === project._id
          })
          newProjects[findIndex] = res.data
          setProjects(newProjects)
        })

        setIsEditing(false)
      }

    return (
        <>
    <Card.Body>
    <Form 
      type="text" 
      onSubmit={handleSubmit} 
      key={project._id}>
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="프로젝트 제목"
        onChange={onChange}
        name="title"
        value={title}
      />
      </InputGroup>
      <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="상세내역"
        onChange={onChange}
        name="description"
        value={description}
      />
      </InputGroup>
      <input type="date" 
        onChange={onChange} 
        name="from"
        value={from}/>
      <input type="date" 
        onChange={onChange}
        name="to"
        value={to}/>
      <br/>
      <Form.Group as={Row} className="mt-3 text-center">
      <Col sm={{ span: 20 }}>
        <Button variant="primary" type="submit" className="mb-3" 
        >확인</Button>{' '}
      <Button variant="secondary" className="mb-3" onClick={()=>{
        setIsEditing(false)
      }}>취소</Button>
      </Col>
      </Form.Group>
      </Form>
    </Card.Body>
    </>
    )
}

export default ProjectEditForm;