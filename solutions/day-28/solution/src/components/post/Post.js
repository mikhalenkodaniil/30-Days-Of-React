import Edit from "../edit/Edit";
import "./post.css";
import {
  AiOutlineUser,
  AiOutlineComment,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHeart,
  AiOutlineRetweet,
} from "react-icons/ai";

export default function Post({ user, id, deletePost, editPost, save, cancel }) {
  const nowDate = new Date().toString().split(" ");
  const date = `${nowDate[1]} ${nowDate[2]}, ${nowDate[3]} ${
    nowDate[4].split(":")[0]
  }:${nowDate[4].split(":")[0]}`;
  if (user.edit === true) {
    return (<Edit post={user.post} save={save} cancel={cancel} id={id} />);
  }
  return (
    <section className="post">
      <div className="post__row1">
        <AiOutlineUser
          style={{ height: "35px", width: "35px", margin: "10px" }}
        />
        <h1 className="post__name">{user.name}</h1>
        <p className="post__tagname">{user.tagName}</p>
      </div>
      <p className="post__p">{user.post}</p>
      <div className="post__row2">
        <div className="post__deleteedit">
          <AiOutlineEdit
            id={id}
            className="btn__edit"
            onClick={editPost}
            style={{ height: "30px", width: "30px" }}
          />
          <AiOutlineDelete
            id={id}
            className="btn__delete"
            onClick={deletePost}
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div>
          <AiOutlineComment
            className="btn__comment"
            style={{ height: "30px", width: "30px" }}
          />
          <AiOutlineHeart
            className="btn__like"
            style={{ height: "30px", width: "30px" }}
          />
          <AiOutlineRetweet
            className="btn__reverse"
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className="post__date">{date}</div>
      </div>
    </section>
  );
}
