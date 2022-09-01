import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from "react-bootstrap";

function Comments() {

    const [comments, setComments] = useState([
        {
          user_id: "fc597063-9b58-42a6-851a-6134d8d577df",
          comment:
            "코멘트를 불러왔음.",
          userName: "은정",
          _id: "630ef69429d595081ce8e679",
          createdAt: "2022-08-31T05:50:12.247Z",
          updatedAt: "2022-08-31T05:50:12.247Z",
          __v: 0,
        },
        {
          user_id: "6d54f14a-393b-4510-9d26-29b48e6d4216",
          comment: "안녕하세요.",
          userName: "수진",
          _id: "30081ce8e679",
          createdAt: "2022-08-31T05:50:12.247Z",
          updatedAt: "2022-08-31T05:50:12.247Z",
          __v: 0,
        },
      ])

      const [inputs, setInputs] = useState({
        userName: '',
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
    

      return(
        <>
    <Form className="mb=4">
      <Row className="ms-1">
        <Col xs={2}>{comments.userName}:</Col>
        <Col>{comments.comment}</Col>
        <Col xs={2}>
            <CloseButton 
                className="col-md-5 mx-auto"
                size="sm" 
                variant="outline-info" 
                onClick={deleteForm}
            />
        </Col>
      </Row>
    </Form>
    <Card.Body>
      <div class="form-inline mb-2">
        <label for="replyId">
          {myName}
        </label>
      </div>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={comment}
        placeholder="댓글을 입력해주세요"
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="button" class="btn btn-dark mt-3" style={{ marginLeft: "40%"}} onClick={handleSubmit}>
        등록
      </button>
    </Card.Body>
        </>
      )

}
export default Comments;