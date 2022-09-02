import React, { useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import * as Api from "../../api";

function CommentForm({commentList, setCommentList, myId, portfolioOwnerId, myName }) {
  const [comment, setComment] = useState("");
  // const [commentValid, setCommentValid] = useState(true)

  async function handleSubmit(e) {
    e.preventDefault();

    if (comment == "") {
      alert("댓글을 입력해주세요");
    }
    const res = await Api.post(`comment/add/${portfolioOwnerId}`, {
        comment
    });

    // const resdata = {
    //   user_id: "6d54f14a-393b-4510-9d26-29b48e6d4216",
    //   comment: "코멘트를 수정했습니다.",
    //   userName: "은정",
    //   _id: "630ef69429d595081ce8e679",
    //   createdAt: "2022-08-31T05:50:12.247Z",
    //   updatedAt: "2022-08-31T05:50:12.247Z",
    //   __v: 0,
    // };

    const addComment = res.data;
    const newCommentList = [addComment, ...commentList ];
    setCommentList(newCommentList);

    setComment("");
  }

  return (
    <Card.Body>
      <div className="form-inline mb-2">
        <label for="replyId">
          {myName}
        </label>
      </div>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={comment}
        placeholder="댓글을 입력해주세요"
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="button" className="btn btn-dark mt-3" style={{ marginLeft: "40%"}} onClick={handleSubmit}>
        등록
      </button>
    </Card.Body>
  );
}

export default CommentForm;
