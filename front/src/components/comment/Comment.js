import React, { useState, useEffect } from "react";
import { Card, Row, Button, Col } from "react-bootstrap";
import * as Api from "../../api";
import CommentForm from "./CommentForm";
import CommentInput from "./CommentInput";
import Form from "react-bootstrap/Form";

function Comment({ portfolioOwnerId, myId, myName}) {
  // useState 훅을 통해 comment 상태를 생성함.
  const [commentList, setCommentList] = useState([]);

  // 그 페이지 주인의 코멘트를 전부 불러옴
    useEffect(() => {
      Api.get("comment/list", portfolioOwnerId).then((res) => setCommentList(res.data.reverse()));
    }, [portfolioOwnerId]);

  return (
    <>
      <div class="card mb-2">
        <div class="card-header bg-light">댓글</div>
        <CommentInput
          setCommentList={setCommentList}
          commentList={commentList}
          myId={myId}
          myName={myName}
          portfolioOwnerId={portfolioOwnerId}
        />
        <card>
          {commentList.map((cmt) => (
            <CommentForm
              setCommentList={setCommentList}
              commentList={commentList}
              commentId={cmt._id}
              key={cmt._id}
              myId={myId}
              myName={myName}
              portfolioOwnerId={portfolioOwnerId}
            />
          ))}
        </card>
      </div>
    </>
  );
}

export default Comment;
