import axios from "axios";
import { useState, useEffect } from "react";

const Page06 = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    const value = document.getElementById("input").value;
    setText(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const allMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com?s=${text}&apikey=56fdcf4a`
    );
    console.log(res.data);
    setList(res.data.Search);
  };

  useEffect(() => {
    allMovie();
  }, [text]);

  return (
    <section className="search-movie">
      <div className="container">
        <h2># 작품 검색</h2>
        <div className="search-input">
          <input
            id="input"
            type="text"
            onKeyDown={onKeyPress}
            placeholder="ex) everything everywhere all at once"
          />
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
        <ul className="movie-list">
          {list &&
            list.map((item) => (
              <li className="movie-item">
                {item.Poster === "N/A" ? (
                  <img
                    className="no-image"
                    src={process.env.PUBLIC_URL + "./images/noimage.jpg"}
                    alt=""
                  />
                ) : (
                  <img src={item.Poster} alt="" />
                )}
                <div className="movie-des">
                  <div className="type">
                    <span>{item.Type}</span>
                  </div>
                  <p className="title">
                    {item.Title} <span>({item.Year})</span>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Page06;
