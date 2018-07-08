import React from "react";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Dog Clicky Game</a></li>
            <li>Score:{props.curScore}</li>
            <li>Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;