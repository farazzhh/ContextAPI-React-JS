import React from 'react'

const Child = ({data}) => {
    return (
        <div className="child">
            <h2 >Name : {data.name}</h2>
            <h3 className="child-content">Last : { data.last }</h3>
            <h3>Loc : {data.location}</h3>
        </div>
    )
}

export default Child
