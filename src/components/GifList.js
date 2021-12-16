import React from "react";

const GifList = ({ gif, handleGif, toggleModal }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "75%",
        position: "relative",

      }}
      role = "button"
      onClick={(gif) => {
        handleGif(gif);
        toggleModal();
      }}
    >
      <img
        src={gif.images.downsized.url}
        width="100%"
        height="100"
        alt="Loading..."
        className="border border-dark"
      />
    </div>
  );
};

export default GifList;
