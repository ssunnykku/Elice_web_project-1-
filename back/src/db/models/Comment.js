import { CommentModel } from "../schemas/comment";

class Comment {
  //새로운 댓글 추가
  static async create({ newComment }) {
    const addComment = await CommentModel.create(newComment);
    return addComment;
  }
  //댓글작성자의 아이디로 사용자 정보 찾기
  static async findById({ user_id }) {
    const findWriter = await CommentModel.findOne({ _id: user_id });
    return findWriter;
  }
  //한 유저(pageOwner)의 댓글을 전부다 가지고 올때 씀
  static async findAll({ pageOwner }) {
    const pageAllComments = await CommentModel.find({ pageOwner : pageOwner });
    return pageAllComments;
  }

  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { _id: id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedComment = await CommentModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedComment;
  }
}

export { Comment };
