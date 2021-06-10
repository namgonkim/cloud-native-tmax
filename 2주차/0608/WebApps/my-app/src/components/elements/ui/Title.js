import React from 'react';

export default function Title(props) {

    return(
        <div className="row mb-4">
            <div className="col-12 col-md-6 offset-md-3 title">
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}