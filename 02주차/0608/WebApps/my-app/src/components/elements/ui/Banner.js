import React from 'react';

export default function Banner() {
    return (
        <>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{backgroundColor: "gray"}}>
                <div className="container">
                    <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="none">Sign up today</a></p>
                    </div>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}