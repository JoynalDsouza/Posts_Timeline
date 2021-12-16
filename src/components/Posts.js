import React from "react";
import PostList from "./PostList";
import { Container } from "react-bootstrap";

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.length ? <h1 className="my-3">Feed</h1> : ""}
      <div className="row">
        {posts.map((post) => (
          <PostList key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default Posts;
