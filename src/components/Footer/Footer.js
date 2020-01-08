import React from 'react';

var style = {
    backgroundColor: "grey",
    textAlign: "center",
    height: "60px",
    width: "100%",
}

function Footer({ children }) {
    return (
        <div>
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer