import React from 'react'


export default function Card({img,rotation}) {
    const style={ display:"inline-block",position:"absolute"};
    
    return (
        <div style={style}>

<img style={{transform:`rotate(${rotation}deg)`,}} src={img}/>
      
        </div>
    )
}
