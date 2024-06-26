import React, { Component } from "react";
import logo from "../logo.svg";
class Home extends Component {
  state = {
    theme: "dark",
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "dark" ? "light" : "dark" });
  };

  render() {
    const { theme } = this.state;
    const isDark = theme === "dark";
    const themeClass = isDark ? "dark-theme" : "light-theme";

    return (
      <React.Fragment>
        <div className={`container-fluid position-relative ${themeClass}`}>
          {/* Navigation Bar */}
          <div className="d-flex justify-content-between p-3 border-bottom">
            <img className="logo" src={logo} style={{ width: 100 }} alt="" />
            <div className="d-flex align-items-center">
              <div
                className="form-check form-switch me-3"
                onClick={this.toggleTheme}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>

              <button className="btn btn-outline-light row-6">Join now</button>
            </div>
          </div>
          <div className="container-fluid border my-1">
            <h6 className="mt-1">
              <u>Special launch offer</u>
            </h6>
            <div className="d-flex">
              <p style={{ fontSize: "13px" }}>
                Join iShareNodes today and enjoy a 50% fee reduction! This
                exclusive deal is available for our first 100 users. Don’t miss
                out!{"    "}
                <button
                  className="btn btn-outline-light btn-sm"
                  style={{ fontSize: "13px" }}
                >
                  Join Now on <i className="fa-brands fa-discord"></i>
                </button>
              </p>
            </div>
          </div>
          {/* Hero Section */}
          <div className="hero-section text-center py-6 position-relative d-flex flex-column align-items-center">
            <img
              className="logo mb-4"
              src={logo}
              alt=""
              style={{ zIndex: 1, fill: "white", width: 350 }}
            />
            <h1>Your Shared Masternode Hosting Platform on Discord</h1>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="mb-0">"The more we share, the more we have."</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Leonard Nimoy
              </figcaption>
            </figure>
          </div>

          {/* About Us Section */}
          <div className="section p-4 text-center my-4">
            <h2>About Us</h2>
            <p style={{ textAlign: "justify" }}>
              iShareNodes aims to democratize masternode investments.
              Traditionally, masternodes require a significant investment of
              collateral to operate, limiting participation to those with large
              capital. iShareNodes solves this problem by creating a shared
              masternode hosting platform. This allows anyone to participate in
              lucrative blockchain ventures and enjoy the benefits without
              needing a huge upfront investment.
            </p>
          </div>

          {/* Features Section */}
          <div className="section p-4 text-center my-4">
            <h2>Features</h2>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">User-Friendly Dashboard</h5>
                    <p className="card-text">
                      Intuitive Discord bot interface for real-time stats on
                      rewards and investment management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Secure Wallet Integration</h5>
                    <p className="card-text">
                      Easy deposit, withdrawal, and balance tracking with
                      enhanced security via Discord.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Flexible Withdrawals</h5>
                    <p className="card-text">
                      Withdraw your investment anytime after a 10-day maturity
                      period, ensuring stability and flexibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Transparent Reporting</h5>
                    <p className="card-text">
                      Receive detailed monthly earning reports through Discord
                      channel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Community Support</h5>
                    <p className="card-text">
                      Get help from dedicated support channels and our active
                      crypto community on Discord.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="section p-4 text-center my-4">
            <h2>FAQ</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button faq-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is a masternode?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    A masternode is a type of server within a decentralized
                    network that performs specific functions, such as validating
                    transactions and securing the network. Masternodes require a
                    significant investment of collateral to operate.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed faq-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I get started with iShareNodes?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    To get started,{" "}
                    <a href="http://www.discord.com">join our discord server</a>{" "}
                    and follow the step-by-step guide. Our intuitive interface
                    makes the process simple and straightforward.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the fees involved?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Our fees start as low as 4%. This rate can vary depending on
                    several factors such as the number of masternodes, the
                    rewards generated, and the frequency of user withdrawals and
                    deposits.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Is my investment secure?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, we use advanced encryption and multi-layered security
                    protocols to ensure your assets are safe. Our platform
                    undergoes regular security audits to maintain the highest
                    standards of protection.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="section p-4 text-center my-4">
            <h3 className="mb-4">
              Unlock Your Earning Potential with iShareNodes
            </h3>
            <button className="btn btn-outline-light btn-lg">
              Join Now on <i className="fa-brands fa-discord"></i>
            </button>
            <h4 className="mt-3 offer-message">
              Special Offer: First 100 users get 50% fee reduction. *Offer valid
              till July.
            </h4>
            <h3 className="mt-4"> Don't Miss Out! Start Earning Today!</h3>
            <p className="mb-0" style={{ fontSize: "10px" }}>
              *This offer is only valid for the first deposit made by the 100
              users.
            </p>
          </div>
          {/* Footer */}
          <div className="footer text-center py-3 border-top">
            <p>&copy; 2024 iShareNodes. All rights reserved.</p>
          </div>
        </div>

        {/* Styles */}
        <style jsx>{`
          .dark-theme {
            background-color: #000000;
            color: #ffffff;
          }
          .light-theme {
            background-color: #ffffff;
            color: #000000;
          }
          .hero-section {
            background-color: ${isDark ? "#333333" : "#f8f9fa"};
            color: ${isDark ? "#ffffff" : "#000000"};
            padding: 50px 0;
            transition: background-color 0.5s, color 0.5s;
          }
          .section {
            text-align: justify;
            background-color: ${isDark ? "#1a1a1a" : "#f8f9fa"};
            color: ${isDark ? "#ffffff" : "#000000"};
            border-bottom: 1px solid ${isDark ? "#444444" : "#dee2e6"};
            margin-bottom: 20px;
            padding: 40px;
            transition: background-color 0.5s, color 0.5s;
          }
          .card {
            background-color: ${isDark ? "#2a2a2a" : "#ffffff"};
            color: ${isDark ? "#ffffff" : "#000000"};
            border: 1px solid ${isDark ? "#444444" : "#dee2e6"};
            transition: background-color 0.5s, color 0.5s;
          }
          .btn-outline-light {
            color: ${isDark ? "#ffffff" : "#000000"};
            border-color: ${isDark ? "#ffffff" : "#000000"};
            transition: color 0.5s, border-color 0.5s;
          }
          .btn-outline-light:hover {
            background-color: ${isDark ? "#ffffff" : "#000000"};
            color: ${isDark ? "#000000" : "#ffffff"};
          }
          .logo {
            transition: filter 0.3s ease-in-out;
          }
          .dark-theme .logo {
            filter: invert(1);
          }
          .light-theme .logo {
            filter: invert(0);
          }
          .offer-message {
            color: #ff6347; /* Tomato color for visibility */
            font-weight: bold;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Home;
