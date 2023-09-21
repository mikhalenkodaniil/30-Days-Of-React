import { useRef, useState } from "react";
import "./main.css";
import Post from "../post/Post";

export default function Main() {
  const info = [
    {
      name: "Asabeneh Yetayeh",
      tagName: "@Asabeneh",
      post: "30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.",
    },
    {
      name: "Asabeneh Yetayeh",
      tagName: "@Asabeneh",
      post: "30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists, and aspiring ML. Students learned quite a lot of concepts. Python is eating the world.",
    },
    {
      name: "Asabeneh Yetayeh",
      tagName: "@Asabeneh",
      post: "30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever!",
    },
    {
      name: "Asabeneh Yetayeh",
      tagName: "@Asabeneh",
      post: "30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend",
    },
    {
      name: "Asabeneh Yetayeh",
      tagName: "@Asabeneh",
      post: "I have no idea about the coming challenge. It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.",
    }
  ];
  const [users, setUsers] = useState(info);
  const tweets = [...users].map((el, id) => {
    return <Post user={el} id={id} deletePost={deletePost} key={`post ${id}`} />
  });
  const ref = useRef(null);
  const [count, setCount] = useState(250);
  function change() {
    setCount(250 - ref.current.value.length);
  }
  let styleCount = { color: "#21a2f2" };
  let styleBtn = { backgroundColor: "#fe7272" };
  if (count < 0) {
    styleCount.color = "red";
    styleBtn.backgroundColor = "#fe7272";
  } else {
    if (count < 250) styleBtn.backgroundColor = "#72cffe";
    styleCount.color = "#21a2f2";
  }

  function addPost() {
    if (count >= 0 && count < 250) {
      let newArr = [...users];
      let newPost = {
        name: "Anonymous User",
        tagName: "@Anonymous",
      }
      newPost.post = ref.current.value;
      newArr.push(newPost);
      setUsers(newArr);
    }
  }

  function deletePost(e) {
    console.log();
    let newArr = [...users];
    let id = e.target.id;
    newArr.splice(id, 1);
    setUsers(newArr);
  }
  return (
    <main className="main">
      <section className="input">
        <form>
          <textarea
            ref={ref}
            onChange={change}
            type="text"
            className="input__input"
            placeholder="Tweet about 30 Days Of React"
          ></textarea>
          <div className="count" style={styleCount}>
            {count}
          </div>
        </form>
        <button className="input__btn" onClick={addPost} style={styleBtn}>Add Post</button>
      </section>
      {tweets}
    </main>
  );
}
