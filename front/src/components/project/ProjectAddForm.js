import React, { useState } from "react";
import { Card, InputGroup, Form, Button, Row, Col } from "react-bootstrap";

import * as Api from "../../api";

function ProjectAddForm({ projectList, setOpenAddForm, setProjectList}) {

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

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      try{
        const res = await Api.post(`project/add`,  setProjectList([...projectList, {
          title : title,
          description : description,
          from : from,
          to : to
        }]));
        const project = res.data;
        console.log(project)
      } catch (err) {
        console.log("실패");
      }
    }

  return <>
      <Card.Body>
      <Row className="justify-content-md-center mt-5">
      <Form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="submit" className="me-3" onClick={()=>{handleSubmit}}>확인</Button>
          <Button variant="secondary" onClick={(e)=>{
            setOpenAddForm(false)
          }}>취소</Button>
          </Col>
          </Form.Group>
          </Form>
          </Row>
        </Card.Body>
      </>
    }


export default ProjectAddForm;