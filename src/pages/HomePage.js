/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../components/Buttons.js";

const StyledButton = styled.button`
  color: #ffffff;
  background-color: ${(props) => (props.primary ? "green" : "red")};
`;

function HomePage() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(function () {
    async function getPost() {
      try {
        // must try and catch because response could fail
        //use async await because fetching takes unknown amount of time
        let response = await fetch("http://localhost:8000/posts");
        let data = await response.json();
        setPosts(data.data);
      } catch (error) {
        setIsError(true);
        console.log("YOU HAVE AN ERROR!");
      }
    }
    getPost();
  }, []);

  function handleAddPostClick() {
    history.push("/addpost");
    //history used in conjunction with route to redirect to another page
  }

  async function handleDeleteClick(postID) {
    let response = await fetch("http://localhost:8000/posts/" + postID, {
      method: "DELETE",
    });
    if (response.ok) {
      let newPosts = posts.filter((post) => {
        return post.id !== postID;
      });
      setPosts(newPosts);
    }
  }

  return (
    <div>
      <div className="postapp-header">
        <h1
        //FOR ILLUSTRATION OF EMOTION REACT
        // css={css`
        //   color: rgb(100, 800, 100);
        //   font-size: 5em;

        // `}
        >
          Post App
        </h1>
        <Button
          onClick={() => history.push("/counter")}
          primary={true}
          css={css`
              font-size: 15px;
              background-color: white;
          `}
        >
          Counter
        </Button>
        <StyledButton
          primary={false}
          className="add-post-button button"
          onClick={handleAddPostClick}
        >
          Add Post
        </StyledButton>
      </div>
      <div className="post-list-container">
        {isError && <h1>Something went wrong, please try again!</h1>}
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div
                className="post-title subblock"
                onClick={() => {
                  history.push("/post/" + post.id);
                }}
              >
                {post.title}
              </div>
              <div className="post-content subblock">{post.content}</div>
              <div className="post-footer">
                <span className="author subblock">Author: Unknown</span>
                <div className="button-container">
                  <button className="edit-button button subblock">Edit</button>
                  <button
                    className="delete-button button subblock"
                    onClick={function () {
                      handleDeleteClick(post.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//if error, message is shown and there will be no data to feed into the .map() method

export default HomePage;
