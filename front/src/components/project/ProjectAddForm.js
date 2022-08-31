import React, { useEffect, useState } from "react";
import { Card, InputGroup, Form, Button, Row, Col } from "react-bootstrap";

import * as Api from "../../api";

function ProjectAddForm({ setProjects, setIsEditing, portfolioOwnerId }) {

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

        // 필수값 입력 확인
        const isTitleValid = title.length > 0;
        const isFromValid = from.length > 0;
        const isToValid = to.length > 0;
    
        //필수값 조건 동시에 만족되는지 확인
        const isFormValid = isTitleValid && isFromValid && isToValid;

        // 날짜 입력 조건
        const isDateValid = isFromValid && isToValid;


        const durationValid = ()=>{
          if (!isDateValid) {
            return <Form.Text className="text-success">
            필수 입력값입니다.
                  </Form.Text> 
          } else if (from > to) {
            return  ( <Form.Text className="text-success">
                  해당 기간의 조회가 불가능합니다.
                  </Form.Text>)
          }
        }

// Api.post로 입력된 데이터 전송하기
// 모든 값이 입력되어 있지 않다면 "모두 입력해주세요" 안내 띄우기
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

         })
      } catch (e) {
        console.log("실패");
        
      }
      await Api.get(`project/projects`, portfolioOwnerId)
        .then((res) => setProjects(res.data)); 
        setIsEditing(false)
    }
    
  return <>
      <Form 
        onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="프로젝트 제목"
            onChange={onChange}
            name="title"
            value={title}
          />
          {!isTitleValid && (
          <Form.Text className="text-success">
                필수 입력값입니다.
          </Form.Text>)} 
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="상세내역"
            onChange={onChange}
            name="description"
            value={description}
          />
          </Form.Group>

          <input type="date" 
            onChange={onChange} 
            name="from"
            value={from}/>
            
          <input type="date" 
            onChange={onChange}
            name="to"
            value={to}/>
            <br/>
            {durationValid()}
          <br/>
          <Form.Group as={Row} className="mt-3 text-center">

          <Col sm={{ span: 20 }}>
          <Button 
          variant="primary" 
          type="submit" 
          className="mb-3"
          disabled={!isFormValid}
          >확인</Button>{' '}
          <Button variant="secondary" className="mb-3" onClick={(e)=>{
            setIsEditing(false)
          }}>취소</Button>
          </Col>
          </Form.Group>
          </Form>
      </>
    }


export default ProjectAddForm;