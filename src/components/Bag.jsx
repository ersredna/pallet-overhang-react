import React from "react";

export default function Bag({ width, height, position }) {

    return(
        <div className='bag' style={{ left: position.x, top: position.y, width: `${width * 10}px`, height: `${height* 10}px` }}></div>
    )
}