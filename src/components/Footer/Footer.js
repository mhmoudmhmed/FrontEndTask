import React from "react";
import "./Footer.scss";

const links = [
  "about us",
  "contact us",
  "track order",
  "terms & condition",
  "privacy policy",
  "sell with us",
  "shipping and returns",
];
const socialMedia = [
  {
    uri: "./images/facebook.svg",
  },
  {
    uri: "./images/linkedin.svg",
  },
  {
    uri: "./images/insta.svg",
  },
  {
    uri: "./images/twitter.svg",
  },
];
const paymentMethods = ["./images/cash.png", "./images/visa.png", "./images/master.png"];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer_wrapper">
          <div className="left">
            <img alt="logo" src={"./images/logo.svg"} />
            <p className="text">
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </span>
              <span>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia
              </span>
              <span>
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit
              </span>
            </p>
          </div>
          <div className="border" />
          <div className="right">
            <p className="text">Subscribe to our newsletter</p>
            <form action="#">
              <input type="text" placeholder="Enter Your Mail" />
              <button>
                Subscribe
                <img alt="newsletter" src={"./images/newsletter.svg"} />
              </button>
            </form>
            <div className="footer_links">
              <div className="links">
                {links.map((link, index) => {
                  return <span key={index}>{link}</span>;
                })}
              </div>
              <div className="social_media">
                <div className="left_border" />
                <div className="images">
                  {socialMedia.map((social, index) => {
                    return (
                      <p key={index}>
                        <img alt="social" src={social.uri} /> /YESHTRY
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_line" />
        <div className="bottom_footer">
          <p className="rights">© 2021 yeshtery, all rights reserved.</p>
          <div className="payment_methods">
            {paymentMethods.map((method, index) => {
              return <img alt="payment method" src={method} key={index} />;
            })}
          </div>
          <div className="powered">
            <p>Powered By</p>
            <img alt="nasnav" src={"./images/nasnav.svg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
