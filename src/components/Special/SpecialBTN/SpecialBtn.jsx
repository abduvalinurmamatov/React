import React from 'react';
import "./SpecialBtn.scss"
const SpecialBtn = ({filter, button}) => {
    return (
        <div className="SpecialBtn-section">
            <div className="SpecialBtn-section__box">
                {
                    button.map((cat, i) => {
                        return <button key={i}  type="button" onClick={() => filter(cat)} className="SpecialBtn-section__box__btn">{cat}</button>
                    })
                }
            </div>
        </div>
    );
};

export default SpecialBtn;