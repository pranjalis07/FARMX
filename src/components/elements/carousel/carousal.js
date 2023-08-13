import React from 'react'

const Carousal = () => {
    return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/800x200/?farm" className="d-block w-100" alt="" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>A farming marketplace</h5>
                        <p>Access a marketplace of contract farming agencies and FMCG companies, and get matched with
                            the right partners.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/800x200/?weather" className="d-block w-100" alt="" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Advance Weather Prediction</h5>
                        <p>"Maximize your profits with contract farming and weather prediction techniques!"</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/800x200/?farming" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Expert advice</h5>
                        <p>Join a community of farmers and experts, and get support and advice to improve your farming
                            practices.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default Carousal
