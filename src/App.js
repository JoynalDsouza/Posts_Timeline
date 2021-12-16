import React, { useState } from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  const rawData = [];

  const rawGifs = [];
  const [gifs, setGifs] = useState(rawGifs);
  const [currentGif, setCurrentGif] = useState("");
  const [query, setQuery] = useState("");

  const [posts, setPosts] = useState(rawData);

  const handleGif = (item) => {
    setCurrentGif(item.target.src);
  };

  const handleSubmit = (data) => {
    const res = {};
    res.body = data;
    res.username = "username";
    res.createdAt = new Date().toISOString();
    currentGif ? (res.imgUrl = currentGif) : (res.imgUrl = "");
    res.id = posts.length;

    setPosts((prevState) => [...prevState, res]);
    setCurrentGif("");
    setQuery("");
    setGifs(rawGifs)
  };

  const onTermChange = (term) => {
    setQuery(term);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wzktS7sdt8Nog3v7bw9nQIwMiGnCaAJ3&q=${term.replace(
      /\s/g,
      "+"
    )}&limit=10&offset=2&rating=r&lang=en`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  };

  return (
    <div class="body">
      <PostForm
        gifs={gifs}
        handleSubmit={handleSubmit}
        onTermChange={onTermChange}
        handleGif={handleGif}
        query={query}
      />
      {currentGif ? (
        <div className="container ">
          <div>
            <h5>Preview</h5>
            <button variant="danger" onClick={() => setCurrentGif("")}>
              Cancel
            </button>
          </div>

          <img src={currentGif} alt="preview" width="350px" />
        </div>
      ) : (
        <div></div>
      )}
      <Posts posts={posts} />
    </div>
  );
}

export default App;
