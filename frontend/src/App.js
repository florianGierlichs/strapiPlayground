import React, { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article";
const axios = require("axios");

function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get("http://localhost:1337/artciles").then(function (response) {
      const articles = response.data;
      setArticles(articles);
    });
  }, []);

  console.log(articles);

  return (
    <div>
      {articles?.map(({ id, headline, content }) => (
        <Article key={id} headline={headline} content={content} />
      ))}
    </div>
  );
}

export default App;
