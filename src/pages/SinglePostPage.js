/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useEffect } from "react";
// import { BrowserRouter, Switch, useHistory, useParams } from "react-router-dom";
// import styled from "@emotion/styled";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SinglePostPage() {
  const [post, setPost] = useState({});
  let params = useParams();

  useEffect(() => {
    async function getPostByID() {
      let response = await fetch(
        "http://localhost:8000/posts/" + params.postID
      );
      let data = await response.json();
      setPost(data.data);
    }
    getPostByID();
  }, [params.postID]);

  return (
    <div>
      <h1
        css={css`
          width: 100%;
          align-items: center;
          padding: 15px 0 15px 15px;
          border: 1px black solid;
          background-color: olivedrab;
        `}
      >
        {post.title}
      </h1>
      <p>{post.content}</p>
    </div>
  );
}

export default SinglePostPage;
