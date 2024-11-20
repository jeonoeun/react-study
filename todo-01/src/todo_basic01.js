import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  return (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      {/* {input} */}
      <ul>
        {list.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input || ''}
      />
      <button onClick={() => setList([...list, input])}>입력</button>
    </div>
  );
};

export default App;
