import React from "react";

const Square = props => (
    <div className="card" width="250px">
        <div className="img-container">
            <a onClick={() => props.selectDog(props.breed)}>
                <img height="150px" width="200px" alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default Square;