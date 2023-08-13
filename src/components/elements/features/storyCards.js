import React from 'react'
import logo from '../../../utils/imgs/fl_logo_white.png'


const StoryCards = () => {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Our Story</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:"url(https://source.unsplash.com/random/200X200/?crops)"}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">How a Passion for Agriculture Led to the Creation of FarmX</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>India</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url(https://source.unsplash.com/random/200X200/?seeds)"}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Transforming Traditional Farming Methods with Innovative Technology</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>India</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage:"url(https://source.unsplash.com/random/200X200/?farmer)"}}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Collaborating for a Better Future in Agriculture</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src={logo} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>India</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryCards
