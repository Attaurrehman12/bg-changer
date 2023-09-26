import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("orange");
  return (
    <div className="default-color" style={{ backgroundColor: color }}>
      <div className="bar">
        <button
          className="red"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="blue"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="green"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="grey"
          style={{ backgroundColor: "grey" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>
        <button
          className="black"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="brown"
          style={{ backgroundColor: "brown" }}
          onClick={() => setColor("brown")}
        >
          Brown
        </button>
        <button
          className="yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="olive"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>
        <button
          className="pink"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="purple"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="aqua"
          style={{ backgroundColor: "aqua" }}
          onClick={() => setColor("aqua")}
        >
          Aqua
        </button>
        <button
          className="coral"
          style={{ backgroundColor: "coral" }}
          onClick={() => setColor("coral")}
        >
          Coral
        </button>
      </div>
      <div className="downbar">
      <button
        className="crimson"
        style={{ backgroundColor: "crimson" }}
        onClick={() => setColor("crimson")} >
        Crimson
      </button>
      <button
        className="teal"
        style={{ backgroundColor: "teal" }}
        onClick={() => setColor("teal")} >
        Teal
      </button>
      <button
        className="lime"
        style={{ backgroundColor: "lime" }}
        onClick={() => setColor("lime")} >
        Lime
      </button>
      <button
        className="silver"
        style={{ backgroundColor: "silver" }}
        onClick={() => setColor("silver")} >
        Silver
      </button>
      <button
        className="maroon"
        style={{ backgroundColor: "maroon" }}
        onClick={() => setColor("maroon")} >
        Maroon
      </button>
      <button
        className="cadetblue"
        style={{ backgroundColor: "cadetblue" }}
        onClick={() => setColor("cadetblue")} >
        Cadetblue
      </button>
      <button
        className="khaki"
        style={{ backgroundColor: "khaki" }}
        onClick={() => setColor("khaki")} >
        Khaki
      </button>
      <button
        className="orchid"
        style={{ backgroundColor: "orchid" }}
        onClick={() => setColor("orchid")} >
        Orchid
      </button>
      <button
          className="saddlebrown"
          style={{ backgroundColor: "saddlebrown" }}
          onClick={() => setColor("saddlebrown")}>
          Saddlebrown
        </button>
        <button
        className="violet"
        style={{ backgroundColor: "violet" }}
        onClick={() => setColor("violet")} >
        Violet
      </button>
      </div>
      </div>
  );
}

export default App;
