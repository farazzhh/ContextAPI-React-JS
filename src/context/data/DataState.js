import React, { useReducer } from "react";
import DataContext from "./dataContext";
import dataReducer from "./dataReducer";
import { GETDATA, FAILGETDATA, ADDDATA, FAILADDDATA } from "../type";

const DataState = (props) => {
  const initialState = {
    data: [],
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getData = () => {
    const data = [
      {
        name: "faraz",
        last: "hava",
        location: "iran",
      },
      {
        name: "fahmad",
        last: "sol",
        location: "Urog",
      },
      {
        name: "nuts",
        last: "bang",
        location: "newZ",
      },
      {
        name: "stew",
        last: "gas",
        location: "kitc",
      },
    ];
    dispatch({
      type: GETDATA,
      payload: data,
    });
  };

  const addData = ({newData}) => {
      const data = [
          ...state.data,
          {
              name: newData.name,
              last: newData.last,
                location: newData.loc
          }
    ];
    dispatch({
      type: ADDDATA,
      payload: data,
    });
  };
  console.log();
  return (
    <DataContext.Provider
      value={{
        data: state.data,
        getData,
        addData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
