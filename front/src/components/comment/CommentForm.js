import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import CloseButton from 'react-bootstrap/CloseButton';

function CommentForm({ commentList, setCommentList, commentId, myId, portfolioOwnerId }) {
  const getComment = commentList.find((cmt) => cmt._id === commentId);

  //내가 입력한 댓글 또는 포트폴리오 주인만 삭제버튼 보이기
  const canDelete = (myId == getComment.user_id) || (myId == portfolioOwnerId);

  //삭제하는 함수
  async function deleteForm() {
    const comfirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
    if (comfirmDelete == true) {
      const res = await Api.delete('comment',commentId)

      //잘 삭제됐으면 commentList 최신화해주기
      if (res.data.message === "It's deleted!") {
        const newCommentList = commentList.filter((cmt) => cmt._id !== commentId);
        setCommentList(newCommentList);

        alert("삭제되었습니다");
      }
    }
  }

  return (
    <Form className="mb=4">
      <Row className="ms-1">
        <Col xs={2}>{getComment.userName}:</Col>
        <Col>{getComment.comment}</Col>
        <Col xs={2}>
          {canDelete && (
            <CloseButton 
                className="col-md-5 mx-auto"
                size="sm" 
                variant="outline-info" 
                onClick={deleteForm}
            />
          )}
        </Col>
      </Row>
    </Form>
  );
}

export default CommentForm;
