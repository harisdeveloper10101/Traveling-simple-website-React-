import React from "react";
import "./Footer.css";
import { BrowserRouter, Link, } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function FooterComponent() {
  return (
    <BrowserRouter>
      <footer>
        <section className="footer-uppersection">
          <section className="section-details">
            <h1>Khattak</h1>
            <p>Hotels,Homestay,Tour & Travels Booking & Reviews</p>
            <div className="sections-details-icons">
              <SocialIcon
                url="https://www.facebook.com/harisdeveloper10101/"
                network="facebook"
                bgColor="#000"
              />
              <SocialIcon
                url="https://www.instagram.com/haris.developer10101/"
                network="instagram"
                bgColor="#000"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/haris-umar-76a21b1b5/"
                network="linkedin"
                bgColor="#000"
              />
            </div>
          </section>
          <section className="section-menu">
            <span className="menu-title">our menu</span>

            <ul className="menu-style-list">
              <li>
                <Link to="\about" className="menu-list-name">
                  about us
                </Link>
              </li>
              <li>
                <Link to="\affiliateprograms" className="menu-list-name">
                  affiliate programs
                </Link>
              </li>
              <li>
                <Link to="\cookies" className="menu-list-name">
                  Cookies policy
                </Link>
              </li>
              <li>
                <Link to="\farerules" className="menu-list-name">
                  Fare Rules
                </Link>
              </li>
              <li>
                {" "}
                <Link to="\policy" className="menu-list-name">
                  Privacy policy
                </Link>
              </li>
              <li>
                {" "}
                <Link to="\tester" className="menu-list-name">
                  tester
                </Link>
              </li>
            </ul>
          </section>
          <section className="section-links section-menu">
            <span className="menu-title">useful links</span>

            <ul className="menu-style-list">
              <li>
                <Link to="\faqs" className="menu-list-name">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="\testing2" className="menu-list-name">
                  Testing 2
                </Link>
              </li>
              <li>
                <Link to="\useragreements" className="menu-list-name">
                  User Agreements
                </Link>
              </li>
            </ul>
          </section>
          <section className="section-questions section-menu">
            <span className="menu-title">have questions?</span>

            <ul className="menu-style-list">
              <li>
                <Link to="\support" className="menu-list-name">
                  support@khattak.com
                </Link>
              </li>
              <li>
                <Link to="\customerservice" className="menu-list-name">
                  Customer support
                </Link>
              </li>
              <li>
                <Link to="\support" className="menu-list-name">
                  <img
                    src="../../../assets/googleplay.png"
                    alt=""
                    className="menu-list-icons"
                  />
                </Link>
              </li>
              <li>
                <Link to="\customerservice" className="menu-list-name">
                  <img
                    src="../../../assets/appstore.png"
                    alt=""
                    className="menu-list-icons"
                  />
                </Link>
              </li>
            </ul>
          </section>
          <section className="section-contact section-menu">
            <span className="menu-title">contact us</span>
            <ul className="menu-style-list">
              <li className="menu-list-name">
                <Link to="\customerservice" className="menu-list-name menu-list-address">
                  Khattak Traveling company
                </Link>
              </li>
              <li className="menu-list-name">Address: Chinar Bagh, Kashrote</li>
              <li className="menu-list-name">Karakoram University</li>
              <li className="menu-list-name">Gilgit City - Pakistan</li>
              <li className="menu-list-name">Bussiness Registeration & </li>
              <li className="menu-list-name">Tax Code:+92-347-8481231 </li>
            </ul>
          </section>
        </section>
        <section className="footer-bottomsection">
          <p>2022 Khattak Company Limited. All Rights Reserved</p>
        </section>
      </footer>
    </BrowserRouter>
  );
}
export default FooterComponent;
