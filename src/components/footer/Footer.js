import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <div className="footer">
        {/* Begin Footer Static Top Area */}
        
        {/* Footer Static Top Area End Here */}
        {/* Begin Footer Static Middle Area */}
        <div className="mt-50 footer-static-middle">
          <div className="container">
            <div className="footer-logo-wrap pt-50 pb-35">
              <div className="row">
                {/* Begin Footer Logo Area */}
                <div className="col-lg-4 col-md-6">
                  <div className="footer-logo">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/39/69/restaurant-logo-or-label-emblems-for-menu-design-vector-21433969.jpg" className="logo2" alt="Footer Logo" />
                    <p className="info">
                      We are a team of designers and developers that create high quality HTML Template &amp; Woocommerce, Shopify Theme.
                    </p>
                  </div>
                  <ul className="des">
                    <li>
                      <span>Address: </span>
                      6688Princess Road, London, Greater London BAS 23JK, UK
                    </li>
                    <li>
                      <span>Phone: </span>
                      <a href="#">(+123) 123 321 345</a>
                    </li>
                    <li>
                      <span>Email: </span>
                      <a href="mailto://info@yourdomain.com">info@yourdomain.com</a>
                    </li>
                  </ul>
                </div>
                {/* Footer Logo Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Product</h3>
                    <ul>
                      <li><a href="#">Prices drop</a></li>
                      <li><a href="#">New products</a></li>
                      <li><a href="#">Best sales</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Our company</h3>
                    <ul>
                      <li><a href="#">Delivery</a></li>
                      <li><a href="#">Legal Notice</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-4">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Follow Us</h3>
                    <ul className="social-link">
                      <li className="twitter">
                        <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="rss">
                        <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                          <i className="fa fa-rss" />
                        </a>
                      </li>
                      <li className="google-plus">
                        <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="youtube">
                        <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Static Middle Area End Here */}
        {/* Begin Footer Static Bottom Area */}
     
      </div>
    );
}

export default Footer;