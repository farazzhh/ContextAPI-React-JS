import React, { useContext } from 'react'
import {useState , useEffect} from 'react'
import DataContext from '../context/data/dataContext';
import Child from './Child';
import './main.css'

const Main = () => {
    const dataContext = useContext(DataContext);
    const { data,getData } = dataContext;
    
    useEffect(() => {
        getData();  
    }
    , [])
    
    return (
        <div className="main">
            
            {data.map((d, index) => (
          <Child data={d} key={index} />
       ))}     
       {console.log({data})}
        </div>
    )
}

export default Main
