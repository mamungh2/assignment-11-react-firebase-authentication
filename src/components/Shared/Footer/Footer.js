import React from 'react';
import navlogo from '../../../images/navlogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // social icons from fontawesome
    const fbIcon = <FontAwesomeIcon className="fs-2" style={{ color: "#4267B2" }} icon={faFacebookSquare} />
    const youtubeIcon = <FontAwesomeIcon className="fs-2" style={{ color: "red" }} icon={faYoutubeSquare} />
    const instagramIcon = <FontAwesomeIcon className="fs-2" style={{ color: "#C13584" }} icon={faInstagramSquare} />
    const twitterIcon = <FontAwesomeIcon className="fs-2" style={{ color: "#1DA1F2" }} icon={faTwitterSquare} />
    return (
        <div className="bg-black p-5 mt-5" style={{ color: "lightgray" }}>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <div>
                        <p className="ms-0">7/6, Rams road, texas,<br />
                            Florida, USA.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <p className="text-start">About Us &nbsp; | &nbsp; Terms & Conditions <br />
                        Privacy Policy &nbsp; | &nbsp; Site Map <br />
                        Advertise &nbsp; | &nbsp; Announcements <br />
                        Blogs &nbsp; | &nbsp; Achievement
                    </p>
                </div>
                {/* social icons */}
                <div className="col-md-4">
                    <p>Follow Us</p>
                    <div >
                        <span className="me-2">{fbIcon}</span>
                        <span className="me-2">{youtubeIcon}</span>
                        <span className="me-2">{instagramIcon}</span>
                        <span className="me-2">{twitterIcon}</span>
                    </div>
                </div>
            </div>
            <p className="mt-4 mb-0 text-center">Copyright &copy; 2021 Mamun Courier Services, All Rights Reserved.</p>
        </div>
    );
};

export default Footer;