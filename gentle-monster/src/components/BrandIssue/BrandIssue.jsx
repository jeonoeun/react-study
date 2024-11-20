import React, { useState } from "react";
import Jennie from "../../Pages/Jennie";
import Moncler from "../../Pages/Moncler";
import Son from "../../Pages/Son";
import "./BrandIssue.scss";

const data = [
  {
    id: 0,
    title: "손흥민 in 볼드 캠페인",
    page: <Son />,
  },

  {
    id: 1,
    title: "몽클레르",
    page: <Moncler />,
  },
  {
    id: 2,
    title: "젠틀 가든",
    page: <Jennie />,
  },
];

const BrandIssue = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="brand-issue">
      <ul className="tab-menu">
        {data.map((item) => (
          <li
            key={item.id}
            className={index === item.id ? "active" : null}
            onClick={() => setIndex(item.id)}
          >
            <div className="img_box">
              <img
                className="tab-img"
                src={
                  process.env.PUBLIC_URL +
                  "/images/brand0" +
                  (item.id + 1) +
                  ".png"
                }
                alt=""
              />
            </div>

            <span className="tab-title">{item.title}</span>
          </li>
        ))}
      </ul>
      {data
        .filter((item) => index === item.id)
        .map((item) => (
          <div key={item.id} className="tab-content">
            {item.page}
          </div>
        ))}
    </section>
  );
};

export default BrandIssue;
