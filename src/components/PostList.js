import React from "react";

const PostList = ({ post: { username, createdAt, body, imgUrl } }) => {
  return (
    <div className="col-12 col-md-6 border border-teal-300">
      <div className="d-flex align-items-center">
        <img
          src="images/profile.jpg"
          alt="profile"
          width="75"
          className="img-thumbnail-border-radius"
        />
        <span >
          {username} <br></br>
          {createdAt.substr(0,10)} at {createdAt.split('T')[1].substr(0,5)}
        </span>
      </div>

      <div className="ps-3 mb-2">{body}</div>
      {imgUrl ? (
        <div style={{ height: "350px" }} className="mx-2 mb-3">
          <img src={imgUrl} width="100%" height="100%" alt="pic" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostList;
