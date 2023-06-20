/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/jsx-no-undef

import NewPost from "./NewPost";
import styles from "./PostLists.module.css";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import Post from "./Post";
function PostLists({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [fetchingPost, setFetchingPosts] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setFetchingPosts(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setFetchingPosts(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!fetchingPost && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!fetchingPost && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "snow" }}>
          <h2>There are no Posts yet</h2>
          <p>Start adding Posts</p>
        </div>
      )}
      {fetchingPost && (
        <div style={{ textAlign: "center", color: "white " }}>
          <h2>Loading posts....</h2>
        </div>
      )}
    </>
  );
}
export default PostLists;
