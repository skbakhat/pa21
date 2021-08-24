import React from "react";
import "./App.css";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
import { reSet } from "./actions";

import { useSelector, useDispatch } from "react-redux";

import minu from "./images/minus.png";
import plu from "./images/plus.png";

const App = () => {
  const changeNumber = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main2">
        <a href onClick={() => dispatch(decNumber())}>
          <img id="minus" src={minu} alt="decrement"></img>
        </a>
        <input type="text" value={changeNumber} />
        <a href onClick={() => dispatch(incNumber(5))}>
          <img src={plu} alt="increment"></img>
        </a>
      </div>

      <div className="main"></div>
      <div className="re">
        <button on onClick={() => dispatch(reSet())}>
          Reset
        </button>
      </div>
      <h1>Increment/Decrement counter</h1>
    </>
  );
};

export default App;
