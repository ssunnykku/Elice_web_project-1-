import React, { useState } from "react";
import { Card, InputGroup, Form, Button, Row, Col } from "react-bootstrap";


function ProjectAddForm({ projectList, setIsEditing, setProjectList}) {

    const [inputs, setInputs] = useState({
      title: '',
      description: '',
      from: '',
      to: ''
    });

    const { title, description, from, to } = inputs;

    const onChange = (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

  return <>
    
      <Card.Body>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="프로젝트 제목"
            autoComplete="off"
            onChange={onChange}
            name="title"
            value={title}
          />
          </InputGroup>
          <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="상세내역"
            autoComplete="off"
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
          <Button variant="primary" type="submit" className="me-3" onClick={()=>{
              setProjectList([...projectList, {
                title : title,
                description : description,
                from : from,
                to : to
              }])
          }}>확인</Button>
          <Button variant="secondary" onClick={()=>{
            setIsEditing(false)
          }}>취소</Button>
          </Col>
          </Form.Group>
        </Card.Body>
      </>
    }


export default ProjectAddForm;