import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="mt-5">
                <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>

                    <section className="d-flex justify-content-between p-4 text-white bg-success">

                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">FarmX</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundColor: "#7c4dff", height: '2px'}} />
                                    <p>
                                        FarmX is a revolutionary platform designed to empower farmers and
                                        increase the efficiency of the agricultural supply chain.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Company</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundColor: "#7c4dff", height: '2px'}} />
                                    <p>
                                        <a href="/" className="text-dark">Our Team</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Terms of Service</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Privacy Policy</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundColor: "#7c4dff", height: '2px'}} />
                                    <p>
                                        <a href="/" className="text-dark">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">About Us</a>
                                    </p>
                                    <p>
                                        <a href="/" className="text-dark">Help Center</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundColor: "#7c4dff", height: '2px'}} />
                                    <p><i className="fas fa-home mr-3"></i> Kolhapur, Maharashtra</p>
                                    <p><i className="fas fa-envelope mr-3"></i> mail@farmx.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        © 2023 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">Farmx.com</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
