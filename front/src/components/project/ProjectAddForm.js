import React, { useEffect, useState } from "react";
import { Card, InputGroup, Form, Button, Row, Col } from "react-bootstrap";

import * as Api from "../../api";

function ProjectAddForm({ projects, setProjects, setIsEditing }) {

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

// Api.post로 입력된 데이터 전송하기
    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
         await Api.post(`project/add`, {
          title: title,
          description: description,
          from: from,
          to: to
        })
        .then((res)=>{
          
          let data = res.data
          setProjects([...projects, data])})

      } catch (e) {
        console.log("모두 입력해주세요");
        setIsFormValid(<Form.Text className="text-success">
        모두 입력해주세요.
      </Form.Text>)
      }
    }

    const [isFormValid, setIsFormValid] = useState()

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
          {isFormValid}
          <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">확인</Button>
          <Button variant="secondary" onClick={(e)=>{
            setIsEditing(false)
          }}>취소</Button>
          </Col>
          </Form.Group>
          </Form>
          </Row>
        </Card.Body>
      </>
    }


export default ProjectAddForm;