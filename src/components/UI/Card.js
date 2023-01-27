import React from 'react';
const Card = (props) => {
    const classes = 'card ' + props.className;

    // return React.createElement( 'div', {className: classes}, props.children);
    return (
        <div className={classes}>{props.children}</div>
       )
}

export default Card;