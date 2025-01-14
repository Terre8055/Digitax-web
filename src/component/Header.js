import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.scss";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          isScrolling: true,
        });
      } else if (window.scrollY === 0) {
        this.setState({
          isScrolling: false,
        });
      }
    });
    window.addEventListener("resize", () => {
      this.setState({
        isHeaderOpen: window.innerWidth > 1000,
      });
    });
  }
  render() {
    return (
      <div
        className={this.state.isScrolling ? "header header__active" : "header"}
      >
        <div className="header__wrapper">
          <Link
            to="/"
            className="header__logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="logo" className="main__logo" />
          </Link>
          <button
            className="menu__btn"
            onClick={() => {
              if (!this.state.isHeaderOpen) {
                this.setState({
                  isHeaderOpen: true,
                });
              } else {
                this.setState({
                  isHeaderOpen: false,
                });
              }
            }}
          >
            {this.state.isHeaderOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          {this.state.isHeaderOpen ? (
            <div
              className={
                this.state.isScrolling && this.state.isHeaderOpen
                  ? "header__nav header__nav__active"
                  : "header__nav"
              }
            >
              <Link
                to="/"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About Us
              </Link>
              <a
                className="nav__header__link__drop"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Services
                <div className="nav__header__link__dropdown">
                  <Link
                    to="/services"
                    className="nav__header__link__entry"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    IOSS
                  </Link>
                  <Link
                    to="/services-facial-representation"
                    className="nav__header__link__entry"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Fiscal Representation
                  </Link>
                  <Link
                    to="/services-taxpay"
                    className="nav__header__link__entry"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Taxpay
                  </Link>
                  <Link
                    to="/services-partnerships"
                    className="nav__header__link__entry"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Partnerships
                  </Link>
                </div>
              </a>
              <Link
                to="/faq"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                FAQ's
              </Link>

              <Link
                to="/contact"
                className="nav__header__link"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/about#partners"
                className="nav__header__link"
                onClick={() => {
                  // Remove the smooth scrolling here
                  // window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Partners & Compliance
              </Link>
              {/* <Link
                to="/login"
                className="nav__header__link__btn"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Login
              </Link> */}
              {/* <Link
                to="/sign-up"
                className="nav__header__link__btn__filled"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Create Account
              </Link> */}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
