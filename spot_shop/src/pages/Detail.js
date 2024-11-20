import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ list }) => {
  const { num } = useParams();
  const match = list.find((it) => String(it.id) === num);

  const liStyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    background: "#ddd",
    margin: "0 5px",
  };

  return (
    <>
      <img src={process.env.PUBLIC_URL + match.img} alt="" />
      <div>{match.name}</div>
      <div>{match.des.substring(0, 2)}...</div>
      <div>{match.price}원</div>
      <ul>
        {match.color.map(color => (
          <li style={{ ...liStyle, background: color }}>color</li>
        ))}
      </ul>
    </>
  );
};

export default Detail;
