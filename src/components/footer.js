import React from "react";

const Footer = () => {

    return (
        <footer>
            <div className="header d-flex align-items-end">
                <img
                    src={require("../images/fingerprint 2.png").default}
                    alt="ballotbox"
                />
                <div id="about">
                    <h1>Ballot<span>Box</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dignissim
                        leo dis viverra scelerisque volutpat quam. Ornare tellus, egestas amet posuere
                        at est tellus, auctor. Lobortis ante cursus enim, neque ipsum. Donec lorem sed
                        nisl amet varius tellus lorem vitae. At non massa nunc, donec amet turpis.
                        Velit eget enim, ante lectus lobortis eget amet faucibus justo. Leo volutpat</p>
                </div>
                <div className="follow">
                    <h3>FOLLOW US</h3>
                    <div className="row">
                        <div className="col-4">
                            <img
                                src={require("../images/Layer_x0020_1.png").default}
                                alt="facebook"
                            />
                        </div>
                        <div className="col-4">
                            <img
                                src={require("../images/Layer_x0020_1 (1).png").default}
                                alt="instagram"
                            />
                        </div>
                        <div className="col-4">
                            <img
                                src={require("../images/Twitter.png").default}
                                alt="Twitter"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="footer-end d-flex">
                <h6>Advertise with us</h6>
                <h6>Terms and Condition</h6>
                <h6>Privacy Policy</h6>
            </div>
        </footer>
    );
};

export default Footer;