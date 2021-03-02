/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import Button from "../components/Buttons.js";

const FORM = styled.form`
  border-radius: 10px;
  width: 50%;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px 20px 20px;

`;

function AddPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let history = useHistory()

  function handleTitleChange(event) {
    //event.target.value is the input typed in by the user
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    createPost()
  }

  function handleBackClick() {
    history.push("/home")
  }

  // this is function to add post to data source
  async function createPost() {
    let response = await fetch("http://localhost:8000/posts/", {
      method: "POST",
      body: JSON.stringify({ title: title, content: description }),
      headers: { "content-type": "application/json" }
    })
    if (response.ok) history.push("/home")
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1
        css={css`
          width: 100%;
          align-items: center;
          padding: 15px 0 15px 15px;
          border: 1px black solid;
          background-color: lightblue;
        `}
      >
        Add a Post
      </h1>
      <br />
      <FORM onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br></br>
          <input
            id="title"
            type="text"
            onChange={handleTitleChange}
            value={title}
            css={css`
              width: 100%;
            `}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description</label>
          <br></br>
          <input
            id="description"
            type="text"
            onChange={handleDescriptionChange}
            value={description}
            css={css`
              width: 100%;
              height: 3em;
            `}
          />
        </div>
        <br />
        <Button
          type="submit"
          primary={false}
        >
          SUBMIT
        </Button>
      </FORM>
      <br />
      <Button
        onClick={handleBackClick}
        type="text"
        primary={true}
      >
        BACK
      </Button>
    </div>
  );
}

export default AddPost;
