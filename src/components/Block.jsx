import React, {useState} from 'react';

function Block(props) {
    return (
        <button onClick={props.onClick} className= "block">
            {props.value}
                    
        </button>
    );
}

export default Block;