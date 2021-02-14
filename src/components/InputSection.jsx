import React from "react";
import { useContext, useRef } from "react";
import DataContext from "../context/data/dataContext";

const InputSection = () => {
  const dataContext = useContext(DataContext);
  const { addData } = dataContext;

  const inputName = useRef();
  const inputLast = useRef();
  const inputLoc = useRef();

  const clickHandler = () => {
    const name = inputName.current.value;
    const last = inputLast.current.value;
    const loc = inputLoc.current.value;
    const newData = {
      name: name,
      last: last,
      loc: loc,
    };

    if (name && last && loc) {
      addData({ newData });
      inputName.current.value = "";
      inputLast.current.value = "";
      inputLoc.current.value = "";
    } else {
      alert("hey dude");
    }
  };

  return (
    <div>
      <div className="input-section">
        <div className="input-section-element">
          <input ref={inputName} className="input" placeholder="Enter Name Here" />
          <input ref={inputLast} className="input" placeholder="Enter Last Here" />
          <input ref={inputLoc} className="input" placeholder="Enter Location Here" />
        </div>
        <button onClick={clickHandler} className="input-section-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default InputSection;
