import React from 'react';
import "./button.scss"

const Button = ({filter, button}) => {
    return (
        <div className="button-section">
            {
                button.map((cat, i) => {
                    return (<button  type="button" key={i} onClick={() => filter(cat)} className="btn">{cat}</button>)
                })
            }
        </div>
    );
};

export default Button;