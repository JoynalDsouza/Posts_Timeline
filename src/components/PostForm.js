import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import GifList from "./GifList";

const PostForm = ({ handleSubmit, onTermChange, gifs, handleGif, query }) => {
  const input = {
    height: "150px",
    outline: "none",
    width: "100%",
    resize: "none",
    border: "none",
    fontSize: "24px",
  };

  const modal = {
    position: "absolute",
    top: "35px",
    left: "0",
    overflow: "scroll",
    maxHeight: "150px",
    zIndex: "1",
  };

  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const queryRequest = (item) => {
    onTermChange(item);
  };

  const toggleModal = () => setShow(!show);

  return (
    <>
      <Container>
        <header className="text-center">
          <h1>Create Posts</h1>
        </header>
      </Container>
      <div className="m-2 m-md-4">
        <Container className="border border-dark">
          <Row className="mt-2">
            <h3>ADD POST</h3>
          </Row>
          <p className="border"></p>
          <Row>
            <textarea
              name="body"
              id="body"
              className="input"
              placeholder="Enter Text"
              style={input}
              onChange={(e) => setData(e.target.value)}
              value={data}
            ></textarea>
            <div className="border my-4"></div>
            <div className="mb-2 flex flex-row align-items-center">
              <span style={{ position: "relative", width: "100%" }}>
                <Button variant="secondary" onClick={() => toggleModal()}>
                  Attach GIF
                </Button>
                <div style={modal} className={show ? "d-block" : "d-none"}>
                  <div className=" border border-dark bg-secondary">
                    <input
                      className="m-2"
                      type="text"
                      placeholder="Search Gifs"
                      onChange={(e) => queryRequest(e.target.value)}
                      value={query}
                    />
                    <div className="container">
                      {gifs.map((gif) => (
                        <GifList
                          gif={gif}
                          key={gif.id}
                          handleGif={handleGif}
                          toggleModal={toggleModal}
                        />
                      ))}
                    </div>
                    {/* <div
                      style={{
                        width: "100%",
                        height: "0",
                        paddingBottom: "75%",
                        position: "relative",
                      }}
                    >
                      <iframe
                        src="https://giphy.com/embed/neyKNcj1MvX28AfaQx"
                        width="100%"
                        height="100%"
                        style={{ position: "absolute" }}
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                      ></iframe>
                    </div> */}
                  </div>
                </div>
              </span>

              <Button
                onClick={() => {
                  handleSubmit(data);
                  setData("");
                }}
                variant="primary"
                style={{ float: "right" }}
              >
                POST
              </Button>
            </div>
          </Row>
        </Container>
      </div>
      {/* Posts : 
            {gifs[0] ? (
                gifs[0].map((gif) => {
                  <div>{gif.url}</div>;
                })
              ) : (
                <div></div>
              )} */}
      {/* {gifs.map((gif) => {
        <GifList key={gif.id} gif={gif} />;
      })} */}
    </>
  );
};

export default PostForm;
