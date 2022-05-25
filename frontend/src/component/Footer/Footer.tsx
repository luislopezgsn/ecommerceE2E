import React, {FC} from 'react';

import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className="page-footer p-5 bg-black text-white">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <p>© Copyright - Sngular QA 2022</p>
                    </div>
                    <div className="footer-right">
                        <h3>Social networks</h3>
                        <a href="https://www.linkedin.com/company/sngular">
                            <i className="fab fa-linkedin fa-2x mr-3" style={{color: "white"}}></i>
                        </a>
                        <a href="https://twitter.com/sngular">
                            <i className="fab fa-twitter fa-2x mr-3" style={{color: "white"}}></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCJDkEoAAZclorR4jEF9Kv3Q">
                            <i className="fab fa-youtube fa-2x mr-3" style={{color: "white"}}></i>
                        </a>
                        <a href="https://qa.sngular.com/es">
                            <i className="fas fa-globe fa-2x mr-3" style={{color: "white"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
